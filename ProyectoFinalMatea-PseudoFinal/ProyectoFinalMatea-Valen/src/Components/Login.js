import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import '../Components/login.css'

export default function Login() {

    const [dato, setDato] = useState({
        mail:"",
        contraseña:""
    })
    function inputCambio (e){
        setDato({
            ...dato, [e.target.name] : e.target.value
        })
        console.log(e.target.value)
    }

    function guardarDato (e){
        setDato({
            ...dato, [e.target.name] : e.target.value
        })
        localStorage.setItem('idUsers', dato)
        console.log(e.target.value)
    }

  return (
    <div className="body contLogin">
      <Form className='login' onSubmit={guardarDato}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className='text-light'>Email address</Form.Label>
          <Form.Control className='mail'name='mail' value={dato.mail} onChange={inputCambio} type="email" placeholder="Enter email" />
          <Form.Text className="text-light">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-light">Password</Form.Label>
          <Form.Control name='contraseña' value={dato.contraseña} onChange={inputCambio} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check className="text-light" type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={guardarDato}>
          Submit
        </Button>
      </Form>
    </div>

    
  )
}
