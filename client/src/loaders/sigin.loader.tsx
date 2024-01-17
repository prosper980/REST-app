import { LoaderFunction,redirect } from 'react-router-dom';
import axios,{AxiosResponse} from 'axios';

export const loader:LoaderFunction = async () => {

    try {

        const userLocalStorageData = localStorage.getItem("dashuser");

        if(!userLocalStorageData){
            return null;
        }

        if(typeof userLocalStorageData === 'string'){

            const {token} = JSON.parse(userLocalStorageData);


            const res:AxiosResponse = await axios({
                method : 'post',
                url: 'http://localhost:5174/user/verifyToken',
                data: { token },
                timeout:8000
            })
            
            if(res.data === false){
                return null;
            }
        } 

        return redirect("/dashboard");

    } catch (error) {
        console.error(error)
        return null;
    }

}

