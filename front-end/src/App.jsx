import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar'; 
//import HeroSection from './pages/HeroSection';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from './pages/Slider';
//import Marketing from './pages/Marketing';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const App = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main className="p-4">
       <Slider />
      </main>
    </div>
  );
};
export default App;