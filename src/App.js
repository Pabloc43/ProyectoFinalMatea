import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom"; 

import Home from './Components/Home.jsx'
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
import Footer from "./Components/Footer.jsx";






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
        <Route element={logged ? <> <Home/> 
        <form> 
          <button className="btn btn-secondary" onClick={signOut}>Cerrar sesion</button>
        </form>
        </> : <Login algo={dato} style={{backgroundImage: 'url(../public/img/e1.jpg);'}}/>} path="/login"></Route>        <Route element={<Cartelera />} path="/events"></Route>
        <Route element={<Cartelera eventos={Eventos} />} path="/events"></Route>
        
        {items.map((item, index) => <Route key={index} element={<Producto key={index} eventos={items[index]} />} path={`/events/product${index+1}`}></Route>)}
        <Route element={<Carrito />} path="/shopping"></Route>
   {/* <Route element={<ProfileModal />} path="/profile"></Route> */}

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

