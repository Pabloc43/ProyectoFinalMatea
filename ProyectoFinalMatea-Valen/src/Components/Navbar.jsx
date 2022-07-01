import React from "react";
import {Link } from "react-router-dom";
import '../Components/navBar.css';

const NavBar = () => {
  return (
    <div className="bodyNav" >
      <Link to="/">Home</Link>
      <Link to="/events">Cartelera</Link>
      <Link to="/shopping">Carrito</Link>
      <Link to="/login">Login</Link>

      <hr />
    </div>
  );
};

export default NavBar;