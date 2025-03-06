import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, ShoppingCart, ChevronDown, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext"; // ✅ Import useCart
import Logo from "../assets/Images/logo/logo-png.png";

function NavBar({ hambar, sethambar }) {
    const [currency, setCurrency] = useState("USD");
    const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // ✅ Mobile menu state
    const { cart } = useCart(); // ✅ Get cart state from CartContext

    const toggleCurrency = (newCurrency) => {
        setCurrency(newCurrency);
        setShowCurrencyDropdown(false); // Close dropdown after selection
    };

    return (
        <div className="bg-white shadow-md">
            {/* Top Navigation Bar */}
            <div className="flex justify-between px-4 items-center py-3">
                {/* Left - Logo */}
                <div className="w-14 lg:w-36">
                    <img src={Logo} alt="TinyTitans Logo" />
                </div>

                {/* Desktop Navigation - Center Links */}
                <div className="hidden lg:flex justify-center w-full">
                    <h1 className="font-bold text-4xl bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                        TinyTitans
                    </h1>
                </div>

                {/* Right - Icons (Search, Account, Cart, Currency, Hamburger) */}
                <div className="flex space-x-4 items-center">
                    {/* Search Bar (Hidden on Mobile) */}
                    <div className="relative hidden lg:flex items-center w-64">
                        <Search className="absolute left-3 text-gray-500" size={20} />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Account (Hidden on Mobile) */}
                    <Link to="/account" className="hidden lg:flex items-center space-x-1 cursor-pointer border rounded-md px-2 py-1">
                        <span>Account</span>
                        <User size={20} />
                    </Link>

                    {/* Cart Icon */}
                    <Link to="/cart" className="relative flex items-center space-x-1 cursor-pointer border rounded-md px-2 py-1">
                        <ShoppingCart size={24} />

                        {/* Cart Count Badge */}
                        {cart.length > 0 && (
                            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                {cart.length}
                            </span>
                        )}
                    </Link>

                    {/* Currency Selector */}
                    <div className="relative">
                        <button
                            onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
                            className="hidden lg:flex items-center space-x-1 border rounded-md px-2 py-1 cursor-pointer"
                        >
                            <span>{currency}</span>
                            <ChevronDown size={18} />
                        </button>

                        {showCurrencyDropdown && (
                            <div className="absolute right-0 mt-2 bg-white border shadow-lg rounded-md w-24 z-50">
                                <ul className="text-center">
                                    <li
                                        className="p-2 hover:bg-gray-200 cursor-pointer"
                                        onClick={() => toggleCurrency("USD")}
                                    >
                                        USD ($)
                                    </li>
                                    <li
                                        className="p-2 hover:bg-gray-200 cursor-pointer"
                                        onClick={() => toggleCurrency("EUR")}
                                    >
                                        EUR (€)
                                    </li>
                                    <li
                                        className="p-2 hover:bg-gray-200 cursor-pointer"
                                        onClick={() => toggleCurrency("GBP")}
                                    >
                                        GBP (£)
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Hamburger Menu Button (Only on Mobile) */}
                    <button className="lg:hidden text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white py-3 shadow-lg animate-slide-down">
                    <ul className="flex flex-col space-y-4 text-center font-semibold text-lg">
                        <li>
                            <Link to="/" className="block py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        </li>
                        {/* <li>
                            <Link to="/catalog" className="block py-2" onClick={() => setIsMenuOpen(false)}>Catalog</Link>
                        </li> */}
                        <li>
                            <Link to="/collection" className="block py-2" onClick={() => setIsMenuOpen(false)}>Collections</Link>
                        </li>
                        <li>
                            <Link to="/section-all" className="block py-2" onClick={() => setIsMenuOpen(false)}>Selection All</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="block py-2" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
                        </li>
                    </ul>
                </div>
            )}

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex justify-center pb-5">
                <ul className="flex space-x-5 font-semibold text-lg">
                    <li>
                        <Link to="/" className="hover:border-b-2 border-black pb-2">Home</Link>
                    </li>
                    {/* <li>
                        <Link to="/catalog" className="hover:border-b-2 border-black pb-2">Catalog</Link>
                    </li> */}
                    <li>
                        <Link to="/collection" className="hover:border-b-2 border-black pb-2">Collections</Link>
                    </li>
                    <li>
                        <Link to="/section-all" className="hover:border-b-2 border-black pb-2">Selection All</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:border-b-2 border-black pb-2">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
