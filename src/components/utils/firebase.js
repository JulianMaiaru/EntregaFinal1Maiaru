import { initializeApp } from "firebase/app";
import {collection, addDoc, getFirestore, getDocs, getDoc, doc, updateDoc, deleteDoc} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8_OyKAhI-t47a0XvGsPAETqYzzZJieiU",
  authDomain: "react-34755-2022-eda68.firebaseapp.com",
  projectId: "react-34755-2022-eda68",
  storageBucket: "react-34755-2022-eda68.appspot.com",
  messagingSenderId: "870608084620",
  appId: "1:870608084620:web:f5da4305d2d045ab96e5a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()

const  cargarBaseDeDatos = async () => {
  const promise = await fetch ('./json/productos.json')
  const productos = await promise.json()
  productos.forEach( async(producto) => {
      await addDoc(collection(db,"productos"), {
          nombre: producto.nombre,
          Categoria: producto.idCategoria,
          precio: producto.precio,
          turnos: producto.turnos,
          detalles: producto.detalles,
          img: producto.img
      })
  })
}

const getProducto = async (id) => {
  const producto = await getDoc(doc(db, "productos", id))
  const prod = [producto.id, producto.data()]
  return prod
}

const getProductos = async () => {
  const productos = await getDocs(collection(db, "productos"))
  const items = productos.docs.map(producto => [producto.id, producto.data()])
  return items
}

const updateProducto = async (id, info) => {
  const estado = await updateDoc(doc(db, "productos", id), info)
  return estado
}

const deleteProducto = async(id) => {
  const estado = await deleteDoc(doc(db, "productos", id))
  return estado
}

const createProducto = async (objProd) => {
  const estado = await addDoc(collection(db, "productos"), {
    nombre: objProd.nombre,
    categoria: objProd.idCategoria,
    precio: objProd.precio,
    turnos: objProd.turnos,
    detalles: objProd.detalles,
    img: objProd.img
  })

  return estado
}

const createOrdenCompra = async (preTotal, nombre, apellido, email, dni, direccion) => {
  const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
    nombre: nombre,
    apellido: apellido,
    email: email,
    dni: dni,
    direccion: direccion,
    precioTotal: preTotal
  })

  return ordenCompra
}

const getOrdenCompra = async (id) => {
  const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
  return ordenCompra
}


export {cargarBaseDeDatos, getProductos, getProducto, updateProducto, deleteProducto, createProducto, createOrdenCompra, getOrdenCompra}