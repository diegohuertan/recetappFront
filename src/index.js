import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css'
import Nav from './componentes/nav';

import Login from './Vistas/login/login';
import Home from './Vistas/home/home';
import Recetas from './Vistas/receta/receta';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <div>
      <Nav />

        <Routes>
        
        <Route
          
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
          <Route
            path="/"
            element={isLoggedIn ? <Home /> : <Navigate to="/login" replace />}
          />
          
          <Route
          
          path="/recetas"
          element={isLoggedIn ? <Recetas /> : <Navigate to="/login" replace />}
        />

          <Route
            path="/api/recetas"
            element={<p>Esta es la página de recetas de la API</p>}
          />
          
          
        </Routes>

        
        
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));