import { ActionFunction } from "react-router-dom";
import axios, {AxiosResponse} from "axios";


export const action : ActionFunction = async ( { request } ) => {

    const formData  =  Object.fromEntries(await request.formData());

    const res : AxiosResponse = await axios({
        method : 'post',
        url: 'http://localhost:5174/user/signin',
        data : formData,
        timeout : 8000
    });
    const {id, statusCode, token, verification, errorMessage} = res.data;

    if(statusCode !== 200){
        return errorMessage;
    }



    return null;

} 