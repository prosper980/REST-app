import { Box} from "@mui/material"
import BoardSearch from "./BoardNavSearch";
import NavButton from "./NavButton";

const NavBoard = () => {
    
    return(
        <>
            <Box sx={{display:"flex", justifyContent:"space-between",alignContent:"center", padding:0.5, backgroundColor:"white"}}>

                <Box>
                    <BoardSearch />
                </Box>

                <Box>
                    <NavButton />
                </Box>
            </Box>
        </>
    )
}

export default NavBoard;