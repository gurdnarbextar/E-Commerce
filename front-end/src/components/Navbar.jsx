// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { ShoppingCartIcon, UserIcon, HeartIcon, MagnifyingGlassIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import DarkModeToggle from './DarkModeToggle'; // Import the DarkModeToggle component

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAccountOpen, setIsAccountOpen] = useState(false);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            const categoryDropdown = document.getElementById('category-dropdown');
            const accountDropdown = document.getElementById('account-dropdown');

            if (categoryDropdown && !categoryDropdown.contains(event.target)) {
                setIsMenuOpen(false);
            }

            if (accountDropdown && !accountDropdown.contains(event.target)) {
                setIsAccountOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="bg-white dark:bg-gray-900  sticky top-0 z-10">
            <div className="container mx-auto px-4 flex items-center justify-between h-16">
                {/* Brand */}
                <a className="text-2xl font-bold text-gray-800 dark:text-white" href="/">
                    E_commerce
                </a>

                {/* Search */}
                <div className="relative flex items-center border rounded-full px-4 py-2 w-full max-w-md">
                    <div
                        id="category-dropdown"
                        className="flex items-center text-gray-500 dark:text-gray-300 cursor-pointer"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span>All Categories</span>
                        <ChevronDownIcon className="h-5 w-5 ml-2" />
                    </div>
                    {/*Dropdown menu*/}
                    {isMenuOpen && (
                        <div className="absolute top-full left-0 mt-2 bg-white dark:bg-gray-700 border dark:border-gray-600 rounded-lg shadow w-48">
                            <ul className="py-2 text-gray-700 dark:text-gray-200">
                                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer">Category 1</li>
                                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer">Category 2</li>
                                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer">Category 3</li>
                                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer">Category 4</li>
                            </ul>
                        </div>
                    )}

                    <div className="w-px bg-gray-300 dark:bg-gray-600 h-6 mx-4"></div>
                    <input
                        className="flex-grow outline-none text-gray-700 dark:text-gray-200 bg-transparent placeholder-gray-500 dark:placeholder-gray-400"
                        type="text"
                        placeholder="Search Items"
                    />
                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                </div>

                {/* Actions */}
                <ul className="flex items-center space-x-6 relative">
                    <li className="relative group">
                        <HeartIcon className="h-6 w-6 text-gray-700 dark:text-gray-200" />
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                            5
                        </span>
                        <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100">
                            Wishlist
                        </span>
                    </li>
                    <li className="relative group">
                        <ShoppingCartIcon className="h-6 w-6 text-gray-700 dark:text-gray-200" />
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                            3
                        </span>
                        <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100">
                            Cart
                        </span>
                    </li>
                    <li className="relative group" id="account-dropdown">
                        <div className="flex items-center cursor-pointer" onClick={() => setIsAccountOpen(!isAccountOpen)}>
                            <UserIcon className="h-6 w-6 text-gray-700 dark:text-gray-200" />
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                2
                            </span>
                            <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100">
                                Account
                            </span>
                        </div>
                        {/*Account Options */}
                        {isAccountOpen && (
                            <div className="absolute right-0 mt-2 bg-white dark:bg-gray-700 border dark:border-gray-600 rounded-lg shadow w-48">
                                <ul className="py-2 text-gray-700 dark:text-gray-200">
                                    <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer">Profile</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer">Orders</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer">Logout</li>
                                </ul>
                            </div>
                        )}
                    </li>
                    {/* Dark Mode Toggle */}
                    <li>
                        <DarkModeToggle />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
