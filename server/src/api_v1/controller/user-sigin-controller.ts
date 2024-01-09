import { Request } from "express";
import emailFinder from "../services/email-finder-services";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'


type Data = {
    errorMessage? : string
    statusCode : number
    verification : boolean
    token? : string
    id? : number
}

const userSigninController = async (req:Request) : Promise<Data>  => {
    
    try {
        
        const {email, password} = req.body;

        if(!email || !password || !req.body){

            return {errorMessage : "no data", statusCode : 400, verification : false };
        }

        const {userPassword, userEmail, userId} = await emailFinder(email);

        if(!userEmail){
            return {errorMessage : "email does not exist sign up", statusCode : 400, verification : false };
        }

        const match = await bcrypt.compare(password, userPassword);

        if(!match){
            return {errorMessage : "Password does not match", statusCode : 400, verification : false };
        }

        const userToken = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn : '1h' });


        return {
            statusCode : 200,
            verification : true,
            token : userToken,
            id : userId
        }
        
        
    } catch (error) {
        console.log(error);
    }

    return null;

}
export default userSigninController;