import tokenVerify from "../services/token-verify-service";
import { Request, Response, NextFunction } from "express";


const validTokenVerify = (req : Request, res:Response , next:NextFunction) => {

    /* 
        verify token service
    */ 
    const {token} = req.body;
    
    console.log(typeof req);

    const response = tokenVerify(token);

    if(!response){
        console.log("Invalid token");
    }
    
    console.log(response);


    next();
}

export default validTokenVerify;