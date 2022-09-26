import React from 'react';

const Secciones = () => {
    return (
        <>
              <li className="nav-item">
                <a className="nav-link active" href="#">Home
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Servicios</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Comunas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contacto</a>
              </li>
        </>
    );
}

export default Secciones;
