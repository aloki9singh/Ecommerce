import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
const Mainlayout = () => {
  return (
    <div>
      <h1>Box Office</h1>
      <div>Are you looking for a movie or actor?</div>
      <Navbar />

      <Outlet />
    </div>
  );
};

export default Mainlayout;
