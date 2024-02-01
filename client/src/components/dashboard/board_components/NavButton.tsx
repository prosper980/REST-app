import { Box,Button } from "@mui/material"
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from "react-router-dom";


const NavButton = () => {

    return (
        <>
            <Box>
                <Link to={"#"}>
                    <Button variant="outlined" startIcon={<SettingsIcon />}>
                        Settings
                    </Button>
                </Link>

            </Box>
        </>
    )
}

export default NavButton;