import {  Avatar, Box, Typography} from "@mui/material";


const Profile = () => {

    return(
        <>
            <Box sx={{display: 'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
                <Box>
                        <Avatar src="https://surgassociates.com/wp-content/uploads/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg"
                           sx={{width:40, height:40, marginBottom:1 }} 
                        />
                        
                </Box>

                <Box>
                    <Typography fontSize={15} fontWeight={'bold'}> {'John Doe'} </Typography>
                    <Typography sx={{opacity:0.6,fontSize:10, textAlign:'center'}}> {'location'} </Typography>
                </Box>

                <Box sx={{display:'flex', justifyContent:"center" ,alignContent:'center', marginTop:1, marginBottom:1}}>
                    <Box marginRight={4} textAlign={'center'}>
                        <Typography fontSize={11} fontWeight={'bold'}> {127} </Typography>
                        <Typography sx={{opacity:0.6,fontSize:10, textAlign:'center'}}> {'videos'} </Typography>
                    </Box>

                    <Box textAlign={'center'}>
                        <Typography fontSize={11} fontWeight={'bold'}> {'36.5k'} </Typography>
                        <Typography sx={{opacity:0.6, fontSize:10, textAlign:'center'}}> {'subscribers'} </Typography>
                    </Box>

                </Box>
            </Box>
        </>
    )
}

export default Profile;