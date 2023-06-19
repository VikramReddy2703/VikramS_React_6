import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <nav className="navbar">
      <h1> PERSONAL PORTFOLIO</h1>
      <br /><br />
      <div className="links">
      <Link to="/" target="_self">Home</Link>
        <Link to="/about" target="_self">About</Link>
        <Link to="/projects" target="_self">Projects</Link>
        <Link to="/contact" target="_self">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
