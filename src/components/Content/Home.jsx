import React, { useState, useEffect } from 'react';

const Home = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        const consultarBDD = async () => {
            const response = await fetch('./json/productos.json')
            const productos = await response.jsx
            const cardProducto = productos.map(producto =>

                <div className="card" key={producto.id}>
                    <img src={"./img/" + producto.img} className="card-img-top" alt={producto.nombre} />
                    <div className="card-body">
                        <h5 className="card-title">{producto.nombre}</h5>
                        <p className="card-text">{producto.marca}</p>
                        <p className="card-text">{producto.modelo}</p>
                        <p className="card-text">{producto.precio}</p>
                        <p className="card-text">{producto.stock}</p>
                        <button className='btn btn-dark'>Ver Producto</button>
                    </div>
                </div>
            )
            return cardProducto
        }

        consultarBDD().then(producto => setProductos(producto))
    }, []);
    return (
        <>
        {productos}
        </>
    );
}

export default Home;
