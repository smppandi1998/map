import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import "./App.css";
import Home from "./components/Home/Home";


const App = () => {


    
    

    return (
        <div className="App">
                <>
                <PropertiesProvider>
           <BrowserRouter>
               
               < Navbar />
               <Routes>
               <Route  element={<Home/>}/>
               <Route exact path="/" element={<Home/>}/>
               </Routes>
              
               </BrowserRouter>
               </PropertiesProvider>
            </>
           
            </div>
    );
}

export default App;
