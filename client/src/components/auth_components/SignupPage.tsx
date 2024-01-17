import { ThemeProvider } from "@emotion/react";
import theme from "../../theme";
import { Box, Button, Container, Grid, TextField, Typography, LinearProgress } from "@mui/material";
import { Form, useActionData, useNavigation } from "react-router-dom";
import { useState } from 'react';
import SignupHeader from "./SignupHeader";
import UserAlready from "./UserAlready";
import PasswordMissMatch from "../alert/PasswordMissMatch";
import SignupInfo from "../alert/SignupInfo";
import FedratedLogins from "./FedratedLogins";

 const SignUp = () => {

    const actionData = useActionData() as string;
    const navigation = useNavigation();


    const [open, setOpen] = useState(false);
    const [warning, setWarning] = useState<string>(" ")

    function handleOnchange(event : React.ChangeEvent<HTMLInputElement>){

        event.stopPropagation();
        event.preventDefault();

        const password: HTMLInputElement = document.getElementById("password") as HTMLInputElement;
        const repeatedPassword: HTMLInputElement = document.getElementById("repeatedPassword") as HTMLInputElement;

        if(password?.value !== repeatedPassword?.value){
            setOpen(true);
            setWarning("Passwords do not match");
        }else{
            setOpen(false)
        }
    }
 
    return(
      <>
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">

                <Box sx={{marginTop: 2, display: 'flex', flexDirection:'column', alignItems:'center'}}>   
                
                    <Box mb={1}>
                        <SignupHeader main="Sign Up For An Account:" sub="Sign up for an account using" />
                    </Box>      

                    
                    <FedratedLogins />
                    

                    <Typography sx={{opacity:0.6}} mt={2}>
                            Or use:
                    </Typography>

                    <Box sx={{mt:2}}>
                        <Form method="post" id="form">

                            <Grid container spacing={2} mb={1}>
                                <Grid item xs={6} sm={6}>
                                    <TextField autoComplete="given-name" required  name="firstName" label="First name" fullWidth id="firstName" autoFocus />
                                </Grid>

                                <Grid item xs={6} sm={6}>
                                    <TextField autoComplete="family"  name="lastName" label="Last name" required fullWidth id="lastName" autoFocus />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField required autoComplete="email" fullWidth name="email" label="Email" type="email" id="email"/>
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField required  itemID="password" fullWidth name="password" label="Password" type="password" id="password"/>
                                </Grid>


                                <Grid item xs={12}>
                                    <TextField required  onChange={handleOnchange} itemID="repeatedPassword" fullWidth  name="repeatedPassword" label="Repeat password" type="password" id="repeatedPassword"/>
                                </Grid>
                            </Grid>

                            { actionData ? <SignupInfo alertSeverity={`info`} alertMessage={actionData} /> : " "}

                            { navigation.state === "submitting" ? <LinearProgress />  : " "}

                            <Button type="submit" fullWidth variant="contained" sx={{mt:2, mb:2, bgcolor:'primary.main'}}>
                                Sign up
                            </Button>

                            <UserAlready location="/" alert="I have an account" />

                        </Form>

                    </Box>
                </Box>
            </Container>

           <PasswordMissMatch warningMessage={warning} componentState={open} />
           
        </ThemeProvider>
      </>  
    )
}

export default SignUp;