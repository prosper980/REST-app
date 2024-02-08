import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';


interface Data {
    id? : number
    newToken? : string
    error? : string
    userName? : string
}


const signUpUserService = async (firstName : string , lastName : string, email : string, password : string ) : Promise<Data> => {

    try {
        
        const prisma = new PrismaClient();

        const token = jwt.sign({data : email }, process.env.JWT_SECRET, { expiresIn : '1h' });

        const fullName = firstName.concat(" ", lastName);

        const passwordHash = await bcrypt.hash(password, 15);

        const userAlreadyExist: { email : string } | null = await prisma.user.findUnique({
            where : {
                email : email
            },
            select : {
                email : true
            }
        }) 

        if(userAlreadyExist){
            console.log(userAlreadyExist);
            const data:Data = { error: `There's an account for: ${userAlreadyExist.email} already, please sign in`};
            return data;
        }


        const newUser = await prisma.user.create({
            data : {
                name : fullName,
                email : email,
                password : passwordHash

            }
        })

        return { id : newUser.id,userName : newUser.name, newToken : token }

    } catch (error) {
        console.log(error);

        return null;
    }
    
}


export default signUpUserService;