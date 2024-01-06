import jwt from 'jsonwebtoken';


const tokenVerify = (token : string) => {
    
    try {
        
        const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
        if(!verifyToken){
            console.log(verifyToken);
            return false;
        }

        return true;

    } catch (error) {
        console.log(error)
        return false;
    }

} 

export default tokenVerify;