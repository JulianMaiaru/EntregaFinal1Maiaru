import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useState } from 'react';

import Navbar from '../components/Content/Navbar';
import Form from '../components/Layouts/Form';
import '../components/Styles/App.css'
import ItemListContainer from '../components/Content/Producto';
import Contador from '../components/Layouts/Contador';
import Home from '../components/Content/Home';
import Carrito from './Content/Carrito'
import About from './Content/About'
import Footer from './Content/Footer';
import Contacto from './Content/Contacto'

import WeatherApp from './Apis/WeatherApp';
import Producto from '../components/Content/Producto';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/producto/:id" element={<Producto/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contacto" element={<Contacto/>} />
          <Route path="/carrito" element={<Carrito/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>

  );
}

export default App;

