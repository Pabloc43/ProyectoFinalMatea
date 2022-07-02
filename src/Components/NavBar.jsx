import React from "react";
import {Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container, Col, Form} from "react-bootstrap";
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProfileModal from "./ProfileModal";
import { faUser, faCartShopping, faCalendarWeek, faRightFromBracket, faSearch} from '@fortawesome/free-solid-svg-icons'
import { faHome } from "@fortawesome/free-solid-svg-icons";


const searchIcon = <FontAwesomeIcon icon={faSearch} />
const carritoIcon = <FontAwesomeIcon icon={faCartShopping} />
const calendarIcon = <FontAwesomeIcon icon={faCalendarWeek} />
const casaIcon = <FontAwesomeIcon icon={faHome} />
const userIcon = <FontAwesomeIcon icon={faUser} />
const loginIcon = <FontAwesomeIcon icon={faRightFromBracket} />




const NavBar = () => {
  const [modalShow, setModalShow] = React.useState(false);
 
  return (
    
  
    <Navbar bg="dark" className="w-100" variant="light">
     
    <Container className="d-flex text-center flex-wrap justify-content-between">
    <Navbar.Brand id="logo" className="d-flex align-items-center col-md-12 col-lg-3 col">  <img src="../../img/Logo.png" width={60} alt="User_img" /> <h5 className="">Fideos con Tuki</h5></Navbar.Brand>
    <Nav className="d-flex justify-content-between flex-wrap col-md-12 col-lg-8 justify-content-between">
        <div className="d-flex ">
      <Link to="/">{casaIcon} Home</Link>
      <Link to="/events"> {calendarIcon} Cartelera</Link>

      </div>
      <div className="d-flex">  
        <Col xs={12} className="d-flex p-3">
          <Form.Control placeholder="Buscar"/>
                    <button type="button" className="btn btn-danger">
                    {searchIcon}
                    </button>
        </Col>
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