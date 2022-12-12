import React, { useContext, useEffect, useState } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { mostrarCarrito } from '../utils/funcionesUtiles';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom'
import DatosComprador from './DatosComprador';

const Carrito = ({ children }) => {

    const { carrito, agregarProducto, quitarProducto, cleanCart } = useContext(CarritoContext)
    const [carritoLocal, setCarritoLocal] = useState([]);

    const mostrarAlertaEliminar = () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se Elimino el producto al carrito!',
            showConfirmButton: false,
            timer: 1700
        })
    }
    

    useEffect(() => {
        const prodMostrar = carrito.map(producto =>
            <div className="card cardProducto" key={producto.id}>
                <img src={producto.img} className="card-img-top" alt={producto.nombre} />
                <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">Detalles: {producto.detalles}</p>
                    <p className="card-text">Precio: {producto.precio}</p>
                    <p className="card-text">Cantidad: {producto.cantidad}</p>
                    <p className="card-text">Precio Total: {producto.precio * producto.cantidad}</p>
                    <button className='btn btn-dark' onClick={() => quitarProducto(producto)}>Eliminar</button>
                </div>
            </div>
        )
        setCarritoLocal(prodMostrar)
    }, [carrito]);


    const app = (carrito.length != 0) ? 
    <div className='row'> {carritoLocal} 
    <button><Link className='nav-link' to={`/DatosComprador`}>Finalizar Compra</Link></button>
    <button><Link className="nav-link" onClick={() => cleanCart()}>Limpiar Carrito</Link></button></div> : <> <h1 className='containerProductos'>Carrito Vacio</h1></>
    

    return app

}

export default Carrito;