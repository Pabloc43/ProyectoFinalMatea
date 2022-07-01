import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
  
import "./App.css";
  
const Contador = () => {
  const [counter, setCounter] = useState(0)
  
  const handleClick1 = () => {
    counter < 15 ? setCounter(counter + 1) : setCounter(15)
  }
  
  const handleClick2 = () => {
    counter > 1 ? setCounter(counter - 1) : setCounter(0)
  }
  
  return (
    <div  className="d-flex flex-column ">
      <h3 className="addRito">Agregar entradas</h3>
      <p className="addRito contador">
        {counter}
      </p>
      <div className="buttons d-flex justify-content-around">
        <FontAwesomeIcon icon={ faCircleMinus }  onClick={handleClick2} className="fa-3x botonMenos"/>
        <FontAwesomeIcon icon={ faCirclePlus }  onClick={handleClick1} className="fa-3x botonMas"/>

      </div>
    </div>
  )
}
  
export default Contador