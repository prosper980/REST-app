import { Snackbar, Alert } from "@mui/material";

interface SignupAlertProps {   
    warningMessage : string
    componentState : boolean
    hideDurationTime : number
}


const PasswordMissMatch: React.FC<SignupAlertProps> = ( {warningMessage, componentState, hideDurationTime} ) => {

    return (
        <>
            <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} open={componentState} autoHideDuration={hideDurationTime}>
                <Alert severity="warning" sx={{ width: '100%' }}>
                    {warningMessage}
                </Alert>
            </Snackbar>  
        </>
    )
}

export default PasswordMissMatch;