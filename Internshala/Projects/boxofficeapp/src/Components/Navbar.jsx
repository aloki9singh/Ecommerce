import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Public.css";
const Navbar = () => {
  const LINKS = [
    { to: "/", text: "Home" },
    { to: "/starred", text: "Starred" },
  ];
  return (
    <div className="nav-link">
      
      {LINKS.map((e, i) => (
        <Link key={i} to={e.to}>
          {e.text}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
