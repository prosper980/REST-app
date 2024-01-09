import express, {Request, Response} from 'express';
import userSignupController from '../controller/user-signup-controller';
import googleUserLoginController from '../controller/google-user-login';
import tokenVerifyController from '../controller/verify-token-controller';
import userSigninController from '../controller/user-sigin-controller';

export const userRoutes = express.Router()
//middlewares here


//remove 
userRoutes.get("/", (req:Request, res:Response) => {
    res.send("user");
})

userRoutes.post("/signin", async (req: Request, res:Response) => {
    const data = await userSigninController(req);
    res.send(data).status(data.statusCode);
})

userRoutes.post("/signup", async (req:Request, res:Response) => {
    const data = await userSignupController( req.body);

    if(data.errorMessage){
        res.status(data.statusCode).send(data.errorMessage);
    }else{
        res.status(data.statusCode).send({id : data.id,userName : data.userName, token : data.token});
    }
})

userRoutes.post("/googlelogin",async (req:Request, res:Response) => {
    const data = await googleUserLoginController(req);
    res.status(200).send(data);
})

userRoutes.post("/verifyToken",(req:Request, res:Response) => {
    const tokenVerify = tokenVerifyController(req);
    res.status(200).send(tokenVerify);
})






