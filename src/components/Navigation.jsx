import React from "react";
import { NavLink } from "react-router-dom";
import "../css/App.css";
function Navigation() {
  return (
    <div className="header">
          <NavLink className="name" to="/">
            React Multi-Page Website
          </NavLink>
          <div className="header-right">
                <NavLink className="nav-link" to="/"> Home </NavLink>
                <NavLink className="nav-link" to="/about">About</NavLink>
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                <NavLink className="nav-link" to="/blog"> Blog </NavLink>
          </div>
     </div>
  );
}

export default Navigation;
