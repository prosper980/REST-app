import { ActionFunction, redirect } from "react-router-dom";
import axios, {AxiosResponse} from "axios";


export const action : ActionFunction = async ( { request } ) => {

    const formData  =  Object.fromEntries(await request.formData());

    const res : AxiosResponse = await axios({
        method : 'post',
        url: 'http://localhost:5174/user/signin',
        data : formData,
        timeout : 8000
    });

    const {statusCode ,errorMessage} = res.data;

    if(statusCode === 200){
        localStorage.setItem("dashuser", JSON.stringify(res.data));

        return redirect("/dashboard");
    }
    return errorMessage;

} 