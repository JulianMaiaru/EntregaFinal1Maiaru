import {useState, useEffect, useContext} from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductos } from '../utils/firebase';

const Categoria = () => {

    const [productos, setProductos] = useState([]);
    useEffect(() => {
     
        const productosFirebase = getProductos().then(
            elementos => {
                
                const cardProducto = elementos.map(producto =>

                <div className="card cardProducto" key={producto[0]}>
                    <img src={producto[1].img} className="card-img-top" alt={producto[1].nombre} />
                        <div className="card-body">
                            <h5 className="card-title">{producto[1].nombre}</h5>
                            <p className="card-text"> Detalles: {producto[1].detalles}</p>
                            <p className="card-text">Precio: {producto[1].precio}</p>
                            <p className="card-text">Turnos: {producto[1].turnos}</p>
                            <button className='btn btn-dark'><Link className='nav-link' to={`/producto/${producto[0]}`}>Ver Producto</Link></button>
                    </div>
                </div>)

            setProductos(cardProducto)
        })
    }, []);

    return (
        <div className="row">
            {productos}
        </div>
            
        
    );
}

export default Categoria;