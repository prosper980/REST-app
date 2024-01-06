import { ActionFunction } from "react-router-dom";


export const action : ActionFunction = async ( { request } ) => {

    const formData  =  Object.fromEntries(await request.formData());

    console.log(formData);
    return null;

} 