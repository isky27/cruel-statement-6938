import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import CartContextProvider from './Checkout/CartContextProvider';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
      <ChakraProvider>
        <CartContextProvider>
            <App />
        </CartContextProvider>
    </ChakraProvider>
   </BrowserRouter>

);


