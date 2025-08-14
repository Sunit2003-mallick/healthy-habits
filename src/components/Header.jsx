import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={Logo} alt="HealthyHabits Logo" className="logo" />
        <span className="brand">HealthyHabits</span>
      </div>
      <nav className="nav">
        <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
        <NavLink to="/dashboard" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Dashboard</NavLink>
        <NavLink to="/reports" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Reports</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
      </nav>
    </header>
  );
};

export default Header;
