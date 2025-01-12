import React from "react";

const cartService = () => {
  return <></>; // This is to make this a valid jsx file
};

export const getCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
};

export const getCartQuantityFromLocalStorage = () => {
  const savedQuantity = localStorage.getItem("cartQuantity");
  return savedQuantity ? JSON.parse(savedQuantity) : 0;
};

export const saveCartToLocalStorage = (cart, cartQuantity) => {
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("cartQuantity", cartQuantity);
};

export const clearCart = () => {
  localStorage.removeItem("cart");
  localStorage.removeItem("cartQuantity");
};

export default cartService;
