import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/home";


const AppRoutes = ()=>{
    return(
        <Routes>
            <Route path="" element={<Home />}></Route>
            <Route path="home" index element={<Home />}></Route>
        </Routes>
    )
}

export default AppRoutes;