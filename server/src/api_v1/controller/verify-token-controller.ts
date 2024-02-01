import { Request} from 'express' 
import tokenVerify from '../services/token-verify-service';

const tokenVerifyController = (req:Request) => {

    const {token} = req.body;
    
    const tokenIsValid = tokenVerify(token);

    return tokenIsValid ? true : false;
    
}

export default tokenVerifyController;