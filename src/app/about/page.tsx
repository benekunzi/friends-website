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
        let ctx = gsap.context(() => {
            // Vision Section Animation (Text Fill + Subtitle slide up)
            const visionEl = document.getElementById("vision-section");
            if (visionEl) {
                const fillEl = visionEl.querySelector(".title-fill");
                if (fillEl) {
                    gsap.fromTo(
                        fillEl,
                        { clipPath: "inset(-50% 100% -50% -50%)" },
                        {
                            clipPath: "inset(-50% -50% -50% -50%)",
                            ease: "none",
                            scrollTrigger: {
                                trigger: visionEl,
                                start: "top 95%",
                                end: "center 45%",
                                scrub: 1,
                            },
                        }
                    );
                }

                const titleWrap = visionEl.querySelector(".value-title-wrap");
                if (titleWrap) {
                    gsap.fromTo(
                        titleWrap,
                        { x: "5vw" }, // Starts slightly right-of-center
                        {
                            x: 0, // Moves naturally to the left edge
                            ease: "none",
                            scrollTrigger: {
                                trigger: visionEl,
                                start: "top 95%",
                                end: "center 45%",
                                scrub: 1,
                            },
                        }
                    );
                }

                const subtitle = visionEl.querySelector(".value-desc");
                if (subtitle) {
                    gsap.fromTo(
                        subtitle,
                        { y: 60, x: "10vw", autoAlpha: 0 },
                        {
                            y: 0,
                            x: 0,
                            autoAlpha: 1,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: visionEl,
                                start: "top 95%",
                                end: "center 45%",
                                scrub: 1,
                            },
                        }
                    );
                }
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <main ref={containerRef} className="min-h-screen bg-[#0b1015] text-white overflow-x-hidden pb-32">
            {/* Hero Section */}
            <section className="min-h-[100dvh] flex flex-col items-center justify-center px-4 relative z-10 gap-8">
                <h1 className="text-7xl md:text-[9rem] font-bold tracking-tighter text-center text-white leading-none">
                    About Friends.
                </h1>
                <p className="text-xl md:text-3xl text-gray-400 w-full px-4 sm:px-8 mb-24 text-center leading-relaxed">
                    We are building the social network for people, not for advertisers.
                    <br />
                    A place where connection means connection, not consumption.
                </p>
            </section>

            {/* Vision Section */}
            <section className="py-32 px-4 w-full md:px-12 flex justify-start text-left overflow-hidden">
                <div id="vision-section" className="flex w-full flex-col justify-center items-start">
                    <div className="w-full">
                        <div className="value-title-wrap inline-block">
                            <div className="relative inline-block mb-6">
                                {/* Dark/transparent base text that is always visible */}
                                <h3 className="text-7xl font-semibold tracking-tighter text-white/10 sm:text-8xl md:text-[11rem] lg:text-[14rem] xl:text-[16rem] leading-[0.85]">
                                    Our Vision
                                </h3>
                                {/* Bright white overlay text that fills in */}
                                <h3
                                    className="title-fill absolute left-0 top-0 h-full w-full text-7xl font-semibold tracking-tighter text-white sm:text-8xl md:text-[11rem] lg:text-[14rem] xl:text-[16rem] leading-[0.85]"
                                    aria-hidden="true"
                                >
                                    Our Vision
                                </h3>
                            </div>
                        </div>
                        <div className="value-desc space-y-6 text-xl leading-relaxed text-gray-400 sm:text-2xl md:text-3xl lg:leading-[1.5] w-full mt-12 mb-32 opacity-0 max-w-7xl">
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
        </main>
    );
}
