import jwt from 'jsonwebtoken';


const tokenVerify = (token : string) => {

    try {

                
        const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
        if(!verifyToken){
            console.log(token);
            return false;
        }

        //console.log(verifyToken);

        return true;
        

    } catch (error) {
        if(error){
            console.log(error);
            return false;
        }
    }
    
    



   

} 

export default tokenVerify;