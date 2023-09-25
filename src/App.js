import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import './index.css';
import Home from './home';
import Login from './login';
import CustomNavbar from './nav';

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
