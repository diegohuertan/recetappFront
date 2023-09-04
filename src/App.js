import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './home';
import Login from './login';

function App() {
  return (
    <BrowserRouter>
 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>

  </BrowserRouter>
  );
}

export default App;
