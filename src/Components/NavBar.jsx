import React from "react";
import {Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container } from "react-bootstrap";
import './navbar.css'

const NavBar = () => {
  return (
  
    <Navbar bg="dark" className="w-100" variant="light">
    <Container className="d-flex text-center">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="d-flex justify-content-between flex-wrap w-100">
        <div>
      <Link to="/">Home</Link>
      <Link to="/events">Cartelera</Link>
      </div>
      <div>
      <Link to="/shopping">Carrito</Link>
      <Link to="/login">Login</Link>
      </div>
    </Nav>
    </Container>
  </Navbar>
    
  );
};

export default NavBar;