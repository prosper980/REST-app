import express,{Request, Response} from 'express';


export const authUserRequest = express.Router();

//middleware here


authUserRequest.get("/", (req:Request, res:Response) => {
    res.send("user");
    console.log("auth user");
})

authUserRequest.get("/auth", (req: Request, res: Response) => {
    res.send("Authenticated user");
    console.log("endpoint");
})