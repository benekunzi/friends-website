import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-white py-16">
            <div className="container-custom">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-2xl font-bold tracking-tighter mb-6 inline-block">
                            Friends<span className="text-accent">.</span>
                        </Link>
                        <p className="text-slate-400 max-w-sm">
                            The social network built for people, not advertisers. Join the movement today.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Product</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li><Link href="#" className="hover:text-white transition-colors">Download</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Features</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
                            <li><Link href="/privacyPolicy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
                    <p>© {new Date().getFullYear()} Friends App Inc. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        {/* Social icon placeholders */}
                        <span>Twitter</span>
                        <span>Instagram</span>
                        <span>LinkedIn</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
