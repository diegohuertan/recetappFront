import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import './index.css';
import Home from './Vistas/home';
import Login from './Vistas/login';
import CustomNavbar from './Vistas/nav';
import Recetas from './Vistas/receta';

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
      </Routes>
    </div>
  </BrowserRouter>
);
}

export default App;
