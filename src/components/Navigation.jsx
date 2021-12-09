import React from "react";

export default function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          {/* <NavLink className="navbar-brand" to="/">
            React Multi-Page Website
          </NavLink> */}
          <a href="">React Multi-Page Website</a>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                {/* <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink> */}
                <a href="">Home</a>
              </li>
              <li className="nav-item">
                {/* <NavLink className="nav-link" to="/about">
                  About
                </NavLink> */}
                <a href="">About</a>
              </li>
              <li className="nav-item">
                {/* <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink> */}
                <a href="">Contact</a>
              </li>
              <li className="nav-item">
                {/* <NavLink className="nav-link" to="/blog">
                  Blog
                </NavLink> */}
                <a href="">Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
