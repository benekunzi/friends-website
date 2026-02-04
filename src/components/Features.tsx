"use client";

import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

const features = [
    {
        title: "Chat with friends",
        description: "Real-time messaging with no algorithms in between.",
        color: "bg-blue-500",
    },
    {
        title: "Be as you are",
        description: "No filters, no pressure. Just your authentic moments.",
        color: "bg-accent",
    },
    {
        title: "Stay informed",
        description: "A chronological feed that puts you in control.",
        color: "bg-green-500",
    },
    {
        title: "Privacy first",
        description: "Your data stays yours. We don't sell your moments.",
        color: "bg-purple-500",
    },
    {
        title: "Share your world",
        description: "Share photos and videos in high quality.",
        color: "bg-orange-500",
    },
    {
        title: "Connect visually",
        description: "Video calls that feel like you're in the same room.",
        color: "bg-pink-500",
    },
];

export default function Features() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            align: "start",
            loop: true,
            skipSnaps: false,
            dragFree: false,
            slidesToScroll: 1,
            breakpoints: {
                "(min-width: 768px)": { slidesToScroll: 1 },
                "(min-width: 1024px)": { slidesToScroll: 1 },
            },
        },
        [Autoplay({ delay: 10000, stopOnInteraction: true })]
    );

    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const scrollTo = useCallback(
        (index: number) => {
            if (emblaApi) emblaApi.scrollTo(index);
        },
        [emblaApi]
    );

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);

        return () => {
            emblaApi.off("select", onSelect);
            emblaApi.off("reInit", onSelect);
        };
    }, [emblaApi, onSelect]);

    return (
        <section id="features" className="py-24 bg-gray-50 dark:bg-slate-900/50 overflow-hidden">
            <div className="container-custom relative">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold mb-4"
                    >
                        Designed for clarity. <br className="hidden sm:block" />
                        <span className="text-accent">Built for people.</span>
                    </motion.h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        We stripped away the noise to focus on what matters most: Connection.
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Navigation Buttons */}
                    <button
                        onClick={scrollPrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-md flex items-center justify-center hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                        aria-label="Previous slide"
                    >
                        <svg className="w-5 h-5 text-slate-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={scrollNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-md flex items-center justify-center hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                        aria-label="Next slide"
                    >
                        <svg className="w-5 h-5 text-slate-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3"
                                >
                                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-slate-700 flex flex-col items-center text-center group hover:shadow-lg transition-all h-full">
                                        <div className={`w-16 h-16 rounded-xl mb-4 ${feature.color} opacity-20 group-hover:opacity-30 transition-opacity flex items-center justify-center flex-shrink-0`}>
                                            <span className="text-xl font-bold opacity-50 text-black dark:text-white">
                                                {feature.title.charAt(0)}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {scrollSnaps.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollTo(index)}
                                className={`w-2 h-2 rounded-full transition-all ${index === selectedIndex
                                    ? "bg-accent w-8"
                                    : "bg-gray-300 dark:bg-slate-700"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
