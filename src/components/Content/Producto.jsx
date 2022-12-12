import React, {useState, useEffect, useContext} from 'react';
import DetalleProducto from './ItemDetailContainer'
import { useParams } from 'react-router-dom';
import { getProducto } from '../utils/firebase';

const Producto = () => {
    const [producto, setProducto] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        getProducto(id).then(prod => { 
        setProducto(prod)
       })
   
    }, [])

    if (producto.length != 0) {
    return (
        
            <div className="card mb-3" >
                <DetalleProducto producto={producto}/>
            </div>

       
    );
}}

export default Producto;
