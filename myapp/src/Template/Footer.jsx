import React from "react";
import { Link } from "react-router-dom";
import './footer.css'

const footer = () => {
  return (
    <footer>
      <Link to="/">Acceuil</Link>
      <Link to="/resa">Reservations</Link>
    </footer>
  );
};

export default footer;
