import React from 'react';
import headphone from '../assets/headphone.png';
import headphone2 from '../assets/headphone2.png';
import headphone3 from '../assets/headphone3.png';
import headphone4 from '../assets/headphone4.png';
import earphone from '../assets/earphone.png';

const Marketing_2 = () => {
  const images = [
    { src: headphone, alt: "Premium headphones" },
    { src: headphone2, alt: "Wireless headphones" },
    { src: headphone3, alt: "Studio headphones" },
    { src: headphone4, alt: "Gaming headphones" },
    { src: earphone, alt: "Wireless earphones" },
  ];

  return (
    <section className="py-8 md:py-16 antialiased relative overflow-hidden">
      <div className="mx-auto max-w-screen-xl px-4 grid md:grid-cols-12 lg:gap-12 xl:gap-0">
        {/* Content Side */}
        <div className="md:col-span-6 lg:col-span-7 flex flex-col justify-center z-10">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
            Limited Time Offer!<br />Up to 40% OFF!
          </h1>
          <p className="mb-6 text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl max-w-2xl">
            Don't Wait - Limited Stock at Unbeatable Prices!
          </p>
          <button className="w-fit px-8 py-4 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold text-lg hover:border-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-700 transition-all">
            Shop Now →
          </button>
        </div>

        {/* Dynamic Image Layout */}
        <div className="md:col-span-6 lg:col-span-5 relative h-[600px] mt-12 md:mt-0">
          {/* Main center image */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 transform transition-all duration-300 hover:scale-105">
            <img
              src={headphone}
              alt="Premium headphones"
              className="w-64 h-auto rounded-lg shadow-xl"
            />
          </div>

          {/* Top right floating image */}
          <div className="absolute right-4 top-0 z-10 transform transition-all duration-300 hover:scale-105 animate-float">
            <img
              src={headphone2}
              alt="Wireless headphones"
              className="w-48 h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Bottom left floating image */}
          <div className="absolute left-4 bottom-8 z-10 transform transition-all duration-300 hover:scale-105 animate-float-delayed">
            <img
              src={headphone3}
              alt="Studio headphones"
              className="w-48 h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Top left floating image */}
          <div className="absolute left-0 top-12 z-0 transform transition-all duration-300 hover:scale-105 animate-float-reverse">
            <img
              src={headphone4}
              alt="Gaming headphones"
              className="w-40 h-auto rounded-lg shadow-lg opacity-90"
            />
          </div>

          {/* Bottom right floating image */}
          <div className="absolute right-8 bottom-16 z-0 transform transition-all duration-300 hover:scale-105 animate-pulse-slow">
            <img
              src={earphone}
              alt="Wireless earphones"
              className="w-40 h-auto rounded-lg shadow-lg opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marketing_2;