import { Alert, AlertColor} from "@mui/material"

interface AlertComponentProps  {
    alertSeverity : AlertColor
    alertMessage : string
}


const SignupInfo : React.FC<AlertComponentProps> = ({ alertSeverity, alertMessage }) => {

    return (
        <>
            <Alert severity={alertSeverity}> {alertMessage}  </Alert>
        </>
    )
}

export default SignupInfo;