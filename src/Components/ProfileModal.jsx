import React from "react";
import { Modal } from "react-bootstrap";
import {Button} from "react-bootstrap";
import {Container} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import './ProfileModal.css';
import items from "./data_user";

function ProfileModal(props) {
  console.log(items)
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter w-100">
        
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Mi perfil
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col xs={12} md={4}>
                <img src="../../img/Logo.png" width={150} alt="user_photo" />
              </Col>
              <Col xs={12} md={4}>
              <ul>
                 <li>Nombre: {items[0].user_name} {items[0].user_surname} </li>
                <li>Correo: {items[0].user_mail}</li>
                <li>Ubicación: {items[0].user_city}, {items[0].user_country}</li>
                <li>Dirección: {items[0].user_address}</li>
                <li>Tel: {items[0].user_phone}</li>
                <li>Postal: {items[0].user_postal}</li>
               
              </ul>
              </Col>
            </Row>
  
            <Row className="text-center">
           
              <Col xs={6} md={4}>
              Compra 1
                <img src="../../img/ticket.png" width={120} alt="" />
              </Col>
              <Col xs={6} md={4}>
              Compra 2
              <img src="../../img/ticket.png" width={120} alt="" />
              </Col>
              <Col xs={6} md={4}>
              Compra 3
              <img src="../../img/ticket.png" width={120} alt="" />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  
 export default  ProfileModal;
  