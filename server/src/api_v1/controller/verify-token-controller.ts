import { Request} from 'express' 
import tokenVerify from '../services/token-verify-service';

const tokenVerifyController = (req:Request) => {
    const {token} = req.body;
    const tokenIsValid = tokenVerify(token);

    const res = (tokenIsValid) ? true : false;
    
    return res;
}

export default tokenVerifyController;