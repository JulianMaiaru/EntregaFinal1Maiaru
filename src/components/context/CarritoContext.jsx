import React, {createContext, useState} from 'react';
import Swal from 'sweetalert2';

const CarritoContext = createContext()

const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState([]);

    const agregarProducto = (prod, cant) => {
        const aux = carrito
        let indice = aux.findIndex(producto => producto.id  == prod.id) //Si existe o no

        if(indice != -1) {
            aux[indice].cantidad = cant
        } else {
          const prodCarrito = {...prod, cantidad: cant}
          aux.push(prodCarrito)
        }
        setCarrito(structuredClone(aux))
        console.log(carrito)

        Swal.fire({
            title: 'Producto Agregado',
            icon: 'success',
            timer: 1500,
            showConfirmButton: false
          })

    }

    const quitarProducto = (prod) => {
        const aux = carrito
        let indice = aux.findIndex(producto => producto.id  == prod.id) 

        aux.splice(indice,1)
        setCarrito(structuredClone(aux))
        console.log(carrito)

        Swal.fire({
            title: 'Producto Eliminado',
            icon: 'error',
            timer: 1500,
            showConfirmButton: false
          })

    }

    return (
        <>
            <CarritoContext.Provider value={{carrito, agregarProducto, quitarProducto}}>
                    {props.children}
            </CarritoContext.Provider>
        </>
    );
}

export {CarritoContext, CarritoProvider};