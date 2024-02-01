import { Box,TextField } from "@mui/material"
import { Form } from "react-router-dom";

const BoardSearch = () => {
    
    return(
        <>
            <Box marginLeft={50}>
                <Form>
                    <TextField size="small"  variant="outlined" label="search" name="nav-search"/>
                </Form>
            </Box>
        </>
    )
}

export default BoardSearch;