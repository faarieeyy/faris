"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface AIUtilityWaveProps {
  className?: string;
  isModal?: boolean;
}

export default function AIUtilityWave({ className = "", isModal = false }: AIUtilityWaveProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const handleResize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Subtle luminous red particle drift behind/around the laptop
      const particleCount = 12;
      for (let i = 0; i < particleCount; i++) {
        const t = (time * 0.15 + i / particleCount) % 1;
        const x = width * 0.15 + t * (width * 0.75);
        const y = height * 0.4 + Math.sin(t * Math.PI * 4 + i) * (height * 0.22);
        const alpha = Math.sin(t * Math.PI) * 0.6;

        ctx.beginPath();
        ctx.arc(x, y, 1.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(239, 68, 68, ${alpha})`;
        ctx.shadowColor = "rgba(239, 68, 68, 0.9)";
        ctx.shadowBlur = 8;
        ctx.fill();
      }

      ctx.shadowBlur = 0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={`relative w-full h-full overflow-hidden bg-black ${className}`}>
      {/* Background ambient red glow */}
      <div className="absolute inset-0 bg-radial from-red-600/15 via-transparent to-transparent pointer-events-none" />

      {/* Floating Levitation Wrapper for the Laptop */}
      <motion.div
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 4.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative w-full h-full flex items-center justify-center p-2"
      >
        <Image
          src="/images/projects/genai-laptop.webp"
          alt="AI Utility Applications"
          fill
          sizes={isModal ? "(max-width: 768px) 100vw, 672px" : "(max-width: 768px) 100vw, 400px"}
          className="object-contain object-center transition-transform duration-500 group-hover:scale-105"
          priority
        />
      </motion.div>

      {/* Subtle particle canvas overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10 w-full h-full pointer-events-none mix-blend-screen"
      />
    </div>
  );
}
