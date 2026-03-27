"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const lenisRef = useRef<Lenis | null>(null);

    // Lenis Smooth Scrolling Integration
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        });
        lenisRef.current = lenis;

        lenis.on("scroll", ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove((time) => {
                lenis.raf(time * 1000);
            });
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const sections = [
                document.getElementById("vision-section"),
                document.getElementById("team-section")
            ];

            sections.forEach((sectionEl) => {
                if (sectionEl) {
                    const elementsToAnimate = sectionEl.querySelectorAll(".value-title-wrap, .value-desc");

                    elementsToAnimate.forEach((el, index) => {
                        gsap.fromTo(
                            el,
                            { y: 60, autoAlpha: 0 },
                            {
                                y: 0,
                                autoAlpha: 1,
                                ease: "power3.out",
                                scrollTrigger: {
                                    trigger: sectionEl,
                                    start: "top 95%",
                                    end: "center 45%",
                                    scrub: 1,
                                },
                            }
                        );
                    });
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <main ref={containerRef} className="min-h-screen bg-[#0b1015] text-white overflow-x-hidden pb-32">
            {/* Hero Section */}
            <section className="min-h-[90dvh] flex flex-col items-center justify-center px-4 relative z-10 gap-8">
                <h1 className="text-7xl md:text-[9rem] font-bold tracking-tighter text-center text-white leading-none">
                    About Friends.
                </h1>
                <p className="text-xl md:text-3xl text-gray-400 w-full px-4 sm:px-8 text-center leading-relaxed">
                    We are building the social network for people, not for advertisers.
                    <br />
                    A place where connection means connection, not consumption.
                </p>
            </section>

            {/* Vision Section */}
            <section className="py-12 px-4 w-full md:px-12 flex justify-center text-center overflow-hidden">
                <div id="vision-section" className="flex w-full flex-col justify-center items-center">
                    <div className="w-full">
                        <div className="value-title-wrap inline-block mb-6 opacity-0">
                            <h3 className="flex gap-4 md:gap-8 text-7xl md:text-[9rem] font-bold tracking-tighter text-white leading-none">
                                <span>Our</span>
                                <span>Vision</span>
                            </h3>
                        </div>
                        <div className="value-desc space-y-6 text-xl leading-relaxed text-gray-400 sm:text-2xl md:text-3xl lg:leading-[1.5] w-full mt-12 mb-32 opacity-0 max-w-7xl mx-auto">
                            <p>
                                Social media has lost its way. It&apos;s become &quot;media&quot; - focused on content consumption,
                                viral algorithms, and keeping you addicted. The &quot;social&quot; part - authentic connection
                                with people you actually know - has been pushed aside.
                            </p>
                            <p>
                                Friends exists to bring the social back. We believe in a chronological feed,
                                absolute privacy, and a platform that serves you, not an algorithm.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-12 px-4 w-full md:px-12 flex justify-center text-center overflow-hidden">
                <div id="team-section" className="flex w-full flex-col justify-center items-center">
                    <div className="w-full">
                        <div className="value-title-wrap inline-block mb-6 opacity-0">
                            <h3 className="flex gap-4 md:gap-8 text-7xl md:text-[9rem] font-bold tracking-tighter text-white leading-none">
                                <span>The</span>
                                <span>Team</span>
                            </h3>
                        </div>
                        <div className="value-desc flex flex-col items-center space-y-6 text-xl leading-relaxed text-gray-400 sm:text-2xl md:text-3xl lg:leading-[1.5] w-full mt-12 mb-32 opacity-0 max-w-7xl mx-auto">
                            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden bg-gray-800 mb-4">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/benedict.jpg" alt="Benedict Kunzmann" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=Benedict+Kunzmann&background=random'; }} />
                            </div>
                            <div>
                                <h4 className="text-3xl md:text-5xl font-bold text-white mb-2">Benedict Kunzmann</h4>
                                <p className="text-lg md:text-xl text-blue-500 font-semibold mb-8">Founder</p>
                            </div>
                            <p className="max-w-4xl">
                                I started Friends because I missed the days when social media was actually about connecting with the people you care about. Our small but passionate team is dedicated to building a platform that respects your time and your privacy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
