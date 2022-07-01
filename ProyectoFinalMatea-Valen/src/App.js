import {BrowserRouter, Route,Routes,} from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./Components/Home";
import 'bootstrap/dist/css/bootstrap.css';
import Login from "./Components/Login";
import './App.css'
import NavBar from "./Components/Navbar";
import Cartelera from "./Components/Cartelera"
import Carrito from "./Components/Carrito"

function App(dato) {

  const [logged, setLogged] = useState(false)
  useEffect(() => setLogged(localStorage.getItem('idUsers') !== null), [localStorage.getItem('idUsers')])

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

  function signOut () {
    localStorage.removeItem('idUsers')
  }
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route element={<Home/>} path="/" />
      <Route element={logged ? <> <Home/> 
        <form> 
          <button className="btn btn-secondary" onClick={signOut}>Cerrar sesion</button>
        </form>
        </> : <Login algo={dato} style={{backgroundImage: 'url(../public/img/e1.jpg);'}}/>} path="/login"></Route>
      <Route element={<Cartelera />} path="/events"></Route>
      <Route element={<Carrito />} path="/shopping"></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

