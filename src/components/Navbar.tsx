"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-[#0b1015]/80 backdrop-blur-md shadow-sm py-4 border-b border-white/5"
                    : "bg-transparent py-6"
            )}
        >
            <div className="mx-auto max-w-7xl px-6 md:px-12 flex items-center justify-between text-white">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
                    Friends<span className="text-gray-400">.</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link href="/about" className="font-medium text-gray-300 hover:text-white transition-colors">
                        About
                    </Link>
                    <Link href="/faq" className="font-medium text-gray-300 hover:text-white transition-colors">
                        FAQ
                    </Link>
                    <Link href="/community-guidelines" className="font-medium text-gray-300 hover:text-white transition-colors">
                        Guidelines
                    </Link>
                    <Link
                        href="/"
                        className="px-5 py-2.5 bg-white text-[#0b1015] rounded-full font-medium hover:bg-gray-200 transition-all"
                    >
                        Download App
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-[#0b1015]/95 backdrop-blur-xl border-b border-white/10 p-6 shadow-xl">
                    <div className="flex flex-col space-y-6 text-center text-white">
                        <Link
                            href="/about"
                            className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="/faq"
                            className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            FAQ
                        </Link>
                        <Link
                            href="/community-guidelines"
                            className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Guidelines
                        </Link>
                        <Link
                            href="#contact"
                            className="px-6 py-3 bg-white text-[#0b1015] rounded-full font-medium active:scale-95 transition-transform mx-auto inline-block"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Download App
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
