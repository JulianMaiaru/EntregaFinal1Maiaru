import React, { useState, useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';

const DetalleProducto = ({ producto }) => {
    const [cantidad, setCantidad] = useState(1);

    const { carrito, agregarProducto, quitarProducto } = useContext(CarritoContext)

    const cantProducto = (operacion) => {
        if (operacion == "+") {
            if (cantidad < producto.turnos) {
                setCantidad(cantidad + 1)
            }
        } else {
            if (cantidad > 1) {
                setCantidad(cantidad - 1)
            }
        }
    }
    return (
        <>
        <div className="container-fluid vh-100">
            <div class="row">
                <div className="card mb-3 mt-5">
                    <div className="row g-0">
                        <div className="col-md-4 bg-dark">
                            <img src={`${producto.img}`} className="card-img img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8 bg-light">
                            <div className="card-body">
                                <h5 className="card-title">{producto.nombre}</h5>
                                <p className="card-text">{producto.detalles}</p>
                                <p className="card-text">Precio: ${producto.precio}</p>
                                <p className="card-text">Turnos disponibles: {producto.turnos}</p>
                                <p className='card-text'>{cantidad}</p>
                                <div class="d-grid gap-2">
                                    <button className='btn btn-light' onClick={() => cantProducto("+")}>+</button>
                                    <button className='btn btn-dark' onClick={() => cantProducto("-")}>-</button>
                                    <button className='btn btn-dark' onClick={() => agregarProducto(producto, cantidad)}>Solicitar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            {/*
            <div class="container">
                <div className="row">
                    <div class="col d-flex justify-content-center flex-row">
                        <div className="card shadow mb-2 bg-dark text-light rounded">
                            <img src={`${producto.img}`} className="card-img img-fluid rounded-start" style={{maxWidth: "100%"}} alt="..." />
                            <div className="card-body">
                                <h5 className="card-title p-2 text-center">{producto.nombre} </h5>
                                <p className="card-text description text-white-50">{producto.detalles}</p>
                                <p className="card-text text-primary text-center py-2">Precio: ${producto.precio}</p>
                                <p className="card-text">Turnos disponibles: {producto.turnos}</p>
                                <p className='card-text'>{cantidad}</p>
                
                                <div class="d-grid gap-2">
                                    <button className='btn btn-light' onClick={() => cantProducto("+")}>+</button>
                                    <button className='btn btn-dark' onClick={() => cantProducto("-")}>-</button>
                                    <button className='btn btn-dark' onClick={() => agregarProducto(producto, cantidad)}>Solicitar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            */}
        </>
    );
}

export default DetalleProducto;
