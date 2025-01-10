import React from 'react';

import {
  Monitor,
  Gamepad,
  Tablet,
  ShoppingBag,
  Laptop,
  Watch,
  TabletSmartphone,
  Headphones,
} from 'lucide-react';

const CategoryCard = ({ icon: Icon, title }) => (
  <div className="flex flex-col items-center p-6 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-lg hover:shadow-2xl hover:scale-105 transition-all cursor-pointer w-full">
    <Icon className="w-14 h-14 text-gray-700 dark:text-gray-200 mb-4" />
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
  </div>
);

const HeroSection = () => {
  const categories1 = [
    { icon: Monitor, title: 'Computers' },
    { icon: Gamepad, title: 'Gaming' },
    { icon: Tablet, title: 'Tablets' },
    { icon: ShoppingBag, title: 'Fashion' },
  ];

  const categories2 = [
    { icon: Laptop, title: 'Laptops' },
    { icon: Watch, title: 'Watches' },
    { icon: TabletSmartphone, title: 'Tablets' },
    { icon: Headphones, title: 'Accessories' },
  ];

  return (
    <div className="min-h-screen py-20 px-8 bg-gradient-to-br from-gray-300 via-gray-150 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-750 rounded-[2.5rem] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-gray-900/[0.04] dark:bg-grid-white/[0.02] -z-1" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent dark:from-black/50" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 relative z-10">  
        {/* Left Content */}
        <div className="flex flex-col justify-center space-y-8 lg:col-span-1">
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">
            Don’t miss out on
            <br />
            exclusive deals.
          </h1>
          
          <div className="flex space-x-6">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
              Create Account
            </button>
            <button className="px-8 py-4 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold text-lg hover:border-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-700">
              Shop Now →
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:col-span-2">
          {/* Top Categories */}
          <div className='p-6 w-full'>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Top categories
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {categories1.map((category, index) => (
                <CategoryCard key={index} {...category} />
              ))}
            </div>
            <a
              href="#"
              className="block mt-6 text-lg text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              Shop now →
            </a>
          </div>

          {/* Shop Consumer Electronics */}
          <div className='p-6 w-full'>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Shop consumer electronics
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {categories2.map((category, index) => (
                <CategoryCard key={index} {...category} />
              ))}
            </div>
            <a
              href="#"
              className="block mt-6 text-lg text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              Shop now →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
