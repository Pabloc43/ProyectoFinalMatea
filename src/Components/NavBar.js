import React from "react";
import {Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/events">Cartelera</Link>
      <Link to="/shopping">Carrito</Link>
      <Link to="/login">Login</Link>

      <hr />
    </>
  );
};

export default NavBar;
