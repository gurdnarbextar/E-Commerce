import React from "react";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Slider from "./pages/Slider";

// Importing styles for Slick Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter

const App = () => {
  return (
    <BrowserRouter>
      {" "}
      {/* Wrap the app with BrowserRouter */}
      <CartProvider>
        {" "}
        {/* Wrapping the app with CartProvider */}
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Navbar />
          <main className="p-4">
            <Slider />
          </main>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
