"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "ABOUT", href: "#hero" },
    { name: "PROJECTS", href: "#projects" },
    { name: "EDUCATION", href: "#education-skills-process" },
    { name: "SKILLS", href: "#education-skills-process" },
    { name: "PROCESS", href: "#education-skills-process" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/95 backdrop-blur-md border-b border-zinc-900/80 py-3 shadow-2xl shadow-black/90"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between">
          {/* Left: Identity / Title matching reference */}
          <a
            href="#hero"
            className="group flex flex-col focus:outline-none"
          >
            <span className="text-xs sm:text-sm md:text-base font-extrabold tracking-[0.16em] sm:tracking-[0.22em] text-white group-hover:text-red-500 transition-colors uppercase font-bebas">
              MUHAMMED FARIS K
            </span>
            <span className="text-[8.5px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.28em] text-red-500 font-bold uppercase">
              AI/ML ENGINEERING STUDENT
            </span>
          </a>

          {/* Center: Nav Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold tracking-[0.2em] text-zinc-400 hover:text-white transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right: Availability Indicator matching reference */}
          <div className="hidden sm:flex items-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-red-900/60 bg-red-950/20 text-[11px] font-bold tracking-wider text-zinc-200 hover:text-white hover:border-red-600 hover:bg-red-900/40 transition-all duration-300 shadow-sm shadow-red-950/40 group"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span>AVAILABLE FOR INTERNSHIP</span>
              <Sparkles className="w-3 h-3 text-red-500 group-hover:rotate-12 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button - Accessible 44px touch target */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-w-[40px] min-h-[40px] flex items-center justify-center p-2 text-zinc-300 hover:text-white active:scale-95 focus:outline-none rounded-lg bg-zinc-900/80 border border-zinc-800 transition-all"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-red-500" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-[#09090b]/98 border-b border-zinc-800/90 backdrop-blur-2xl px-4 pt-3 pb-6 shadow-2xl shadow-black"
          >
            <div className="flex flex-col space-y-2 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 text-xs font-bold tracking-widest text-zinc-300 hover:text-red-500 active:bg-zinc-900/80 rounded-lg transition-colors uppercase flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-red-500" />
                </a>
              ))}
              <div className="pt-3 border-t border-zinc-900">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-red-600/20 active:bg-red-600 border border-red-600/50 text-xs font-bold tracking-wider text-red-400 active:text-white transition-all shadow-lg shadow-red-950/40"
                >
                  <span className="h-2 w-2 rounded-full bg-red-500"></span>
                  AVAILABLE FOR INTERNSHIP
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
