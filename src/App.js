import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import './index.css';
import Home from './Vistas/home/home';
import Login from './Vistas/login/login';
import CrearReceta from './Vistas/crear/crearReceta';
import CustomNavbar from './componentes/nav';
import Recetas from './Vistas/receta/receta';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
    <div>
    {isLoggedIn ? (
      <h1>Usuario autenticado</h1>
    ) : (
      <Login setIsLoggedIn={setIsLoggedIn} />
    )}

      <CustomNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recetas" element={<Recetas />} />
        <Route path="/crearReceta" element={<CrearReceta />} />
        <Route
            path="/api/recetas"
            element={<p>Esta es la página de recetas de la API</p>}
          />
      </Routes>
    </div>
  </BrowserRouter>
);
}

export default App;
