import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  return (
    <div className="container-navbar">
      {/* 
      <Link to="/">Home</Link>
      <Link to="/contact">Contatos</Link>
        */}

      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Contatos
      </NavLink>
    </div>
  );
};

export default Navbar;
