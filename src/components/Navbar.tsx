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
                    ? "bg-white/90 backdrop-blur-md shadow-sm py-4 dark:bg-slate-900/90"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container-custom flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
                    Friends<span className="text-accent">.</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link href="/about" className="font-medium hover:text-accent transition-colors">
                        About
                    </Link>
                    <Link href="/faq" className="font-medium hover:text-accent transition-colors">
                        FAQ
                    </Link>
                    <Link
                        href="/"
                        className="px-5 py-2.5 bg-primary text-white rounded-full font-medium hover:bg-primary/90 hover:text-white transition-all dark:bg-white dark:text-primary"
                    >
                        Download App
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-100 p-6 shadow-xl dark:bg-slate-900/95 dark:border-slate-800">
                    <div className="flex flex-col space-y-6 text-center">
                        <Link
                            href="/about"
                            className="text-lg font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="/faq"
                            className="text-lg font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            FAQ
                        </Link>
                        <Link
                            href="#contact"
                            className="px-6 py-3 bg-primary text-white rounded-full font-medium active:scale-95 transition-transform mx-auto inline-block"
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
