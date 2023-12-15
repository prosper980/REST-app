import { AxiosError, AxiosResponse } from 'axios';
import axios from 'axios'
import { ActionFunction, redirect } from 'react-router-dom';



export const action: ActionFunction = async ({ request }) => {

    try {
        const formData   =  Object.fromEntries(await request.formData());

        const { firstName, lastName, email, password, repeatedPassword } = formData;
    
        if(!firstName || !lastName || !email || !password || !repeatedPassword){
    
            const err = "All fields are required";
            return err;
        }
    
        if(password !== repeatedPassword){
            return `Passwords do not match`;
        }
    
        const res : AxiosResponse = await axios({
            method : 'post',
            url: 'http://localhost:5174/user/signup',
            data : formData,
            timeout : 8000
        });
        
        console.log(res);
        
        console.log(res.data);
         if(res.status === 201){
            localStorage.setItem("dashuser", JSON.stringify(res.data));
         }
        
        return redirect("/dashboard");
        
    } catch (error : unknown){
  
        if(error instanceof AxiosError){
            return error.response?.data || null;
        }else{
            console.error(error);
        }

        return  null;

    }
    
 
}