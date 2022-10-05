import React from 'react';
import { Link } from 'react-router-dom';

const Secciones = () => {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link" to='/'><button type="button" class="btn btn-outline-danger"><i className="fas fa-home"></i></button></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/servicios">Servicios</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/comunas">Comunas</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contacto">Contacto</Link>
      </li>
    </>
  );
}

export default Secciones;
