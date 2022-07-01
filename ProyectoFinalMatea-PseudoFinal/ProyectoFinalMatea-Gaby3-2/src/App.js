import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom"; 

import Home from "./Components/Home";
import { useState } from "react";
import { useEffect } from "react";
import NavBar from "./Components/NavBar";
import Cartelera from "./Components/Cartelera"
import Carrito from "./Components/Carrito"
import Login from "./Components/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css'
import 'bootstrap/dist/css/bootstrap.rtl.min.css.map'
import Producto from "./Components/Producto";
import items from "./Components/data_eventos";






function App(dato) {
  const [Eventos, setEventos] = useState([]);

  /*Seccion Fetch (Gabi)*/

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


  /* Seccion Login (Valen)*/

  const [logged, setLogged] = useState(false)
  useEffect(() => setLogged(localStorage.getItem('idUsers') !== null), [localStorage.getItem('idUsers')])

  function signOut () {
    localStorage.removeItem('idUsers')
  }

  {/*Seccion Roote (Pablo)*/}

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route element={<Home/>} path="/" />
        <Route element={<Login />} path="/login"></Route>
        <Route element={<Cartelera />} path="/events"></Route>
        <Route element={<Carrito />} path="/shopping"></Route>
   {/* <Route element={<ProfileModal />} path="/profile"></Route> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;

