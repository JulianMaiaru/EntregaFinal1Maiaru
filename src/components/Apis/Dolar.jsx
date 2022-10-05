/* const productos = [
     {
         id: 1, nombre: "Papa", marca: "Pepita", Precio: 230, stock: 20
     },
     {
         id: 2, nombre: "Te", marca: "Tecito", Precio: 130, stock: 25
     },
     {
         id: 3, nombre: "Mate", marca: "Matecito", Precio: 120, stock: 22
     },
     {
         id: 4, nombre: "Cafe", marca: "Cafecito", Precio: 430, stock: 10
     },
 ]

 const consultaBDD = (habilito) => {
     return new Promise((resolve, reject) => {
         if(habilito) { //habilitado == true
             resolve(productos)
         }
         reject("No habilitado")
     })
 }


 consultaBDD(true).then(data => console.log(data))*/


import React, {useState, useEffect} from 'react';



const Dolar = () => {
    
    const [dolar, setDolar] = useState([]);
    useEffect (() => {
    const mostrarDolar = () => { 
        fetch('https://criptoya.com/api/dolar')
        .then(response => response.json())
        .then(({blue, ccb, ccl, mep}) => {
            setDolar(Object.entries({blue, ccb, ccl, mep}).map((moneda, indice)  => <p key={indice}>Tipo: {moneda[0]} - ${moneda[1]}</p>))
        })
        //blue = <p>Tipo: Blue, valor: $285 <p>

    }

    mostrarDolar()
}, []);

    return (
        <>
            {dolar}
        </>
    );
}

export default Dolar;
