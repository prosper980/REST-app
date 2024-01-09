import { Grid } from "@mui/material"
import { Link } from "react-router-dom"

interface HeaderProp{
    alert : string,
    location : string
}

const UserAlready = ({ alert, location }:HeaderProp) => {

    return (
        <>
            <Grid container sx={{display: "flex", justifyContent:"flex-end"}}>
                <Grid item>
                    <Link to={location}>
                            {alert}
                    </Link>
                </Grid>
            </Grid>
        </>
    )
}

export default UserAlready;