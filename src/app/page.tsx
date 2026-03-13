"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Lenis from "lenis";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const formatSlides = [
  {
    src: "/Back-Front-Post.png",
    alt: "Back-Front",
    name: "Back-Front",
    description: "Capture both sides of your world at the exact same moment."
  },
  {
    src: "/Story.png",
    alt: "Story",
    name: "Story",
    description: "Share quick, honest updates that disappear after 24 hours."
  },
  {
    src: "/Post.png",
    alt: "Post",
    name: "Post",
    description: "Keep your favorite lasting memories directly on your feed."
  },
];

const valuesData = [
  {
    id: "privacy",
    title: "Privacy",
    desc: "Your data is yours. We don't sell it, we don't mine it, and we don't ever use it to manipulate your feed behind the scenes.",
  },
  {
    id: "independent",
    title: "Independent",
    desc: "No corporate overlords, no billionaire owners. We are funded by our users, meaning our only incentive is to make a product you love.",
  },
  {
    id: "european",
    title: "European Solution",
    desc: "Built and hosted fully within the EU. We comply with the strictest data protection laws in the world by default, not as an afterthought.",
  }
];

const navItems = [
  { id: "formats", label: "Formats" },
  { id: "journals", label: "Journals" },
  { id: "privacy", label: "Privacy" },
  { id: "independent", label: "Independent" },
  { id: "european", label: "European" },
];

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("formats");

  const autoplayRef = useRef(
    Autoplay({ delay: 2600, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    autoplayRef.current,
  ]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
        const autoplay = emblaApi.plugins().autoplay;
        if (autoplay) {
          autoplay.reset();
        }
      }
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(); // initialize on mount
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Section Observer for the Floating Pill
  useEffect(() => {
    const ids = ["formats", "journals", "privacy", "independent", "european"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      // Trigger update when the section crosses roughly the middle of the viewport
      { rootMargin: "-30% 0px -50% 0px" }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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

    // Synchronize Lenis scrolling with GSAP's ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Add Lenis's requestAnimationFrame (raf) to GSAP's ticker
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Disable lag smoothing in GSAP to prevent any jitter between the two
    gsap.ticker.lagSmoothing(0);

    return () => {
      // Cleanup to prevent memory leaks
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollToSection = (id: string) => {
    lenisRef.current?.scrollTo(`#${id}`, { offset: -50 });
  };

  useEffect(() => {
    let ctx = gsap.context(() => { }, pageRef);

    // Ensure DOM is fully painted and next/image layout is stable
    // before initializing ScrollTrigger calculations
    const timeoutId = setTimeout(() => {
      ctx.add(() => {
        gsap.fromTo(
          ".hero-title",
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.1, ease: "power3.out" }
        );

        gsap.fromTo(
          ".hero-subtitle",
          { y: 28, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
        );

        gsap.set(".formats-copy", { y: "100vh" });
        gsap.set(".formats-carousel-wrap", {
          width: "100px", // Initial exact width controlled by GSAP
          x: 0,
          y: 0
        });

        const formatsTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".formats-scene",
            start: "top top",
            end: "bottom bottom",
            scrub: 1, // A lower scrub value might feel more responsive
          },
        });

        formatsTimeline
          .to(
            ".hero-copy",
            {
              y: "-100vh",
              ease: "none",
            },
            0
          )
          .to(
            ".formats-carousel-wrap",
            {
              width: "38vh", // End width completely takes over
              x: "-25vw",
              y: "-5vh",
              ease: "none",
            },
            0
          )
          .to(
            ".formats-copy",
            {
              y: 0,
              ease: "none",
            },
            0.18
          );

        // Journals Section Animation
        gsap.set(".journals-text", { y: "15vh" }); // Add vertical movement
        gsap.set(".journals-title-1", { x: "-15vw" }); // Slide offset to left
        gsap.set(".journals-title-2", { x: "15vw" });  // Slide offset to right
        gsap.set(".journals-desc-1", { y: "20vh" }); // Desc slide up
        gsap.set(".journals-desc-2", { y: "20vh" }); // Desc slide up
        gsap.set(".journals-image", { y: "40vh", x: "30vw", rotation: 45, transformOrigin: "center center" });

        const journalsTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".journals-scene",
            start: "top bottom", // Starts as soon as the very top of new section enters from bottom of screen
            end: "center center", // Extended the duration back to the center of the screen so the rotation takes longer
            scrub: 1,
          },
        });

        journalsTimeline
          .to(
            ".journals-text",
            {
              y: 0,
              ease: "power2.out",
            },
            0
          )
          .to(
            ".journals-title-1",
            {
              x: 0,
              ease: "power2.out",
            },
            0
          )
          .to(
            ".journals-title-2",
            {
              x: 0,
              ease: "power2.out",
            },
            0
          )
          .to(
            ".journals-desc-1",
            {
              y: 0,
              ease: "power2.out",
            },
            0
          )
          .to(
            ".journals-desc-2",
            {
              y: 0,
              ease: "power2.out",
            },
            0.1 // slight delay for a subtle staggered effect between the two descriptions
          )
          .to(
            ".journals-image",
            {
              y: 0,
              x: 0,
              rotation: 0, // Ends perfectly straight
              ease: "power2.out",
            },
            0
          );

        // Core Values Section Animation
        const valuesElements = gsap.utils.toArray(".value-content");
        valuesElements.forEach((el, i) => {
          const isRight = i % 2 === 0;
          const titleWrapper = (el as Element).querySelector(".value-title-wrap");

          // 1. Move Title from inside to outside
          if (titleWrapper) {
            gsap.fromTo(
              titleWrapper,
              { x: isRight ? "-5vw" : "5vw" }, // Start 'inside'
              {
                x: 0, // Move 'outside' to its real aligned position
                ease: "power2.out",
                scrollTrigger: {
                  trigger: el as Element,
                  start: "top 95%",
                  end: "center 45%",
                  scrub: 1,
                },
              }
            );
          }

          // 2. Fill text effect using clip-path
          const fillEl = (el as Element).querySelector(".title-fill");
          if (fillEl) {
            gsap.fromTo(
              fillEl,
              // Expanded vertical padding (-50%) on the inset so text descenders (like 'y') don't get cut off!
              { clipPath: isRight ? "inset(-50% -50% -50% 100%)" : "inset(-50% 100% -50% -50%)" },
              {
                clipPath: "inset(-50% -50% -50% -50%)",
                ease: "none",
                scrollTrigger: {
                  trigger: el as Element,
                  start: "top 85%",
                  end: "center 45%",
                  scrub: 1,
                },
              }
            );
          }

          // 3. Subtitle slide up
          const subtitle = (el as Element).querySelector(".value-desc");
          if (subtitle) {
            gsap.fromTo(
              subtitle,
              { y: 60, autoAlpha: 0 },
              {
                y: 0,
                autoAlpha: 1,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: el as Element,
                  start: "top 45%", // Starts appearing right as the title finishes its fill
                  end: "top 25%",
                  scrub: 1,
                },
              }
            );
          }
        });

      });
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      ctx.revert();
    };
  }, []);

  return (
    <main ref={pageRef} className="bg-[#0b1015] text-white">
      {/* Floating Pill Navigation */}
      <div className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 sm:gap-2 rounded-full border border-white/10 bg-[#0b1015]/70 px-2 py-2 backdrop-blur-xl shadow-2xl">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium transition-colors duration-300 ${isActive ? "text-black" : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activePillIndicator"
                  className="absolute inset-0 rounded-full bg-white shadow-sm"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          );
        })}
      </div>

      <section id="formats" className="formats-scene relative min-h-[160vh] overflow-x-clip px-6 md:px-12">
        <div className="sticky top-0 min-h-screen">
          <div className="relative mx-auto min-h-screen w-full max-w-7xl">
            <div className="hero-copy absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center">
              <h1 className="hero-title text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem]">
                Social Media
                <span className="block">How it should be</span>
              </h1>
              <p className="hero-subtitle mt-6 text-base text-gray-400 sm:text-xl md:text-2xl">
                Friends focused. No Doomscrolling. Private
              </p>
            </div>

            <div className="pointer-events-none absolute bottom-20 left-0 flex w-full justify-center px-4 md:bottom-22">
              <div className="formats-carousel-wrap pointer-events-auto flex flex-col items-center">
                <div
                  className="carousel-inner w-full overflow-hidden cursor-grab active:cursor-grabbing"
                  ref={emblaRef}
                >
                  <div className="flex -ml-4">
                    {formatSlides.map((slide) => (
                      <div key={slide.alt} className="min-w-0 flex-[0_0_100%] pl-4">
                        <div className="relative aspect-[9/16] w-full max-w-full [transform:translateZ(0)]">
                          <Image
                            src={slide.src}
                            alt={slide.alt}
                            fill
                            draggable={false}
                            sizes="(min-width: 768px) 50vw, 80vw"
                            className="object-contain select-none"
                            priority={slide.alt === "Back-Front"}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 flex items-center justify-center">
              <div className="formats-copy w-full px-8 lg:px-12 ">
                <h2 className="mb-10 text-4xl font-semibold tracking-tight whitespace-nowrap sm:text-5xl md:text-7xl text-left">
                  All formats you need
                </h2>

                <div className="pointer-events-auto flex flex-col gap-6 text-left w-full">
                  {formatSlides.map((slide, index) => {
                    const isActive = selectedIndex === index;
                    return (
                      <div
                        key={slide.alt}
                        onClick={() => scrollTo(index)}
                        className={`cursor-pointer transition-all duration-300 ease-out ${isActive
                          ? "opacity-100 scale-100"
                          : "opacity-40 scale-95 hover:opacity-70"
                          }`}
                        style={{ transformOrigin: "left center" }}
                      >
                        <h3
                          className={`font-bold transition-all duration-300 ${isActive ? "text-white text-3xl sm:text-4xl" : "text-gray-300 text-xl sm:text-2xl"
                            }`}
                        >
                          {slide.name}
                        </h3>
                        <p
                          className={`font-regular mt-2 transition-all duration-300 ${isActive ? "text-gray-200 text-base sm:text-lg" : "text-gray-500 text-sm sm:text-base"
                            }`}
                        >
                          {slide.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared Journals Section */}
      <section id="journals" className="journals-scene relative flex min-h-screen items-center overflow-x-clip px-4 py-32 md:px-8 mt-[-10vh] mb-[10vh]">
        <div className="mx-auto flex w-full max-w-[90rem] flex-col items-center justify-between gap-12 md:flex-row">

          <div className="journals-text w-full max-w-3xl text-left md:w-1/2 md:pl-4 lg:pl-8">
            <h2 className="text-8xl flex flex-col font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem] overflow-visible">
              <span className="journals-title-1 block">Shared</span>
              <span className="journals-title-2 block">Journals</span>
            </h2>

            <div className="mt-10 flex max-w-xl flex-col gap-8">
              <div className="journals-desc-1">
                <h3 className="mb-2 text-2xl font-semibold text-white sm:text-3xl">Journals</h3>
                <p className="text-lg leading-relaxed text-gray-400 sm:text-xl">
                  All posts you upload each day are bundled together into a journal. Your memories are displayed beautifully on a single page, and you can seamlessly combine multiple journals into one larger collection.
                </p>
              </div>
              <div className="journals-desc-2">
                <h3 className="mb-2 text-2xl font-semibold text-white sm:text-3xl">Shared</h3>
                <p className="text-lg leading-relaxed text-gray-400 sm:text-xl">
                  Your friends are always included—visible on the cover and under the images. When a friend tags you, you can easily append their posts to your own, bundling everyone's perspectives together.
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex w-full justify-center md:w-1/2 md:justify-end pr-0 md:pr-12 lg:pr-24">
            <div className="journals-image relative aspect-[864/1052] w-full max-w-[260px] lg:max-w-[320px]">
              <Image
                src="/Italien.png"
                alt="Italian Shared Journal"
                fill
                className="rounded-2xl border border-white/15 object-cover shadow-2xl"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Core Values Section */}
      <section className="values-scene relative bg-[#0b1015] overflow-hidden pb-48 pt-12 md:pb-64 md:pt-12 mt-[-10vh]">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-40 px-6 md:gap-80 md:px-12">
          {valuesData.map((val, i) => {
            const isRight = i % 2 === 0;
            return (
              <div
                key={val.id}
                id={val.id}
                className={`value-content flex w-full flex-col ${isRight ? "items-end text-right" : "items-start text-left"}`}
              >
                <div className="max-w-[100%] md:max-w-5xl">
                  <div className="value-title-wrap inline-block">
                    <div className="relative inline-block mb-6">
                      {/* Dark/transparent base text that is always visible */}
                      <h3 className="text-6xl font-semibold tracking-tighter text-white/10 sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[11rem] leading-[0.85]">
                        {val.title}
                      </h3>
                      {/* Bright white overlay text that fills in */}
                      <h3
                        className="title-fill absolute left-0 top-0 h-full w-full text-6xl font-semibold tracking-tighter text-white sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[11rem] leading-[0.85]"
                        aria-hidden="true"
                      >
                        {val.title}
                      </h3>
                    </div>
                  </div>
                  <p className="value-desc text-xl leading-relaxed text-gray-400 sm:text-2xl md:text-3xl lg:leading-[1.5]">
                    {val.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </main>
  );
}
