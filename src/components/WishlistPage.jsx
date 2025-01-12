import React, { useState } from "react";
import { ShoppingCartIcon, XIcon } from "@heroicons/react/outline";

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([
    { id: 1, name: "Item 1", price: 20, description: "Description of Item 1" },
    { id: 2, name: "Item 2", price: 30, description: "Description of Item 2" },
    { id: 3, name: "Item 3", price: 40, description: "Description of Item 3" },
  ]);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setWishlistItems(wishlistItems.filter((i) => i.id !== item.id));
  };

  const removeFromWishlist = (item) => {
    setWishlistItems(wishlistItems.filter((i) => i.id !== item.id));
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Wishlist</h2>
      <div className="space-y-4">
        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center p-4 border rounded-lg"
          >
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p>{item.description}</p>
              <p className="text-gray-700">${item.price}</p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => addToCart(item)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                Add to Cart
              </button>
              <button
                onClick={() => removeFromWishlist(item)}
                className="text-red-500"
              >
                <XIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
