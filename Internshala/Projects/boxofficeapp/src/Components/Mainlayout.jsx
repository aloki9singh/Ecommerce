import React from "react";
import { Outlet } from "react-router-dom";
import AppTitle from "./AppTitle";
import Navbar from "./Navbar";
const Mainlayout = () => {
  return (
    <div>
      <AppTitle
        title={"Box Office"}
        subtitle={"Are you looking for a movie or actor?"}
      />

      <Navbar />

      <Outlet />
    </div>
  );
};

export default Mainlayout;
