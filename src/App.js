import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import { useState, useEffect } from "react";
import Home from "../src/components/Home";
import NavBar from "../src/components/NavBar";
import Cartelera from "../src/components/Cartelera"
import Carrito from "../src/components/Carrito"
import Login from "../src/components/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css'
import 'bootstrap/dist/css/bootstrap.rtl.min.css.map'
import Producto from "../src/components/Producto";
import items from "../src/data_eventos.json";

function App(dato) {
  const [Eventos, setEventos] = useState([]);

  /*Seccion Fetch (Gabi)*/

  useEffect(()=>{
    fetch("../public/data_eventos.json")
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

