import { Grid } from "@mui/material";
import GoogleSignup from './Google';
import FacebookSignup from "./Facebook";


const FedratedLogins = () => {

    return(
        <>
            <Grid container spacing={4}>
                    <Grid item xs={6} sm={6} mt={2}>
                        <GoogleSignup />
                    </Grid>

                    <Grid item xs={6} sm={6}>
                        <FacebookSignup />
                    </Grid>
            </Grid>
        </>
    )
}

export default FedratedLogins;