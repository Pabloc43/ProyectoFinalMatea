import React from "react";
import { Modal } from "react-bootstrap";
import {Button} from "react-bootstrap";
import Registro from "./registro";

import items from "./data_user";

function Profile(props) {
  let {cerrar} = props
  console.log(items)
    return (
      <>
        <Modal.Footer className="bg-secondary mt-5">
          <Button className="button-dark" >{cerrar}</Button>
        </Modal.Footer>
      <section style={{backgroundColor : "#eee"}}>
  <div className="container py-5 ">
    <div className="row ">
      <div className="col-lg-4">
        <div className="card mb-4">
          <div className="card-body text-center">
            <img src={items[0].user_img} alt="avatar"
              className="rounded-circle img-fluid" style={{width: "150px"}} />
            <h5 className="my-3">{items[0].user_name} {items[0].user_surname}</h5>

          </div>
        </div>
      </div>
      <form className="col-lg-8 ">
        <details className="card mb-4 ">
          <summary className="mx-3 pt-3 list-unstyled d-flex justify-content-between"><div>Datos personales:</div><p className="fs-1">🐸</p></summary>
          <div className="card-body ">
            <div className="row ">
              <div className="col-sm-3 ">
                <label htmlFor='Nombre' className="mb-0 text-dark">Full Name</label>
              </div>
              <div className="col-sm-9">
                <input id="Nombre" type={'text'} className="text-muted mb-0" value={items[0].user_name + ' ' + items[0].user_surname}></input>
              </div>
            </div>
            <hr></hr>
            <div className="row ">
              <div className="col-sm-3 ">
                <label htmlFor='Correo' className="mb-0 text-dark">Email</label>
              </div>
              <div className="col-sm-9">
                <input id="Correo" type={'email'} className="text-dark text-muted mb-0" value={items[0].user_mail}></input>
              </div>
            </div>
            <hr></hr>
            <div className="row ">
              <div className="col-sm-3 ">
                <label htmlFor='Ubicacion' className="mb-0 text-dark">Ubication</label>
              </div>
              <div className="col-sm-9">
                <input id="Ubicacion" type={'text'} className="text-dark text-muted mb-0" value={items[0].user_city}></input>
              </div>
            </div>
            <hr></hr>
            <div className="row ">
              <div className="col-sm-3 ">
                <label htmlFor='Direccion' className="mb-0 text-dark">Direction</label>
              </div>
              <div className="col-sm-9">
                <input id="Direccion" type={'text'} className="text-dark text-muted mb-0" value={items[0].user_address}></input>
              </div>
            </div>
            <hr></hr>
            <div className="row ">
              <div className="col-sm-3 ">
                <label htmlFor='Telefono' className="mb-0 text-dark">Tel</label>
              </div>
              <div className="col-sm-9">
                <input id="Telefono" type={'tel'} className="text-dark text-muted mb-0" value={items[0].user_phone}></input>
              </div>
            </div>
            <hr></hr>
            <div className="row ">
              <div className="col-sm-3 ">
                <label htmlFor='Postal' className="mb-0 text-dark">Postal</label>
              </div>
              <div className="col-sm-9">
                <input id="Postal" type={'text'} className="text-dark text-muted mb-0" value={items[0].user_postal}></input>
              </div>
            </div>
          </div>
        </details>

      </form>
    </div>
  </div>
</section>
      <Registro />
      </>
    );
  }

export default Profile
