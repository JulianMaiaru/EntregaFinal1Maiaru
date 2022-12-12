import React from 'react';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom'
import { getProducto } from '../utils/firebase'
import { createOrdenCompra } from '../utils/firebase';
import {getOrdenCompra} from '../utils/firebase'


const DatosComprador = () => {
    const datosFormulario = React.useRef()

    const datosCompradorForm = (e) => {
        e.preventDefault()
        
        console.log(datosFormulario)
        const datForm = new FormData(datosFormulario.current)
        console.log(Object.fromEntries(datForm))
        e.target.reset()
    }


    createOrdenCompra(120000, "nombre", "Apellido", "Email", 123123, "Calle Falsa 123").then(orden => {
        console.log(orden.id)
    })
    
    getOrdenCompra("UTKHpA46Uvs43P3Jh5IX").then(orden => {
        console.log(orden.id)
    })




    const mostrarAlertaFinalizarCompra = () => {
        Swal.fire(
            'Gracias por su compra!',
            'En 48hs le estaremos enviando la factura de compra!',
            'success'
          )
    }

    return (
        <>
        <div className="container containerProductos">
            <form onSubmit={datosCompradorForm} ref={datosFormulario}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="nombre" className="form-control" name="nombre" />
                </div>
                <div className="mb-3">
                    <label htmlFor="Apellido" className="form-label">Apellido</label>
                    <input type="Apellido" className="form-control" name="Apellido"  />
                </div>
                <div className="mb-3">
                    <label htmlFor="Email" className="form-label">Email</label>
                    <input type="Email" className="form-control" name="Email"  />
                </div>
                <div className="mb-3">
                    <label htmlFor="Dni" className="form-label">Dni</label>
                    <input type="Dni" className="form-control" name="Dni"  />
                </div>
                <div className="mb-3">
                    <label htmlFor="Direccion" className="form-label">Direccion</label>
                    <input type="Direccion" className="form-control" name="Direccion"  />
                </div>
                    <button type="submit" className="btn btn-primary nose" onClick={mostrarAlertaFinalizarCompra}><Link className='nav-link' to={`/`}>Finalizar Compra</Link></button>
            </form>                                               
        </div>
        

        </>
    );
}

export default DatosComprador;