"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Sparkles, ArrowRight, Mail, ChevronDown } from "lucide-react";
import Counter from "@/components/Counter";

export default function Hero() {
  const nameWords = ["MUHAMMED", "FARIS", "K"];
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Portrait scroll-in reveal states
  const [isRevealed, setIsRevealed] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const isRevealedRef = useRef(false);
  const isAnimatingRef = useRef(false);

  isRevealedRef.current = isRevealed;
  isAnimatingRef.current = isAnimating;

  const triggerReveal = useCallback(() => {
    if (isRevealedRef.current || isAnimatingRef.current) return;
    setIsAnimating(true);
    isAnimatingRef.current = true;

    // After the entrance animation completes, lock it in as permanently revealed
    setTimeout(() => {
      setIsRevealed(true);
      setIsAnimating(false);
      isRevealedRef.current = true;
      isAnimatingRef.current = false;
    }, 2100);
  }, []);

  // Intercept the first scroll action when the page is fresh/refreshed
  useEffect(() => {
    // If the browser restored scroll position further down, reveal immediately
    if (window.scrollY > 40) {
      setIsRevealed(true);
      isRevealedRef.current = true;
      return;
    }

    const handleWheel = (e: WheelEvent) => {
      if (!isRevealedRef.current) {
        if (e.deltaY > 0) {
          // User is scrolling down
          e.preventDefault();
          triggerReveal();
        } else if (isAnimatingRef.current) {
          e.preventDefault();
        }
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isRevealedRef.current) {
        const currentY = e.touches[0].clientY;
        const deltaY = touchStartY - currentY;
        if (deltaY > 8) {
          // User swiping up (scrolling down)
          if (e.cancelable) e.preventDefault();
          triggerReveal();
        } else if (isAnimatingRef.current) {
          if (e.cancelable) e.preventDefault();
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isRevealedRef.current) {
        if (["ArrowDown", "PageDown", "Space"].includes(e.code)) {
          e.preventDefault();
          triggerReveal();
        }
      }
    };

    const handleScroll = () => {
      if (!isRevealedRef.current) {
        if (window.scrollY > 8) {
          window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
          triggerReveal();
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [triggerReveal]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width - 0.5) * 28;
    const y = ((clientY - top) / height - 0.5) * 14;
    setMouseOffset({ x, y });
  };

  const handleExploreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isRevealed) {
      e.preventDefault();
      triggerReveal();
      setTimeout(() => {
        const el = document.getElementById("projects");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 2200);
    }
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-20 sm:pt-24 pb-8 sm:pb-12 overflow-hidden bg-[#050505]"
    >
      {/* Background Ambient Red Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[850px] lg:w-[1100px] h-[350px] sm:h-[550px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 left-1/6 w-[350px] h-[350px] bg-red-800/10 rounded-full blur-[110px] pointer-events-none -z-10" />

      {/* Massive Full-Width Background Typography: FARIS (Razor-Sharp, Clean Vector Typography matching reference) */}
      <motion.div
        animate={{
          x: -mouseOffset.x,
          y: -mouseOffset.y,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 25 }}
        className="absolute top-[12%] sm:top-[10%] lg:top-[11%] left-0 right-0 w-full flex items-center justify-center pointer-events-none select-none overflow-hidden z-0 px-2"
      >
        <div className="relative flex items-center justify-center w-full">
          {/* Razor-sharp, Clean Editorial Typography with rich red-to-dark vertical gradient */}
          <h1
            className="font-bebas text-[28vw] xs:text-[30vw] sm:text-[28vw] lg:text-[26vw] font-black leading-none tracking-[0.12em] sm:tracking-[0.14em] text-center w-full whitespace-nowrap select-none"
            style={{
              background: "linear-gradient(180deg, #d8161d 0%, #b30e14 32%, #550407 72%, #050505 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            FARIS
          </h1>

          {/* Atmospheric Dark Bottom Shadow Veil */}
          <div className="absolute inset-x-0 bottom-0 h-24 sm:h-40 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent pointer-events-none" />
        </div>
      </motion.div>

      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Identity, Animated Headline & Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-4 z-20 flex flex-col justify-center order-2 lg:order-1 pt-2 lg:pt-0"
          >
            {/* Script Greeting */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex items-center gap-2 mb-1"
            >
              <span className="font-caveat text-2xl sm:text-3xl lg:text-4xl text-zinc-300 font-semibold italic tracking-wide">
                Hello, I&apos;m
              </span>
            </motion.div>

            {/* Staggered Animated Name Headline */}
            <div className="overflow-hidden mb-3">
              <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-wide leading-[0.92]">
                {nameWords.map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.3 + i * 0.12,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block mr-3 hover:text-red-500 transition-colors duration-300"
                  >
                    {word}
                  </motion.span>
                ))}
              </h2>
            </div>

            {/* Professional Subtitle */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mb-4"
            >
              <p className="text-xs sm:text-sm font-extrabold tracking-[0.18em] text-red-500 uppercase leading-snug">
                AI/ML ENGINEERING STUDENT <br className="hidden sm:block" />&amp; ML DEVELOPER
              </p>
            </motion.div>

            {/* Short Bio */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="text-xs sm:text-sm lg:text-base leading-relaxed text-zinc-300 max-w-lg mb-6 font-normal"
            >
              Final-year AIML engineering student with a strong foundation in Machine Learning, Deep Learning, Computer Vision and Generative AI. Passionate about building real-world, impactful AI solutions.
            </motion.p>

            {/* Location with Glowing Icon */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="flex items-center gap-2 text-zinc-300 text-xs sm:text-sm mb-6"
            >
              <div className="w-6 h-6 rounded-full bg-red-950/40 border border-red-800/60 flex items-center justify-center text-red-500 shadow-[0_0_8px_rgba(239,68,68,0.4)]">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
              </div>
              <span className="font-medium tracking-wide">Kerala, India</span>
            </motion.div>

            {/* Glassy Interactive Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="flex flex-wrap items-center gap-3"
            >
              <motion.a
                href="#projects"
                onClick={handleExploreClick}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="relative inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 shadow-xl shadow-red-950/70 hover:shadow-red-600/50 group overflow-hidden"
              >
                {/* Specular glass reflection shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                <span>EXPLORE WORK</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="relative inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-800 hover:border-red-600/70 bg-[#0d0d10]/80 backdrop-blur-md hover:bg-zinc-900 text-zinc-300 hover:text-white text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 shadow-md group overflow-hidden"
              >
                <Mail className="w-3.5 h-3.5 text-red-500 group-hover:rotate-12 transition-transform" />
                <span>LET&apos;S TALK</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Center Column: Faris's Portrait Photograph with Scroll-Triggered Floating Entrance */}
          <div className="lg:col-span-4 z-10 flex items-end justify-center relative order-1 lg:order-2 self-end pt-2 sm:pt-4 min-h-[320px] sm:min-h-[400px] lg:min-h-[460px]">
            {/* Entrance Motion Layer: Hidden on initial open, floats and fades up from below upon scrolling */}
            <motion.div
              initial={false}
              animate={
                isAnimating || isRevealed
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 150 }
              }
              transition={{
                duration: 2.2,
                ease: [0.19, 1, 0.22, 1],
              }}
              className="relative w-full flex justify-center"
            >
              {/* Pure Floating Levitation Wrapper (Constant scale, gentle vertical levitation once arrived) */}
              <motion.div
                animate={
                  isRevealed
                    ? { y: [0, -8, 0] }
                    : { y: 0 }
                }
                transition={{
                  duration: 4.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full max-w-[280px] xs:max-w-[310px] sm:max-w-[360px] lg:max-w-[410px] xl:max-w-[440px] aspect-[635/860] select-none pointer-events-none"
              >
                {/* Backlight halo positioned lower down behind shoulders/torso only (clear from hair) */}
                <div className="absolute inset-x-8 top-28 sm:top-32 bottom-6 bg-gradient-to-t from-red-600/35 via-red-700/15 to-transparent rounded-full blur-2xl pointer-events-none -z-10" />

                {/* Exact Cutout Portrait with Constant Fixed Scale */}
                <div className="relative w-full h-full transform-gpu">
                  <Image
                    src="/images/faris-portrait-cutout.webp"
                    alt="Muhammed Faris K - Machine Learning Developer"
                    fill
                    priority
                    unoptimized
                    sizes="(max-width: 640px) 310px, (max-width: 1024px) 360px, 440px"
                    className="object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)]"
                  />
                </div>

                {/* Seamless gradient mask at the bottom edge */}
                <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent pointer-events-none" />
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Statement & Animated Stats with Counting Numbers (Raw, Editorial Layout) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="lg:col-span-4 z-20 flex flex-col justify-between order-3 lg:pl-8 xl:pl-12"
          >
            {/* Statement Box - Raw */}
            <div className="mb-8 lg:mb-12 max-w-sm">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-red-500 shrink-0 mt-0.5 animate-pulse" />
                <p className="text-xs sm:text-sm lg:text-base text-zinc-300 font-medium leading-relaxed">
                  Building AI solutions that connect technology with real-world impact.
                </p>
              </div>
            </div>

            {/* Academic & Project Stats - Responsive Editorial Layout */}
            <div className="grid grid-cols-3 gap-3 pt-5 border-t border-zinc-900/80 lg:border-t-0 lg:pt-0 lg:space-y-7 lg:block">
              {/* Stat 1: CGPA */}
              <div className="flex flex-col lg:flex-row items-start lg:items-baseline gap-1 lg:gap-4 lg:border-b lg:border-zinc-900/80 lg:pb-4">
                <span className="font-bebas text-4xl sm:text-5xl xl:text-7xl font-bold text-red-500 leading-none tracking-tight drop-shadow-[0_0_12px_rgba(239,68,68,0.4)]">
                  <Counter value={6.9} decimals={1} duration={1.6} />
                </span>
                <div>
                  <div className="text-[11px] sm:text-xs lg:text-sm font-bold text-white tracking-wider uppercase">
                    CGPA
                  </div>
                  <div className="text-[10px] sm:text-xs text-zinc-400 tracking-wider font-mono">
                    (BE AIML)
                  </div>
                </div>
              </div>

              {/* Stat 2: Projects */}
              <div className="flex flex-col lg:flex-row items-start lg:items-baseline gap-1 lg:gap-4 lg:border-b lg:border-zinc-900/80 lg:pb-4">
                <span className="font-bebas text-4xl sm:text-5xl xl:text-7xl font-bold text-red-500 leading-none tracking-tight drop-shadow-[0_0_12px_rgba(239,68,68,0.4)]">
                  <Counter value={3} prefix="+" duration={1.4} />
                </span>
                <div>
                  <div className="text-[11px] sm:text-xs lg:text-sm font-bold text-white tracking-wider uppercase">
                    ACADEMIC
                  </div>
                  <div className="text-[10px] sm:text-xs text-zinc-400 tracking-wider font-mono">
                    PROJECTS
                  </div>
                </div>
              </div>

              {/* Stat 3: Hackathon */}
              <div className="flex flex-col lg:flex-row items-start lg:items-baseline gap-1 lg:gap-4">
                <span className="font-bebas text-4xl sm:text-5xl xl:text-7xl font-bold text-red-500 leading-none tracking-tight drop-shadow-[0_0_12px_rgba(239,68,68,0.4)]">
                  <Counter value={1} duration={1.2} />
                </span>
                <div>
                  <div className="text-[11px] sm:text-xs lg:text-sm font-bold text-white tracking-wider uppercase">
                    NATIONAL
                  </div>
                  <div className="text-[10px] sm:text-xs text-zinc-400 tracking-wider font-mono">
                    HACKATHON
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Sleek Scroll Prompt: visible initially before scroll, fades out once revealed */}
      <AnimatePresence>
        {!isRevealed && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10, transition: { duration: 0.3 } }}
            onClick={triggerReveal}
            onTouchEnd={triggerReveal}
            className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1.5 cursor-pointer group select-none p-2"
          >
            <span className="text-[9.5px] sm:text-[10px] tracking-[0.25em] uppercase font-bold text-zinc-400 group-hover:text-red-400 transition-colors">
              <span className="inline sm:hidden">TAP OR SWIPE TO REVEAL</span>
              <span className="hidden sm:inline">SCROLL TO REVEAL</span>
            </span>
            <div className="w-5 h-8 rounded-full border border-zinc-700/80 group-hover:border-red-500/80 flex items-start justify-center p-1 transition-colors">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
