import React, { useState } from 'react'
import {Link } from "react-router-dom";
/* import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap' */
import '../Components/login.css'
import { Formik } from 'formik'

export default function Login(props) {
   let {algo} = props
   const [dato, setDato] = useState('')
    
    function loguear() {
      localStorage.setItem('idUsers', document.getElementById('email').value)
      window.location.href=  formularioEnviado ? '/login' : '/profile';
    }

  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  return (
    <>
      <Formik
        initialValues={{
          email: '',
          contraseña: ''
        }}
        validate={(valores) => {
          let errores = {};

          //validacion del E-Mail
          if(!valores.email){
            errores.email = 'Por favor ingresa su email'
          } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
            errores.email = 'El Email solo puede contener letras, numero, puntos,guiones y guion bajo.'
          }

          //validacion de la Contraseña
          if(!valores.contraseña){
            errores.contraseña = 'Por favor ingrese su Contraseña'
         } else if(!/(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(valores.contraseña)){
             errores.contraseña = 'La contraseña debe contener mayusculas,numeros y hasta 16 caracteres'
         }
          return errores

        }}

        onSubmit={(valores, {resetForm}) => {
					resetForm();
					console.log('Formulario enviado');
					cambiarFormularioEnviado(true);
					setTimeout(() => cambiarFormularioEnviado(false), 5000);
				}}
      >
        {({ values, errors, touched, handleSubmit, handleChange, handleBlur}) => (
          <div className='container w-100'>
          <form className='formulario mx-auto' onSubmit={handleSubmit}>
            <div>
              <label htmlFor='email'>Email</label>
              <input
                type="text"
                id="email"
                name='email'
                placeholder='Email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            {touched.email && errors.email && <div className='error'>{errors.email}</div>}
            </div>

            <div>
              <label htmlFor='contraseña'>Contraseña</label>
              <input
                type="password"
                id="contraseña"
                name='contraseña'
                placeholder='Contraseña'
                value={values.contraseña}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            {touched.contraseña && errors.contraseña && <div className='error'>{errors.contraseña}</div>}
            </div>
            <Link to={!formularioEnviado ? '/profile' : '/login'}><button type='submit' onSubmit={handleChange} onClick={loguear} >Enviar</button></Link>
            {formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
          </form>
          </div>
        )}
      </Formik>
    </>
  )
}


/* <div className="body contLogin">
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
</div> */