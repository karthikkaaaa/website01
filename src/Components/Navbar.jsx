

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { toggleDarkMode } from "../redux/slices/uiSlice";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.ui.darkMode);

  return (
    <header className="header">
      <Link to="/" className="title">ELITE EVENTS</Link>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="icons">
        <button id="mode" onClick={() => dispatch(toggleDarkMode())}>
          {darkMode ? "☀️" : "🌙"}
        </button>

        <Link to="/dashboard">👤</Link>

        <button id="bttn" onClick={() => dispatch(logout())}>
          Logout
        </button>

        <button onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>
    </header>
  );
};

export default Navbar;


