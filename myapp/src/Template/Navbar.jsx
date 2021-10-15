import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="nav__links">
      <Link to="/">Acceuil</Link>
      <Link to="/resa">Reservations</Link>
    </nav>
  );
};

export default Navbar;
