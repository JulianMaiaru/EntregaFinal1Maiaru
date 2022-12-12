import React, {useState, useEffect, useContext} from 'react';
import { getProductos } from '../utils/firebase';
import { DarkModeContext } from '../context/darkModeContext';
import {Link} from 'react-router-dom'
const Home = () => {
    const [productos, setProductos] = useState([]);

    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
    useEffect(() => {
        getProductos().then(productos => {
            const cardProducto = productos.map(producto => 
                <div className="card cardProducto" key={producto[0]}>
                    <img src={producto[1].img} className="card-img-top" alt={producto.nombre} />
                        <div className="card-body">
                            <h5 className="card-title">{producto[1].nombre}</h5>
                            <p className="card-text">Detalles: {producto[1].detalles}</p>
                            <p className="card-text">Precio: ${producto[1].precio}</p>
                            <p className="card-text">Turnos: {producto[1].turnos}</p>
                            <button className='btn btn-dark'><Link className='nav-link' to={`/producto/${producto[0]}`}>Ver Producto</Link></button>
                    </div>
                </div>)
            
            setProductos(cardProducto)
            })
    }, []);

    return (

        <div className={darkMode ? 'darkMode row' : 'row'}>
            {productos}

        </div>
        
    );
}

export default Home;