
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
