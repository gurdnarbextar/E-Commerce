import React, { createContext, useState, useEffect } from "react";
import {
  getCartFromLocalStorage,
  getCartQuantityFromLocalStorage,
  saveCartToLocalStorage,
} from "../services/cartService";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getCartFromLocalStorage());
  const [cartQuantity, setCartQuantity] = useState(
    getCartQuantityFromLocalStorage()
  );

  // useEffect to save cart and quantity to localStorage whenever they change
  useEffect(() => {
    saveCartToLocalStorage(cart, cartQuantity);
  }, [cart, cartQuantity]); // Runs when cart or cartQuantity changes

  const addToCart = (product, quantity) => {
    const updatedCart = [...cart, { product, quantity }];
    setCart(updatedCart);
    setCartQuantity((prevQuantity) => prevQuantity + quantity);
  };

  return (
    <CartContext.Provider value={{ cart, cartQuantity, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
