import React from "react";
import {Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Link style={{margin: 5}} to="/">Home</Link>
      <Link style={{margin: 5}} to="/events">Cartelera</Link>
      <Link style={{margin: 5}} to="/shopping">Carrito</Link>
      <Link style={{margin: 5}} to="/login">Login</Link>

      <hr />
    </>
  );
};

export default NavBar;
