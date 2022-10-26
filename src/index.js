import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components//App';
import { CarritoProvider } from './components/context/CarritoContext';
import './components/utils/x.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CarritoProvider>
      <App />
    </CarritoProvider>
 

);
