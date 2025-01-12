import React, { useState } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Item 1", price: 20, quantity: 1 },
    { id: 2, name: "Item 2", price: 30, quantity: 1 },
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return; // Prevent quantity from going below 1
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center p-4 border rounded-lg"
          >
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-700">${item.price}</p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="px-2 py-1 bg-gray-300 rounded-md"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="px-2 py-1 bg-gray-300 rounded-md"
              >
                +
              </button>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-6">
        <span className="text-xl font-semibold">Total:</span>
        <span className="text-xl font-semibold">${totalAmount}</span>
      </div>
    </div>
  );
};

export default CartPage;
