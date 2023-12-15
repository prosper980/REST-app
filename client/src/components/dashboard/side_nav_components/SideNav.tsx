import {Divider, Grid, ThemeProvider } from "@mui/material";
import theme from "../../../theme";
import Logo from "./Logo";
import Profile from "./Profile";

const MainNav = () =>{
    return(
        <>
            <ThemeProvider theme={theme}>
                <Grid container sx={{display:'flex', flexDirection:'column'}}>
                    <Grid item xs={12}>
                        <Logo />
                    </Grid>

                    <Grid item xs={12}>
                        <Profile />
                    </Grid>

                    <Grid item padding={1}>
                        <Divider />
                    </Grid>
                </Grid>
            </ThemeProvider>    
        </>
    )
}


export default MainNav;