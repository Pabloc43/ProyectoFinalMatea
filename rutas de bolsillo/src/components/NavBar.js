import React from "react";
import {Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Link style={{margin: 5}} to="/">Main</Link>
      <Link style={{margin: 5}} to="/home">Home</Link>
      <Link style={{margin: 5}} to="/about">About</Link>
      <hr />
    </>
  );
};

export default NavBar;
