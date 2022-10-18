// import { MusicNote, Reviews } from "@mui/icons-material";
import { Box, Drawer, Grid, IconButton,  Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

import MenuIcon from '@mui/icons-material/Menu';
import WidgetsIcon from '@mui/icons-material/Widgets';

import Data from "./service-screen/Data";
// import ResponsiveDrawer from "./service-screen/ResponsiveDrawer";
// import Drawer from '@mui/material/Drawer';



function Service(){





    

// function MyDrawer(){
//     const [isDrawerOpen,setIsDrawerOpen] = useState(false)

//     return(
//         <>
//         <IconButton size='large' edge="start" color="inherit" aria-label="logo" onClick={()=>setIsDrawerOpen(true)}>
//             <MenuIcon className="fs-1 fw-bold text-info"/>

//         </IconButton>
//         <Drawer anchor="left"
//         open={isDrawerOpen}
//         onClose={()=>setIsDrawerOpen(false)}>
//             <Box p={2} width="250px" textAlign="start" role="presentation"  >
//                 <Typography variant="h6" component="div" className="mt-5 fs-1 review">Services </Typography>
                
//                <Typography variant="h6" component="div"><Link className="mt-5 fs-4 review" to="communication">Communications</Link> </Typography>
//                <Typography variant="h6" component="div"><Link className="mt-5 fs-4 review" to="reviews">Reviews</Link> </Typography>
//                 <Typography variant="h6" component="div"><Link className="mt-5 fs-4 review" to="design">Design</Link> </Typography>
                
//             </Box>





           

//         </Drawer>


//         <Routes>
//               <Route path="communication" element={<Communications/>}/>
//               <Route path="reviews" element={<Reviews/>}/>
//               <Route path="design" element={<Design/>}/>





//             </Routes>





//         </>
//     )



// }    



    










    const navigate = useNavigate()
    return (
        <Grid >



            {<Data/>}



         

            




            {/* <Grid>
                <Typography variant="h3" className="fw-bold text-info mt-5">Services </Typography>
            </Grid>
            <Grid className="d-flex justify-content-evenly mt-5 parentDiv">
                <Grid className="box"><img width={"50%"} src={image}/>
                <Typography variant="h4" className="fw-bold text-info">Communications Skills</Typography>
                <Typography variant="h5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Typography>
                <button className="btn btn-info mt-5 px-4 p-2 text-white fw-bold">More</button>
                                
                
                
                </Grid>
                <Grid className="box"><img width={"50%"} src={image1}/>
                <Typography variant="h4" className="fw-bold text-info">Inspired Design</Typography>
                <Typography variant="h5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </Typography>
                <button className="btn btn-info mt-5 px-4 p-2 text-white fw-bold">More</button></Grid>
                <Grid className="box"><img width={"50%"} src={image2}/>
                <Typography variant="h4" className="fw-bold text-info">Happy Customer</Typography>
                <Typography variant="h5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </Typography>
                <button className="btn btn-info mt-5 px-4 p-2 text-white fw-bold">More</button></Grid>
                
            </Grid> */}
            {/* <button className="btn btn-secondary mt-5 fs-4 px-5 " onClick={()=>navigate('/')}>Continue</button> */}
        </Grid>
    )
}


export default Service;