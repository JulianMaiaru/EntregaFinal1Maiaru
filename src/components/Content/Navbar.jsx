import React from 'react';
import { Link } from 'react-router-dom'

import Form from '../Layouts/Form';
import Dropdown from '../Layouts/Dropdown';
import Secciones from '../Layouts/Secciones';
import Producto from './Producto';

const Navbar = () => {
    const listDrowdon = [
        {id:1, name:"Ciudadania Reconstruccion", path:"reconstruccion"},
        {id:21, name:"Ciudadania Hijo Directo", path:"hijodirecto"},
        {id:31, name:"Ciudadania Via Judicial", path:"viajudicial"}
    ]

    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <Secciones />
                            <Dropdown lista={listDrowdon} />
                        </ul>

                    </div>
                    <li className="nav-item">
                        <Link className="nav-link" type="button" class="btn btn-info"><i className="bi bi-cart"></i></Link>
                    </li>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
