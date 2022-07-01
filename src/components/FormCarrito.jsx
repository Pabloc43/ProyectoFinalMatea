import {Button, Form, InputGroup, Row } from 'react-bootstrap';
import { useState } from 'react';
import './formCarrito.css'

export default function FormCarrito() {
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  
    return (
      <Form id='FormCarrito' noValidate validated={validated} onSubmit={handleSubmit} className="w-50 p-4 d-block text-danger">
        <Row className="mb-3">
          <Form.Group  controlId="validationCustom01">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
            />
            <Form.Control.Feedback>Buena!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group   controlId="validationCustom02 p-2">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
            />
            </Form.Group>
          <Form.Group   controlId="validationCustomEmail">
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="email"
                placeholder="Email"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a email.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group  md="6" controlId="validationCustom03">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control type="text" placeholder="City" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group  md="3" controlId="validationCustom04">
            <Form.Label>Pais</Form.Label>
            <Form.Control type="text" placeholder="State" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid country.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group  md="3" controlId="validationCustom05">
          <Form.Label>Codigo Postal</Form.Label>
            <Form.Control type="Number" placeholder="Codigo Postal" minLength={3} maxLength={5} required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid postal code.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group   controlId="validationCustom02 p-2">
             <Form.Label>Pago con</Form.Label>
            <Form.Select aria-label="Default select example p-2">
           
                <option>Selecciona un metodo de pago</option>
                <option value="Efectivo">Efectivo</option>
                <option value="Debito">Debito</option>
                <option value="Credito">Credito</option>
                <option value="Debito int">Debito int.</option>
                <option value="Credito int">Credito int.</option>

                </Form.Select>
                <>
                <Form.Label>Cuotas</Form.Label>
            <Form.Control type="Number" className='w-50' placeholder="Nro de cuotas" min={0} max={5} required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid postal code.
            </Form.Control.Feedback>
 
            </>
            <Form.Control.Feedback>Buena!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Acepto los terminos y condiciones"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="submit">Realizar compra</Button>
      </Form>
    );
  }
  
  