"use client";

import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-3">
                                <span className="text-white font-bold text-lg">S</span>
                            </div>
                            <span className="text-xl font-semibold text-white">SocialApp</span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
                            About Us
                        </a>
                        <a href="#pricing" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
                            Pricing
                        </a>
                        <button className="bg-white text-gray-900 px-6 py-2.5 rounded-lg hover:bg-gray-100 transition-all duration-200 font-medium shadow-sm">
                            Login
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-300 hover:text-white p-2"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-800">
                        <div className="flex flex-col space-y-4">
                            <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
                                About Us
                            </a>
                            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
                                Pricing
                            </a>
                            <button className="bg-white text-gray-900 px-6 py-2.5 rounded-lg hover:bg-gray-100 transition-all duration-200 font-medium w-fit shadow-sm">
                                Login
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
