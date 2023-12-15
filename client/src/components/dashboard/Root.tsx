import { Grid, Box } from "@mui/material";
import MainNav from "./side_nav_components/SideNav";
import MainBoard from './board_components/MainBoard';

const Root = () => {

    return(
        <>
            <Box sx={{flexGrow: 1}}>
                <Grid container height={'100vh'}>
                    <Grid item xs={2}>
                        <MainNav />
                    </Grid>

                    <Grid item xs={10} height={'100vh'}>
                        <MainBoard />
                    </Grid>
                </Grid>
            </Box>

        </>
    )

}

export default Root;