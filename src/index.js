import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import UserProvider from './context/user';
import ProductProvider from './context/products';
import CartProvider from './context/cart';

ReactDOM.render(
  
  <UserProvider>
    <ProductProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductProvider>
  </UserProvider>,

  document.getElementById("root")
);
