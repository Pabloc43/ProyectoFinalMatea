import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { useEffect, useState } from "react";

import './App.css'
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Cartelera from "./Components/Cartelera"
import Carrito from "./Components/Carrito"
import Login from "./Components/Login"


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
        <Route element={<Cartelera />} path="/events"></Route>
        <Route element={<Carrito />} path="/shopping"></Route>
      </Routes>
    </BrowserRouter>
    

  );
}

export default App;
