import React, {useState} from 'react';

const Contador = () => {

    const [contador, setContador] = useState(0);
    function modificarContador(operacion) {
        if(operacion == "+") {
            setContador (contador + 1) //contador =contador + 1
        } else {
            if(contador > 1) {
            setContador (contador - 1) //contador =contador - 1
            }
        }

    }
    return (
        <>
        <div class="btn-group" role="group" aria-label="Basic example">
  <button onClick={() => modificarContador("-")} type="button" class="btn btn-primary">-</button>
  <button type="button" class="btn btn-primary">{contador}</button>
  <button onClick={() => modificarContador("+")}type="button" class="btn btn-primary">+</button>
  <button type="button" class="btn btn-primary">Agregar al Carrito</button>
        </div>
        </>
    );
}

export default Contador;
