import { Typography } from "@mui/material";

type HeaderProps = {
    main : string,
    sub : string
}

const SignupHeader = ({main,sub}:HeaderProps) => {

    return(
        <>
            <Typography sx={{fontSize:"2em",fontWeight:'bold', opacity:0.9}}>
                {main}
            </Typography>

            <Typography sx={{opacity:0.6}}>
                {sub}
            </Typography>
        </>
    )
}

export default SignupHeader;

