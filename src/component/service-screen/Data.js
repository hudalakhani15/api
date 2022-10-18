import { Card, CardMedia, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



function Data(){




    
   const [data,setData] = useState([]);


   const getData = ()=>{
    axios.get("https://fakestoreapi.com/products").
    then((success)=>{
        console.log(success.data)
        setData([...success.data]);
    }).catch((err)=>{
        console.log(err);
    })
   }


   useEffect(()=>{
    getData()
   },[])
let navigate = useNavigate()
   function moveData(value){
    navigate("/Item",{
        state:value
        
    })

    console.log(value)
   }


return(
    
           <div>
        {/* <h1>DATA</h1> */}
        <Grid item container spacing={5}>
            {data.map((value,i)=>{

                return(
                    <Grid item md={4} lg={3} sm={6} xs={12}>
                        <Card className="text-center text-dark huda mt-5 fw-bold" style={{backgroundColor:" #61dafb" , color: "#004153"}} height = "400px" onClick={()=>moveData(value)} key={i}>
                            <Typography className="fw-bold " style= {{color: "#004153"}}variant="h4">{value.category}</Typography>

                            <CardMedia 
                            height = "600px"
                            // width = "500px"
                            component="img"
                            image= {value.image}
                            alt = "image"
                            // sx={{width:"200px"}}
                                                    
                            
                            
                            />
                              {/* <Typography variant="h6">{element.description}</Typography> */}
                              <Typography className="" style= {{color: "#004153"}} variant="h6">{value.title}</Typography>
                              <Typography className="" style= {{color: "#004153"}} variant="h6">{value.price}</Typography>
                        </Card>

                    </Grid>
                )

            })}

        </Grid>
    </div>
    // </body>
)



  

}








export default Data;