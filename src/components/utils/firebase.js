import { initializeApp } from "firebase/app";
import { collection, doc, addDoc, getFirestore, getDocs, getDoc, } from "firebase/firestore"

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
const db = getFirestore()

const cargarBaseDeDatos = async () => {
  const promise = await fetch('../public/json/productos.json')
  const productos = await promise.json()
  productos.forEach(async (producto) => {
    await addDoc(collection(db, "productos"), {
      nombre: producto.nombre,
      categoria: producto.idCategoria,
      detalles: producto.detalles,
      precio: producto.precio,
      turnos: producto.stock,
      img: producto.img
    })
  })
}

const getProducto = async (id) => {
  const producto = await getDoc(doc(db, "productos", id))
  const prod = [producto.id, producto.data()]
  console.log(prod)
  return prod
}

const getProductos = async () => {
  const productos = await getDocs(collection(db, "productos"))
  const items = productos.docs.map(producto => [producto.id, producto.data()])
  return items
}

export { cargarBaseDeDatos, getProductos, getProducto }