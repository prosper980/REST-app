import { ThemeProvider } from "@emotion/react"
import theme from "../../theme"
import { Container, Box, Grid, TextField, Button, Typography } from "@mui/material";
import { Form, useActionData } from "react-router-dom";
import FedratedLogins from "./FedratedLogins";
import SignupHeader from "./SignupHeader";
import SignupInfo from "../alert/SignupInfo";

const SignIn = () => {
    const actionData = useActionData();
    console.log(actionData);
    return(
    <>
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">

                <Box sx={{marginTop: 2, display: 'flex', flexDirection:'column', alignItems:'center'}}>   

                    <Box mb={1}>
                        <SignupHeader main={`Sign Into Your Account`} sub={' '}/>
                    </Box>      

                        
                    <FedratedLogins />
                        
                    <Box sx={{mt:2}}>
                        <Form method="post" id="form">

                            <Grid container spacing={2} mb={1}>
                                <Grid item xs={12}>
                                    <TextField required autoComplete="email" fullWidth name="email" label="Email" type="email" id="email"/>
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField required  itemID="password" fullWidth name="password" label="Password" type="password" id="password"/>
                                </Grid>
                            </Grid>

                            <Button type="submit" fullWidth variant="contained" sx={{mt:2, mb:2, bgcolor:'primary.main'}}>
                                Signin
                            </Button>

                            <Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h2">
                                        { actionData ? actionData : " "}
                                    </Typography>
                                </Grid>
                            </Grid>

                        </Form>

                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    </>
    )
}

export default SignIn;