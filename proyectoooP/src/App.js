import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { useEffect, useState } from "react";

import './App.css'
import 'bootstrap/dist/css/bootstrap-grid.css'
import 'bootstrap/dist/css/bootstrap.rtl.min.css.map'
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Cartelera from "./Components/Cartelera"
import Carrito from "./Components/Carrito"
import Login from "./Components/Login"
import Producto from "./Components/Producto";
import items from "./Components/data_eventos";


function App() {
  const [Eventos, setEventos] = useState([]);

useEffect(()=>{
  fetch("./data_eventos.json")
  .then(res => res.json()
  .then(data => setEventos(data)))

}, [])


const [Users, setUsers] = useState([]);


useEffect(()=>{
  fetch("./data_user.json")
  .then(res => res.json()
  .then(data => setUsers(data)))
}, [])

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route element={<Home/>} path="/" />
        <Route element={<Login />} path="/login"></Route>
        <Route element={<Cartelera eventos={Eventos} />} path="/events"></Route>
        {items.map((item, index) => <Route key={index} element={<Producto key={index} eventos={items[index]} />} path={`/events/product${index+1}`}></Route>)}
        <Route element={<Carrito />} path="/shopping"></Route>
      </Routes>
    </BrowserRouter>
    

  );
}

export default App;
