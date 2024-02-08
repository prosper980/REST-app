import axios,{ AxiosResponse } from "axios";

type Token = {
    token : string
}

const tokenVerify = async ({ token } : Token ) => {

    try {

        console.log(token);

            const res:AxiosResponse = await axios({
                method : 'post',
                url: 'http://localhost:5174/user/verifyToken',
                data: {token} ,
                timeout:8000
            })
            
            console.log(res.data);

            return res.data ? true : false;

    } catch (error) {
        console.error(error)
        return false;
    }
}

export default tokenVerify;