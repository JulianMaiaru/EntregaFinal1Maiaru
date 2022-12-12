import React, {useState, useContext} from 'react';
import { CarritoContext } from '../context/CarritoContext';

    const DetalleProducto = ({producto}) => {
    
    const [cantidad, setCantidad] = useState(1);
          
    const {carrito, agregarProducto, quitarProducto} = useContext(CarritoContext)
      
          const cantProducto = (operacion) => {
            if(operacion == "+") {
                if(cantidad < producto[1].stock) {
                  setCantidad(cantidad + 1)
                }   
            } else {
              if(cantidad > 1) {
                setCantidad(cantidad - 1)
              }
            }
          }

    return (
        <>
        <div className="container-fluid vh-100">
            <div className="row">
                <div className="card mb-3 mt-5">
                    <div className="row g-0">
                        <div className="col-md-4 bg-dark">
                            <img src={producto[1].img} className="card-img img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8 bg-light">
                            <div className="card-body">
                                <h5 className="card-title">{producto[1].nombre}</h5>
                                <p className="card-text">{producto[1].detalles}</p>
                                <p className="card-text">Precio: ${producto[1].precio}</p>
                                <p className="card-text">Turnos disponibles: {producto[1].turnos}</p>
                                <p className='card-text'>Cantidad solicitada: {cantidad}</p>
                                <div className="d-grid gap-2">
                                {/* <button className='btn btn-light' onClick={() => cantProducto("+")}>+</button> */}
                                {/* <button className='btn btn-dark' onClick={() => cantProducto("-")}>-</button> */}
                                    <button className='btn btn-dark' onClick={() => agregarProducto(producto, cantidad)}>Solicitar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>


    );
}

export default DetalleProducto;
