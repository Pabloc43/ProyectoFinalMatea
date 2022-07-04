import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import FormCarrito from './FormCarrito'



export default function Producto(props) {
  const {key, title, event_img, event_name, event_price, event_info, event_type, event_date,
          event_stock, event_ubication, event_duration, event_hour, event_code } = props.eventos;
 

  const [counter, setCounter] = useState(0)
   const [Price, setPrice] = useState(0)

  const handleClick1 = () => {
    counter < 15 ? setCounter(counter + 1) : setCounter(0)
    counter < 15 ? setPrice(Price + event_price) : setPrice(0)
    
  }


  
  const handleClick2 = () => {
    counter > 1 ? setCounter(counter - 1) : setCounter(0);
    counter > 1 ? setPrice(Price - event_price) : setPrice(0)
    
    
  }
function handleClick3(){

    document.title = `Fideos con Tuki (${counter}) `
  }
      
         

  return (
    <article className="evento container align-items-center justify-content-center mt-5 text-white w-100">
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
                
          <h2 className="price mt-4">Precio por entrada: ${event_price}</h2>
          <h2 className='price mt-4'>Tu total: ${Price}</h2> 
          <div  className="d-flex flex-column ">

                    {/*---------------- Contador -------------- */}
      <h3 className="addRito">Agregar entradas</h3>
      <div>
    </div>
      <p className="addRito contador">
        {counter}
      </p>
      <div className="buttons d-flex justify-content-around">
        <FontAwesomeIcon icon={ faCircleMinus }  onClick={handleClick2} className="fa-3x botonMenos"/>
        <FontAwesomeIcon icon={ faCirclePlus }  onClick={handleClick1} className="fa-3x botonMas"/>


      </div>
    </div>
          <div className="d-flex justify-content-center my-3">
          <button className="agregar" onClick={handleClick3}>Agregar al carrito</button>
          </div>
        </div>
    </div>
    <FormCarrito />
    

  </article>
  )
}
