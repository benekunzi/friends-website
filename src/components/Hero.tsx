"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Floating Person Card Component
function PersonCard({
    name,
    handle,
    imageSrc,
    className = "",
    delay = 0,
}: {
    name: string;
    handle: string;
    imageSrc: string;
    className?: string;
    delay?: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={`absolute z-20 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl flex flex-col items-center gap-3 w-48 ${className}`}
        >
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-sm">
                <Image
                    src={imageSrc}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="text-center">
                <h3 className="font-bold text-slate-900 dark:text-white text-base leading-tight">
                    {name}
                </h3>
                <p className="text-xs text-slate-500 font-medium">{handle}</p>
            </div>
            <button className="bg-slate-900 text-white text-[10px] uppercase font-bold py-2 px-6 rounded-full mt-1 hover:bg-slate-800 transition-colors tracking-wide">
                Follow
            </button>
        </motion.div>
    );
}

const CurlyArrow = ({ className }: { className?: string }) => (
    <svg
        className={className}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M85.3 27.1C85.3 27.1 82.2 47.9 61.1 57.2C40 66.5 22.3 54.3 26.6 37.9C30.9 21.5 53.6 23.3 56.4 39.8C59.2 56.3 48.7 75.8 45 80.8"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
        />
        <path
            d="M37 73L45 81L54 75"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default function Hero() {
    return (
        <section className="relative pt-32 pb-32 lg:pt-48 lg:pb-56 overflow-hidden">
            <div className="container-custom grid lg:grid-cols-2 gap-12 items-center relative">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center lg:text-left z-10 relative"
                >
                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                        Time to connect <br />
                        <span className="text-accent">differently</span>.
                    </h1>
                    <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        No algorithms. No shadowbans. Just authentic connections
                        with your real friends. Experience social media the way
                        it was meant to be.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        <button className="h-14 px-8 bg-black text-white rounded-xl flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors w-full sm:w-auto">
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.22-1.67 4.17-1.31 1.7.12 3.12 1 4.09 2.53-3.64 1.88-3.02 7.24 1 8.87-.76 2-1.8 3.66-2.73 4.67-.62.83-1.04 1.25-1.61 1.47zM14.63 3.49c.81-1.04 1.35-2.48 1.18-3.95-1.25.06-2.73.91-3.6 1.94-.85 1-1.52 2.58-1.33 3.99 1.35.1 2.94-.93 3.75-1.98z" />
                            </svg>
                            <div className="flex flex-col items-start leading-none">
                                <span className="text-[10px] uppercase opacity-80">
                                    Download on the
                                </span>
                                <span className="text-lg font-bold">App Store</span>
                            </div>
                        </button>
                        <button className="h-14 px-8 bg-black text-white rounded-xl flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors w-full sm:w-auto">
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.3,10.84L17.84,14.12C17.84,14.12 17.03,13.25 15.12,14.54L21.55,10.83C21.16,10.61 20.7,10.61 20.3,10.84M16.81,8.88L14.54,11.15L6.05,2.66L16.81,8.88M21.55,13.17L15.12,9.46L17.84,9.88L20.3,13.16C20.7,13.39 21.16,13.39 21.55,13.17Z" />
                            </svg>
                            <div className="flex flex-col items-start leading-none">
                                <span className="text-[10px] uppercase opacity-80">
                                    Get it on
                                </span>
                                <span className="text-lg font-bold">
                                    Google Play
                                </span>
                            </div>
                        </button>
                    </div>

                    {/* Left Person Card - George */}
                    <div className="hidden xl:block absolute -bottom-32 left-10">
                        <CurlyArrow className="w-24 h-24 text-gray-300 absolute -top-16 -right-16 rotate-12" />
                        <PersonCard
                            name="George Khoury"
                            handle="@george"
                            imageSrc="https://i.pravatar.cc/150?img=11"
                            delay={1.0}
                        />
                    </div>
                </motion.div>

                {/* Visual Content (Mockup) */}
                <motion.div
                    initial={{ opacity: 0, x: 50, rotate: 5 }}
                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="relative h-[600px] w-full flex items-center justify-center"
                >
                    {/* Decorative blobs */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-accent/20 to-blue-500/20 rounded-full blur-3xl -z-10" />

                    {/* Phone Mockup */}
                    <div className="w-[300px] h-[600px] bg-slate-900 rounded-[3rem] border-8 border-slate-950 shadow-2xl relative overflow-hidden z-10">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-950 rounded-b-xl z-20"></div>
                        <div className="w-full h-full bg-white dark:bg-slate-800 flex flex-col">
                            {/* Fake UI */}
                            <div className="h-16 border-b dark:border-slate-700 flex items-center px-4 justify-between">
                                <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-slate-600"></div>
                                <div className="w-24 h-4 rounded-full bg-gray-200 dark:bg-slate-600"></div>
                                <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-slate-600"></div>
                            </div>
                            <div className="flex-1 p-4 space-y-4">
                                <div className="w-full aspect-square rounded-2xl bg-gray-100 dark:bg-slate-700 mx-auto"></div>
                                <div className="space-y-2">
                                    <div className="w-3/4 h-4 rounded-full bg-gray-200 dark:bg-slate-600"></div>
                                    <div className="w-1/2 h-4 rounded-full bg-gray-200 dark:bg-slate-600"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Person Card - Sarah */}
                    <div className="hidden xl:block absolute top-1/2 -right-12 translate-x-1/2 -translate-y-1/2">
                        <CurlyArrow className="w-24 h-24 text-gray-300 absolute -top-16 -left-24 scale-x-[-1] rotate-12" />
                        <PersonCard
                            name="Sarah Chen"
                            handle="@sarah"
                            imageSrc="https://i.pravatar.cc/150?img=5" // Female avatar
                            delay={1.2}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
