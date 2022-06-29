import React from "react";
import {Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container } from "react-bootstrap";
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Button} from "react-bootstrap";
import ProfileModal from "./ProfileModal";
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'



const carritoIcon = <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />;
const userIcon = <FontAwesomeIcon icon="fa-solid fa-user" />;


const NavBar = () => {
  const [modalShow, setModalShow] = React.useState(false);
 
  return (
    
  
    <Navbar bg="dark" className="w-100" variant="light">
     
    <Container className="d-flex text-center">
    <Navbar.Brand id="logo" className="d-flex">  <img src="../../img/Logo.png" width={60}></img> <h5>Fideos con Tuki</h5></Navbar.Brand>
    <Nav className="d-flex justify-content-between flex-wrap w-100">
        <div className="d-flex">
      <Link to="/">Home</Link>
      <Link to="/events">Cartelera</Link>
      </div>
      <div className="d-flex">
      <Link to="/shopping">{carritoIcon} Carrito</Link>
      <Nav.Link className="text-light" variant="primary" onClick={() => setModalShow(true)}> Profile</Nav.Link><ProfileModal show={modalShow} onHide={() => setModalShow(false)}/>
      <Link to="/login">Login</Link>
      </div>
    </Nav>
    </Container>
  </Navbar>
    
  );
};

export default NavBar;