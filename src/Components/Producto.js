import React from 'react'
import {Link } from "react-router-dom";
import Contador from '../contadorCard';

export default function Producto(props) {
  const {key, title, event_img, event_name, event_price, event_info, event_type, event_date,
          event_stock, event_ubication, event_duration, event_hour, event_code } = props.eventos

  return (
    <article className="evento container d-flex align-items-center justify-content-center mt-5 text-white w-100">
      <div className='row'>
      <div className='col-12 col-md-5 col-lg-6'>
        <img src={`${event_img}`} alt={title} className="h-100 photoCard " />
      </div>
        <div className="item-info bg-black col-12 col-md-7 col-lg-6">
          <header className='d-flex justify-content-center mb-2 '>
          <h1 className=''>{event_name}</h1>
          </header>
          <ul>
            <li className='d-flex align-items-center'><h3 className=''>Clase de evento:</h3><p>{event_type}</p></li> 
            <li className='d-flex flex-wrap mt-2'><h4>Acerca del evento:</h4><p>{event_info}</p></li>
            <li className='d-flex table-responsive'>
              <table className='tabla mt-3 table text-white table-hover table-light'>
                <thead >
                  <th>Fecha</th>
                  <th>Hora</th>
                  <th>Ubicacion</th>
                  <th>Duracion</th>
                  <th>Disponibles</th>
                  <th>Codigo de evento</th>
                </thead>
                <tbody className='text-dark'>
                  <tr className=''>
                    <td className=''>{event_date}</td>
                    <td className=''>{event_hour}</td>
                    <td className=''>{event_ubication}</td>
                    <td className=''>{event_duration}</td>
                    <td className=''>{event_stock}</td>
                    <td className=''>{event_code}</td>
                  </tr>
                </tbody>
              </table>
            </li>

          </ul>
                
          <h2 className="price mt-4">${event_price}</h2>
          <Contador key={key}/>
          <div className="d-flex justify-content-center my-3">
          <button className="agregar">Agregar al carrito</button>
          </div>
        </div>
    </div>
  </article>
  )
}
