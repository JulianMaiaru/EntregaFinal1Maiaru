import React from 'react';





const Home = () => {

    const productos = [
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
        return new Promise((req, res) => {
            if (habilito) { //habilitado == true
                res(productos)
            }
            res("No habilitado")
        })
    }


    console.log (consultaBDD(true))

    return (
        <>
        <h1>Hola!</h1>

        </>
    );
}

export default Home;
