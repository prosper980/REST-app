import { LoaderFunction, redirect } from "react-router-dom";


export const loader:LoaderFunction = async () => {

    try {

        const userLocalStorageData = localStorage.getItem("dashuser");

        if(!userLocalStorageData){
            return null;
        }

        if(typeof userLocalStorageData === 'string'){
            const jsonUserData = JSON.parse(userLocalStorageData);
            console.log() 
        } 

    } catch (error) {
        console.error(error)
        return null;
    }
   
}