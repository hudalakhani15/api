
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  
} from "react-router-dom";
import Home from "../component/home";
import Service from "../component/services";

import Item from "../component/service-screen/Item";
import Data from "../component/service-screen/Data";


export default function AppRouter() {
  return (
    <Router>
        <div className=" h-50" style={{backgroundColor:"#28d0ff"}}>
            <Link className="btn btn-white p-2  me-5 fs-2" to='/'>Home</Link>

            <Link className="btn btn-white p-2  me-5 fs-2" to='service'>Outlet</Link>
           
        </div>
        <Routes>
            <Route path="/" element={<Home/>}/>
  
            <Route path="service/*" element={<Service/>}/>
         
            <Route path="Item" element={<Item/>}/>
            <Route path="Data" element={<Data/>}/>
            
            
        </Routes>
      
    </Router>
  );
}


