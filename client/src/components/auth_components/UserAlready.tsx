import { Grid, Link } from "@mui/material"


const UserAlready = () => {

    return (
        <>
            <Grid container sx={{display: "flex", justifyContent:"flex-end"}}>
                <Grid item>
                    <Link href="#" variant="body2">
                            I have an account here!
                    </Link>
                </Grid>
            </Grid>
        </>
    )
}

export default UserAlready;