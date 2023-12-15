import { Snackbar, Alert } from "@mui/material";

interface SignupAlertProps {   
    warningMessage : string
    componentState : boolean
}


const PasswordMissMatch: React.FC<SignupAlertProps> = ( {warningMessage, componentState} ) => {

    return (
        <>
            <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} open={componentState} autoHideDuration={8000}>
                <Alert severity="warning" sx={{ width: '100%' }}>
                    {warningMessage}
                </Alert>
            </Snackbar>  
        </>
    )
}

export default PasswordMissMatch;