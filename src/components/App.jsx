import React, {useState} from 'react';
import Navbar from '../components/Content/Navbar';
import Form from '../components/Layouts/Form';
import '../components/Styles/App.css'
import CartWidget from '../components/Styles/CartWidget';
import ItemListContainer from '../components/Content/ItemListContainer';
import Contador from '../components/Layouts/Contador';
import Home from '../components/Content/Home';

const App = () => {
    return (
        //fragment 
        <>        
        <Navbar/>
        <Contador/>
        <Home/>
        <ItemListContainer/>
      </>

    );
}

export default App;

