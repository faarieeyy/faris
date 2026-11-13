"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactVisual() {
  return (
    <div className="relative w-full aspect-[4/3] max-w-[600px] flex items-center justify-center z-20">
      {/* Soft Ambient Red Backlight Glow */}
      <div className="absolute inset-0 bg-red-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Circled Red Light (Glowing Neon Ground Portal Ring) */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 w-[82%] max-w-[460px] h-11 sm:h-14 flex items-center justify-center pointer-events-none z-10">
        {/* Soft Ambient Floor Reflection Glow */}
        <motion.div
          animate={{
            opacity: [0.55, 0.85, 0.55],
            scale: [0.97, 1.03, 0.97],
          }}
          transition={{
            duration: 4.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-[100%] bg-red-600/35 blur-2xl"
        />

        {/* Crisp Glowing Neon Circle / Ellipse Ring */}
        <motion.div
          animate={{
            opacity: [0.85, 1, 0.85],
            scale: [0.98, 1.02, 0.98],
          }}
          transition={{
            duration: 3.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-full h-full rounded-[100%] bg-gradient-to-r from-red-600/20 via-red-500/70 to-red-600/20 border-2 border-red-500 shadow-[0_0_35px_rgba(239,68,68,0.95),inset_0_0_18px_rgba(239,68,68,0.85)]"
        >
          {/* Inner Radiant Core Highlight */}
          <div className="absolute inset-1 rounded-[100%] bg-gradient-to-r from-red-500/10 via-red-400/40 to-red-500/10 blur-[2px]" />
        </motion.div>
      </div>

      {/* Floating Laptop Levitating Smoothly Above the Circled Red Light */}
      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 4.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-20 w-full h-full flex items-center justify-center pb-6 sm:pb-8 select-none pointer-events-none"
      >
        <div className="relative w-[94%] h-[84%]">
          <Image
            src="/images/contact-laptop.webp"
            alt="Muhammed Faris K - AI Machine Learning Workspace"
            fill
            sizes="(max-width: 1024px) 100vw, 600px"
            className="object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.95)] filter contrast-[1.04] brightness-105"
            priority
          />
        </div>
      </motion.div>
    </div>
  );
}
