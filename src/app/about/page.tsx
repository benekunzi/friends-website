"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { Anton, Open_Sans } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });
const openSans = Open_Sans({ weight: ["500"], subsets: ["latin"] });

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
            <section className="min-h-[90dvh] flex flex-col items-center justify-center px-4 relative z-10 gap-8 mt-50">
                <span className={`block transform scale-y-[2.5] origin-bottom ${anton.className} uppercase text-7xl leading-[0.8] tracking-[-0.05em] sm:text-8xl md:text-10xl lg:text-[10rem] xl:text-[12rem] xl:tracking-[-0.02em]`}>
                    ABOUT FRÅNDS
                </span>
                <p className={`text-xl md:text-3xl ${openSans.className} text-gray-200 w-full px-4 sm:px-8 text-center leading-relaxed`}>
                    Wir kreieren eine Social Media Platform für User*innen und nicht für Werbetreibende und Investoren.
                    <br />
                    Eine Platform um nichts bei seinen Freund*innen zu verpassen, ohne abgelenkt zu werden.
                </p>
            </section>

            {/* Vision Section */}
            <section className="py-12 px-4 w-full md:px-12 flex justify-center text-center overflow-hidden">
                <div id="vision-section" className="flex w-full flex-col justify-center items-center">
                    <div className="w-full">
                        <div className="value-title-wrap inline-block mb-6 opacity-0">
                            <h3 className="flex gap-4 md:gap-8 text-7xl md:text-[9rem] tracking-tighter text-white leading-none">
                                <span>Our</span>
                                <span>Vision</span>
                            </h3>
                        </div>
                        <div className={`value-desc space-y-6 text-xl leading-relaxed ${openSans.className} text-gray-200 sm:text-2xl md:text-3xl lg:leading-[1.5] w-full mt-12 mb-32 opacity-0 max-w-7xl mx-auto`}>
                            <p>
                                Heutzutage hat Social Media ihren Wert als soziale Plattform verloren. Den eigenen Freund*innen zu folgen und nur deren Posts zu sehen ist schon längst im Hintergrund geraten. Stattdessen werden User*innen mit endlos viel generierten Content geflutet, damit diese so lange wie möglich auf der Platform bleiben und so viel Geld wie möglich generieren. Die Privatsphäre spielt dabei keine Rolle, jegliche Posts und Kommentare werden analysiert sowie jede Interaction vom User mit der App. Konsum steht im Fokus, nicht das Updaten unter Freund*innen. &quot;Social&quot; Media wurde zu Media.
                            </p>
                            <p>
                                Wir wollen das ursprüngliche Social Media wieder zurückbringen, eine Plattform nur um sich mit seinen Freund*innen zu connecten und zu updaten ohne die Gefahr von irgendwelchen News überwältigt zu werden oder durch einen Swipe dem Doomscrolling und Brainrot zu verfallen. Eine Platform um auch mal abschalten zu können ohne was wichtiges zu verfassen. Dabei spielt die Privatsphäre die wichtigste Rolle. Wir analysieren keine Posts und Kommentare oder das Nutzungsverhalten innerhalb von der App. Wir wollen das ohne Investoren schaffen, weil hier große Gewinnen nicht im Mittelpunkt stehen, und so die Entscheidung immer nur von uns getroffen wird.
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
                            <h3 className="flex gap-4 md:gap-8 text-7xl md:text-[9rem]  tracking-tighter text-white leading-none">
                                <span>The</span>
                                <span>Team</span>
                            </h3>
                        </div>
                        <div className={`value-desc flex flex-col items-center space-y-6 text-xl leading-relaxed ${openSans.className} text-gray-200 sm:text-2xl md:text-3xl lg:leading-[1.5] w-full mt-12 mb-32 opacity-0 max-w-7xl mx-auto`}>
                            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden bg-gray-800 mb-4">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/benedict.jpg" alt="Benedict Kunzmann" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=Benedict+Kunzmann&background=random'; }} />
                            </div>
                            <div>
                                <h4 className="text-3xl md:text-5xl  text-white mb-2">Benedict Kunzmann</h4>
                                <p className={`text-lg md:text-xl ${openSans.className} text-blue-500 font-semibold mb-8`}>Founder</p>
                            </div>
                            <p className={`max-w-4xl ${openSans.className}`}>
                                Hey! Ich bin Bene, bin 26 Jahre alt und lebe derzeit in Leipzig.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
