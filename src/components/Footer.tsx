"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-[#0b1015] text-white py-16 pb-28 md:pb-16 border-t border-white/10 relative z-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="tracking-tighter mb-6 inline-block text-xl">
                            FRÅNDS
                        </Link>
                        <p className="text-gray-400 max-w-sm text-sm">
                            The social network built for people, not advertisers. Join the movement today.
                        </p>
                    </div>

                    <div>
                        <h4 className="mb-6 text-white text-xl">Product</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><Link href="#" className="hover:text-white transition-colors">Download</Link></li>
                            <li><Link href="#formats" className="hover:text-white transition-colors">Features</Link></li>
                            <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-6 text-white text-xl">Company</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
                            <li><Link href="/privacyPolicy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/community-guidelines" className="hover:text-white transition-colors">{t.navbar.guidelines}</Link></li>
                            <li><Link href="/termsOfUse" className="hover:text-white transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} FRÅNDS App Inc. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        {/* Social icon placeholders */}
                        <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
                        <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
                        <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
