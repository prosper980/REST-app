
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const GoogleSignup = () => {

    const navigate = useNavigate();

    return(
        <>
            <GoogleLogin onSuccess={
               async (cred) => {
                    
                  try {
                    const res = await axios({
                        method : 'post',
                        url : 'http://localhost:5174/user/googlelogin',
                        data : {
                            googleToken : cred.credential
                        }
                    })
                    localStorage.setItem("dashuser", JSON.stringify(res.data));
                    navigate("/dashboard");

                  } catch (error) {
                    console.error(error);
                  }
                }

            } 
            onError={
                () => { console.log("failed")}
            } />
        </>

    )

    
}

export default GoogleSignup;