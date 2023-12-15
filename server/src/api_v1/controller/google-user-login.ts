import { Request, Response } from "express"
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client';

interface UserData{
    token: string
    id: number
}

interface GoogleData {
    email : string
    name : string
    picture : string
}

const googleUserLoginController = async (req:Request): Promise<UserData> => {

    try {

        const prisma = new PrismaClient();

        const { googleToken } = req.body;

        const token = jwt.decode(googleToken);
    
        if(typeof token === 'object'){
            const { email, name, picture } = token;
    
            const userExist = await prisma.user.findUnique({
                where: {
                    email: email
                }
            })
    
            if(!userExist){
                const user = await prisma.user.create({
                    data : {
                        email : email,
                        name : name,
                        profileImageLink : picture                        
                    }
                })
                const jwtToken = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn : '1h' });

                return { token : jwtToken, id: user.id };
            }

        
            const jwtToken = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn : '1h' });
            const id = userExist.id;
            
            return { token : jwtToken, id }
            
            
        }
    
        return null;
    
    } catch (error) {
        console.log(error);
    }
    return null;
}

export default googleUserLoginController;