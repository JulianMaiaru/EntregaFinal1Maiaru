import React from 'react';
import {useState, useEffect} from 'react';
import { consultarBDD } from '../utils/funcionesUtiles';

const Categoria = () => {
    const [productos, setProductos] = useState ([]);
    useEffect(() => {
        consultarBDD('/json/productos.json').then(productos => {
            

        })
    }, []);
    return (
        <>
            
        </>
    );
}

export default Categoria;
