import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../home/home";




export default function MainRoutes() {
  return (
    <div className="h-screen w-full">
      {/* <NavBar /> */}
      <Routes>
       
        <Route path="/" element={<Home />} />
      </Routes>
     
    </div>
  );
}