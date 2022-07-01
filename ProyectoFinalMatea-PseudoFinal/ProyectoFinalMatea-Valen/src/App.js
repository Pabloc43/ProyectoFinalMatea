

function App(dato) {

  const [logged, setLogged] = useState(false)
  useEffect(() => setLogged(localStorage.getItem('idUsers') !== null), [localStorage.getItem('idUsers')])

  const [Eventos, setEventos] = useState([]);


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

