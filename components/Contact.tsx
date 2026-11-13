"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Sparkles,
  ArrowRight,
  Copy,
  Check,
  Send,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import ContactVisual from "@/components/ContactVisual";
import ConnectNeuralWave from "@/components/ConnectNeuralWave";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "muhammedfaris710@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-transparent relative overflow-hidden z-20">
      {/* Background Red Ambient Glow */}
      <div className="absolute bottom-0 right-1/4 w-[350px] sm:w-[450px] h-[250px] sm:h-[350px] bg-red-600/12 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="rounded-2xl sm:rounded-3xl bg-[#08080a] border border-zinc-900/90 p-5 sm:p-10 lg:p-14 xl:p-16 relative overflow-hidden shadow-2xl shadow-red-950/20">
          
          {/* Full-Bleed 3D Neural Particle Wave spanning the entire Connect card */}
          <ConnectNeuralWave />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Content Column (7 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 flex flex-col justify-between"
            >
              <div>
                {/* Heading with Red Sparkle */}
                <div className="flex items-center gap-2.5 sm:gap-3 mb-3">
                  <h2 className="font-bebas text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-wide uppercase leading-none">
                    LET&apos;S CONNECT
                  </h2>
                  <Sparkles className="w-5 h-5 sm:w-8 sm:h-8 text-red-500 animate-pulse shrink-0" />
                </div>

                {/* Subtitle */}
                <p className="text-zinc-300 text-xs sm:text-base max-w-lg mb-6 sm:mb-8 leading-relaxed font-normal">
                  Open to internship opportunities, collaborations, and impactful AI/ML projects. Feel free to reach out directly.
                </p>

                {/* Action CTA Buttons - Full Width on Mobile */}
                <div className="mb-8 sm:mb-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <motion.a
                    href="mailto:muhammedfaris710@gmail.com?subject=Internship%20Opportunity%20-%20Muhammed%20Faris%20K"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="relative inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-red-600 hover:bg-red-700 active:bg-red-700 text-white text-xs sm:text-sm font-extrabold tracking-widest uppercase transition-all duration-300 shadow-xl shadow-red-950/70 hover:shadow-red-600/50 group overflow-hidden w-full sm:w-auto"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                    <span>AVAILABLE FOR INTERNSHIP</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform shrink-0" />
                  </motion.a>

                  <motion.button
                    onClick={handleCopyEmail}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-zinc-950/60 backdrop-blur-md hover:bg-zinc-900 border border-zinc-800 hover:border-red-600/60 text-xs font-bold text-zinc-300 hover:text-white tracking-wider transition-all shadow-md cursor-pointer w-full sm:w-auto active:bg-zinc-900"
                    title="Copy Email Address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-400 shrink-0" />
                        <span className="text-green-400">COPIED TO CLIPBOARD</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                        <span>COPY EMAIL</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </div>

              {/* Contact List */}
              <div className="space-y-2.5 sm:space-y-3 pt-5 sm:pt-6 border-t border-zinc-900/90">
                {/* Email */}
                <motion.a
                  href="mailto:muhammedfaris710@gmail.com"
                  whileHover={{ x: 6 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-2 sm:p-2.5 rounded-xl bg-zinc-950/30 hover:bg-zinc-900/40 border border-transparent hover:border-zinc-800 flex items-center gap-3 text-zinc-300 hover:text-red-400 transition-all group overflow-hidden"
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-red-600 group-hover:border-red-500 group-hover:shadow-[0_0_10px_rgba(239,68,68,0.6)] transition-all shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium tracking-wide truncate">
                    muhammedfaris710@gmail.com
                  </span>
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                  href="https://www.linkedin.com/in/muhdfarisk"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 6 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-2 sm:p-2.5 rounded-xl bg-zinc-950/30 hover:bg-zinc-900/40 border border-transparent hover:border-zinc-800 flex items-center gap-3 text-zinc-300 hover:text-red-400 transition-all group overflow-hidden"
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-red-600 group-hover:border-red-500 group-hover:shadow-[0_0_10px_rgba(239,68,68,0.6)] transition-all shrink-0">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium tracking-wide truncate">
                    linkedin.com/in/muhdfarisk
                  </span>
                </motion.a>

                {/* GitHub */}
                <motion.a
                  href="https://github.com/gitfaarieeyy"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 6 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-2 sm:p-2.5 rounded-xl bg-zinc-950/30 hover:bg-zinc-900/40 border border-transparent hover:border-zinc-800 flex items-center gap-3 text-zinc-300 hover:text-red-400 transition-all group overflow-hidden"
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-red-600 group-hover:border-red-500 group-hover:shadow-[0_0_10px_rgba(239,68,68,0.6)] transition-all shrink-0">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium tracking-wide truncate">
                    github.com/gitfaarieeyy
                  </span>
                </motion.a>

                {/* Location */}
                <div className="p-2 sm:p-2.5 rounded-xl flex items-center gap-3 text-zinc-400">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-red-500 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium tracking-wide">
                    Kerala, India
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Visual Column: Floating Laptop with Wave & Glassy Structures (5 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative flex items-center justify-center mt-4 lg:mt-0"
            >
              <ContactVisual />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

