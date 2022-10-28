import React from 'react';
import { Link } from 'react-router-dom';

const Secciones = () => {
  return (
    <>
      <li className="nav-item">
      <Link className="nav-link btn" to="/"><i className="fas fa-home"></i></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link btn" to="/servicios">Servicios</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link btn" to="/comunas">Comunas</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link btn" to="/contacto">Contacto</Link>
      </li>
    </>
  );
}

export default Secciones;


//test