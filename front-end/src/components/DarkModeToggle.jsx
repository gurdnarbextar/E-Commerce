import React from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'; // Import Heroicons
import useDarkMode from '../hooks/useDarkMode'; // Adjust the path as necessary

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none"
      aria-label="Toggle Dark Mode"
    >
      {isDarkMode ? (
        <SunIcon className="w-6 h-6 text-yellow-400" />
      ) : (
        <MoonIcon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
      )}
    </button>
  );
};

export default DarkModeToggle;
