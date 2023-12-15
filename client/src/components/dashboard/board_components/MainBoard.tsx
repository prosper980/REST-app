import { Box } from "@mui/material"
import NavBoard from './BoardNav';

const MainBoard = () => {
    
    return(
        <>
            <Box sx={{height: "100%", bgcolor:'#45ff'}}>
                <NavBoard />
            </Box>
        </>
    )
}

export default MainBoard;