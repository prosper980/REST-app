import { Typography } from "@mui/material";

const SignupHeader = () => {

    return(
        <>
            <Typography sx={{fontSize:"2em",fontWeight:'bold', opacity:0.9}}>
                Sign Up For An Account
            </Typography>

            <Typography sx={{opacity:0.6}}>
                Sign up for an account using:
            </Typography>
        </>
    )
}

export default SignupHeader;

