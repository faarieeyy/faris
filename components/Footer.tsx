"use client";

import React from "react";
import { ArrowUp, Heart, Sparkles } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050505] border-t border-zinc-900/80 py-10 relative z-20">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Identity & Copyright */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-bebas text-2xl font-bold tracking-widest text-white">
              MUHAMMED FARIS K
            </span>
            <p className="text-xs text-zinc-500 mt-1">
              AI/ML Engineering Student • Machine Learning Developer • Kerala, India
            </p>
            <p className="text-[11px] text-zinc-600 mt-1">
              &copy; 2026 All rights reserved.
            </p>
          </div>

          {/* Quick links & Status */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-zinc-400 font-medium">
            <a href="#hero" className="p-1 hover:text-red-500 transition-colors">
              HOME
            </a>
            <a href="#projects" className="p-1 hover:text-red-500 transition-colors">
              PROJECTS
            </a>
            <a href="#education-skills-process" className="p-1 hover:text-red-500 transition-colors">
              EXPERIENCE
            </a>
            <a href="#contact" className="p-1 hover:text-red-500 transition-colors">
              CONTACT
            </a>
          </div>

          {/* Back to top button */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-3.5 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold text-zinc-400 hover:text-white hover:border-red-600/80 hover:bg-zinc-800 transition-all"
              aria-label="Back to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}

