import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg border-bottom">
      <div className="container-fluid p-2">
        <Link className="navbar-brand" to="/">
          <img src="media/images/logo.svg" alt="logo" className="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/signup"
                style={({ isActive }) => ({
                  color: isActive ? "#387ed1" : "#000",
                  fontWeight: isActive ? "bold" : "normal",
                })}
              >
                Sginup
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/about"
                style={({ isActive }) => ({
                  color: isActive ? "#387ed1" : "#000",
                  fontWeight: isActive ? "bold" : "normal",
                })}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/products"
                style={({ isActive }) => ({
                  color: isActive ? "#387ed1" : "#000",
                  fontWeight: isActive ? "bold" : "normal",
                })}
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/pricing"
                style={({ isActive }) => ({
                  color: isActive ? "#387ed1" : "#000",
                  fontWeight: isActive ? "bold" : "normal",
                })}
              >
                Pricing
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/support"
                style={({ isActive }) => ({
                  color: isActive ? "#387ed1" : "#000",
                  fontWeight: isActive ? "bold" : "normal",
                })}
              >
                Support
              </NavLink>
            </li>
            <li className="menu">
              <Link className="nav-link active" aria-current="page" to="/">
                <i className="fa fa-bars" aria-hidden="true"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
