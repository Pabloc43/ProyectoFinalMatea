import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./components/Main";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route component={Home} path="/"></Route>
        <Route component={About} path="/login"></Route>
        <Route component={Main} path="/events"></Route>
        <Route component={Main} path="/shopping"></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
