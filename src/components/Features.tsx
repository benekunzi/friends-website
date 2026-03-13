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
        </section>
    );
}
