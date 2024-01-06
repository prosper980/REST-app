import { LoaderFunction, redirect } from "react-router-dom";


export const loader:LoaderFunction = async () => {

    //load user info from localstorage or send user to login 
    //get user data with info
    try {

        const localStorageUserInfo = localStorage.getItem("dashuser");
    

        if(typeof localStorageUserInfo === 'string'){
            const parsedLocalStorgeUserInfo = JSON.parse(localStorageUserInfo);

            //console.log(parsedLocalStorgeUserInfo);
        }else{
            redirect('/');
        }

        return null;
    } catch (error) {
        console.error(error); 
        return null;
    }

}
