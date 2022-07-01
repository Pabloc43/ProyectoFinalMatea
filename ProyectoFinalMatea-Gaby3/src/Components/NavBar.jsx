import React from "react";
import {Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container } from "react-bootstrap";
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProfileModal from "./ProfileModal";
import { faUser, faCartShopping, faCalendarWeek, faRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import { faHome } from "@fortawesome/free-solid-svg-icons";



const carritoIcon = <FontAwesomeIcon icon={faCartShopping} />
const calendarIcon = <FontAwesomeIcon icon={faCalendarWeek} />
const casaIcon = <FontAwesomeIcon icon={faHome} />
const userIcon = <FontAwesomeIcon icon={faUser} />
const loginIcon = <FontAwesomeIcon icon={faRightFromBracket} />




const NavBar = () => {
  const [modalShow, setModalShow] = React.useState(false);
 
  return (
    
  
    <Navbar bg="dark" className="w-100" variant="light">
     
    <Container className="d-flex text-center">
    <Navbar.Brand id="logo" className="d-flex">  <img src="../../img/Logo.png" width={60} /> <h5>Fideos con Tuki</h5></Navbar.Brand>
    <Nav className="d-flex justify-content-between flex-wrap w-100">
        <div className="d-flex">
      <Link to="/">{casaIcon} Home</Link>
      <Link to="/events"> {calendarIcon} Cartelera</Link>
      </div>
      <div className="d-flex">
      <Link to="/shopping">{carritoIcon} Carrito</Link>
      <Nav.Link className="text-light" variant="primary" onClick={() => 
        setModalShow(true)}>{userIcon} Profile</Nav.Link><ProfileModal show={modalShow} onHide={() =>
         setModalShow(false)}/>
      <Link to="/login"> {loginIcon} Login</Link>
      </div>
    </Nav>
    </Container>
  </Navbar>
    
  );
};

export default NavBar;