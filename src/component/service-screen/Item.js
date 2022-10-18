import React from "react";
import { useLocation } from "react-router-dom";
import { Card, CardMedia, Grid, Typography } from "@mui/material";



function Item(){
    const location = useLocation()


    return (

        <div >
           <Grid container>
            <Grid item md={4} lg={4} sm={6} xs={12}></Grid>
             <Grid item md={4} lg={4} sm={6} xs={12}>
            <Card className="text-center">
                            <Typography variant="h6">{location.state.category}</Typography>

                            <CardMedia 
                            width = "300px"
                            
                            component="img"
                            image= {location.state.image}
                            alt = "image"
                            // sx={{width:"600px"}}
                                                    
                            
                            
                            />
                              {/* <Typography variant="h6">{element.description}</Typography> */}
                              <Typography className="fw-bold" variant="h5">TITLE : {location.state.title}</Typography>
                              <Typography className="fw-bold" variant="h5">Price : {location.state.price}</Typography>
                              <Typography className="fw-bold" variant="h5">Description :{location.state.description}</Typography>
                              </Card>
            </Grid>

           </Grid>
         </div>












    )
}


export default Item;