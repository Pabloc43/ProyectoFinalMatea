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
  console.log(Eventos)
  console.log(Users)
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route element={<Home/>} path="/" />
        <Route element={<Login />} path="/login"></Route>
        <Route element={<Cartelera />} path="/events"></Route>
        <Route element={<Carrito />} path="/shopping"></Route>
   {/*      <Route element={<ProfileModal />} path="/profile"></Route> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;

