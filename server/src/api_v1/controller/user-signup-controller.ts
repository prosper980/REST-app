import signUpUserService from "../services/signup-user-service"

interface UserData {
    firstName : string,
    lastName : string
    email : string
    password : string
    repeatedPassword : string
}


interface Data {
    id? : number,
    token?: string,
    errorMessage? : string
    statusCode : number
    userName? : string
}


const userSignupController = async (userData : UserData) : Promise<Data> => {


    const { firstName, lastName, email, password, repeatedPassword } = userData;


    if(!firstName || !lastName || !email || !password || !repeatedPassword){
  
        return { errorMessage : "All fields are required", statusCode : 401 };
    }

    if(password !== repeatedPassword){

        return { errorMessage : "Passwords do match", statusCode : 401 };
    }

    const serviceData = await signUpUserService(firstName, lastName, email, password);

    if(serviceData.error){

        return { errorMessage : serviceData.error, statusCode : 409 };
    }
    
    return { id : serviceData.id, userName : serviceData.userName, token : serviceData.newToken, statusCode : 201 };
}

export default userSignupController;