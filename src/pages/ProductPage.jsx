import React from "react";
import Marketing_2 from "./Marketing_2.jsx"; // Import the Marketing component used for product display

const ProductPage = () => {
  const products = [
    {
      name: "Premium Headphones",
      price: "$199.99",
      description:
        "Experience unparalleled sound quality with these premium headphones, designed for music lovers and audiophiles.",
      imgSrc: require("../assets/headphone.png"), // Import the main product image
    },
    {
      name: "Wireless Headphones",
      price: "$149.99",
      description:
        "Enjoy freedom and convenience with our wireless headphones, perfect for on-the-go listening.",
      imgSrc: require("../assets/headphone2.png"),
    },
    {
      name: "Studio Headphones",
      price: "$249.99",
      description:
        "Professional-grade studio headphones ideal for recording, mixing, and mastering.",
      imgSrc: require("../assets/headphone3.png"),
    },
    {
      name: "Gaming Headphones",
      price: "$179.99",
      description:
        "Dominate the game with these immersive gaming headphones featuring surround sound and a noise-canceling microphone.",
      imgSrc: require("../assets/headphone4.png"),
    },
    {
      name: "Wireless Earphones",
      price: "$89.99",
      description:
        "Compact and stylish wireless earphones for casual listening and workouts.",
      imgSrc: require("../assets/earphone.png"),
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Product Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <img
              src={product.imgSrc}
              alt={product.name}
              className="w-full h-auto rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              {product.name}
            </h2>
            <p className="text-gray-500 mb-4">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-gray-900">
                {product.price}
              </span>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
