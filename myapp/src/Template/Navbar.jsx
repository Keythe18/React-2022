import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Acceuil</Link>
      <Link to="/resa">Reservations</Link>
    </nav>
  );
};

export default Navbar;
