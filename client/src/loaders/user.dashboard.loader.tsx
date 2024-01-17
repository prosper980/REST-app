import { LoaderFunction, redirect } from "react-router-dom";
import tokenVerify from "../services/tokenVerify";


export const loader:LoaderFunction = async () => {

    //load user info from localstorage or send user to login 
    //get user data with info
    try {

        const localStorageUserInfo = localStorage.getItem("dashuser");
    
        if(!localStorageUserInfo){
            return redirect("/");
        }

        if(typeof localStorageUserInfo === 'string'){
            const parsedLocalStorgeUserInfo = JSON.parse(localStorageUserInfo);

            const verify = tokenVerify(parsedLocalStorgeUserInfo);

            if(!verify){
                return redirect("/");
            }

        }else{
            redirect('/');
        }

        return null;
    } catch (error) {
        console.error(error); 
        return null;
    }

}
