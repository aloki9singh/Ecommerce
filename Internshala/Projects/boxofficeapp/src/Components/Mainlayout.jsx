import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
const Mainlayout = () => {
    
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Mainlayout;
