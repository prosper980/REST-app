import express,{Request, Response} from 'express';
import validTokenVerify from '../middleware/valid-token-verify-middleware';


export const authUserRequest = express.Router();

//middleware here
authUserRequest.use(validTokenVerify);


authUserRequest.get("/", (req: Request, res: Response) => {
    res.send("Authenticated user");
    console.log("endpoint");
})
