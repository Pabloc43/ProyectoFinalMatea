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
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter" 
      size="lg">
        
        
        <Modal.Header closeButton className="bg-secondary">
          <Modal.Title id="contained-modal-title-vcenter" className="text-light"  >
            Mi perfil
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col xs={12} md={4}>
                <img src={items[0].user_img} width={150} alt="user_photo" className=' rounded-right' />
              </Col>
              <Col xs={6} md={6}>
              <ul>
                <li> <span className="font-weight-bold">Nombre: </span> {items[0].user_name} {items[0].user_surname} </li>
                <li> <span className="font-weight-bold">Correo:</span>  {items[0].user_mail}</li>
                <li> <span className="font-weight-bold">Ubicación:</span> {items[0].user_city}, {items[0].user_country}</li>
                <li> <span className="font-weight-bold">Dirección:</span>  {items[0].user_address}</li>
                <li> <span className="font-weight-bold">Tel:</span>  {items[0].user_phone}</li>
                <li> <span className="font-weight-bold">Postal: </span> {items[0].user_postal}</li>
               
              </ul>
              </Col>
            </Row>
  
            <Row className="text-center">
                <h4>Mis compras</h4>
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
        <Modal.Footer className="bg-secondary">
          <Button onClick={props.onHide} className="button-dark" >Cerrar</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  
 export default  ProfileModal;
  