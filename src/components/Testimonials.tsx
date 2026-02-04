"use client";

import React from "react";
import { Star } from "lucide-react";

export default function Testimonials() {
    return (
        <section className="py-24 bg-gray-50 dark:bg-slate-900/30 border-y border-gray-100 dark:border-slate-800">
            <div className="container-custom">
                <h2 className="text-3xl font-bold text-center mb-16">
                    Straight from the <span className="text-accent">community</span>.
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((_, i) => (
                        <div key={i} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700">
                            <div className="flex gap-1 text-yellow-500 mb-4">
                                {[...Array(5)].map((_, j) => (
                                    <Star key={j} className="fill-current w-5 h-5" />
                                ))}
                            </div>
                            <p className="mb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                                "Finally, an app that doesn't try to addict me. It feels like the early Internet again—just genuine connection."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-slate-600" />
                                <div>
                                    <div className="font-bold">Alex Johnson</div>
                                    <div className="text-sm text-gray-500">Creator</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
