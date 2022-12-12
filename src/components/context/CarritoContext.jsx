import React, {createContext, useState} from 'react';
import Swal from 'sweetalert2';

const CarritoContext = createContext()

const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState([]);

    const agregarProducto = (prod, cant) => {
        const aux = carrito
        let indice = aux.findIndex(producto => producto.id  == prod[0]) //Si existe o no

        if(indice != -1) {
            aux[indice].cantidad = cant
        } else {
            const id = prod[0]
            const x = prod[1]
          const prodCarrito = {id, ...x, cantidad: cant}
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


    const amountInCart = () => {
        return carrito.reduce((acum, item) => acum = acum + item.amount, 0)
    }
    
    const cleanCart = () => {
        setCarrito([])

        Swal.fire({
            title: 'Carrito Vaciado',
            icon: 'info',
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
            <CarritoContext.Provider value={{carrito, agregarProducto, quitarProducto, cleanCart}}>
                    {props.children}
            </CarritoContext.Provider>
        </>
    );
}

export {CarritoContext, CarritoProvider};