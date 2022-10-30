import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useState } from 'react';
import { DarkModeProvider } from '../components/context/darkModeContext';

import Navbar from '../components/Content/Navbar';
import Form from '../components/Layouts/Form';
import '../components/Styles/App.css';
import ItemListContainer from '../components/Content/Producto';
import Contador from '../components/Layouts/Contador';
import Home from './Content/ItemListContainerHome';
import Carrito from './Content/Carrito'
import About from './Content/Servicios'
import Footer from './Content/Footer';
import Contacto from './Content/Contacto';
import Categoria from './Content/ItemListContainer';
import Comunas from './Content/Comunas';

import WeatherApp from './Apis/WeatherApp';
import Producto from '../components/Content/Producto';



const App = () => {
  return (
    <>
    <DarkModeProvider>
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/producto/:id" element={<Producto/>} />
          <Route path="/categoria/:id" element={<Categoria/>} />
          <Route path="/servicios" element={<About/>} />
          <Route path="/comunas" element={<Comunas/>} />
          <Route path="/contacto" element={<Contacto/>} />
          <Route path="/carrito" element={<Carrito/>} />
          <Route path='*' element={<h1>Error 404</h1>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </DarkModeProvider>

    </>

  );
}

export default App;

