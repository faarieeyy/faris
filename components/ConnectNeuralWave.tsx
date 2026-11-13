"use client";

import React, { useEffect, useRef } from "react";

export default function ConnectNeuralWave() {
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
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Wave configuration: Layered continuous fluid ribbons with glowing particles
    const ribbons = [
      {
        baseYRatio: 0.62,
        amplitude: 38,
        frequency: 0.0045,
        speed: 1.1,
        color: "rgba(185, 28, 28, 0.35)",
        lineWidth: 2.0,
        glow: 8,
      },
      {
        baseYRatio: 0.68,
        amplitude: 52,
        frequency: 0.0035,
        speed: 0.85,
        color: "rgba(220, 38, 38, 0.65)",
        lineWidth: 2.8,
        glow: 14,
      },
      {
        baseYRatio: 0.74,
        amplitude: 44,
        frequency: 0.005,
        speed: 1.35,
        color: "rgba(239, 68, 68, 0.85)",
        lineWidth: 3.2,
        glow: 18,
      },
      {
        baseYRatio: 0.8,
        amplitude: 34,
        frequency: 0.006,
        speed: 1.0,
        color: "rgba(255, 120, 120, 0.6)",
        lineWidth: 1.8,
        glow: 12,
      },
    ];

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Draw each smooth wave ribbon
      ribbons.forEach((ribbon, rIdx) => {
        const baseY = height * ribbon.baseYRatio;
        ctx.beginPath();
        ctx.lineWidth = ribbon.lineWidth;
        ctx.strokeStyle = ribbon.color;
        ctx.shadowColor = "rgba(239, 68, 68, 0.9)";
        ctx.shadowBlur = ribbon.glow;

        const step = 6;
        let started = false;

        for (let x = 0; x <= width; x += step) {
          // Smooth horizontal fade envelope: soft at edges, peaks in middle
          const progress = x / width;
          const envelope = Math.sin(progress * Math.PI);

          const y =
            baseY +
            Math.sin(x * ribbon.frequency + time * ribbon.speed + rIdx * 1.2) *
              ribbon.amplitude *
              envelope +
            Math.cos(x * ribbon.frequency * 0.5 - time * 0.7) *
              (ribbon.amplitude * 0.35) *
              envelope;

          if (!started) {
            ctx.moveTo(x, y);
            started = true;
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();

        // Shimmering luminous particle beads along each ribbon
        const particleCount = 7;
        for (let p = 0; p < particleCount; p++) {
          const t = ((time * 0.08 * ribbon.speed + p / particleCount) % 1);
          const px = t * width;
          const envelope = Math.sin(t * Math.PI);

          const py =
            baseY +
            Math.sin(px * ribbon.frequency + time * ribbon.speed + rIdx * 1.2) *
              ribbon.amplitude *
              envelope +
            Math.cos(px * ribbon.frequency * 0.5 - time * 0.7) *
              (ribbon.amplitude * 0.35) *
              envelope;

          ctx.beginPath();
          ctx.arc(px, py, 2.2, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255, 200, 200, 0.95)";
          ctx.shadowColor = "rgba(255, 80, 80, 1)";
          ctx.shadowBlur = 10;
          ctx.fill();
        }
      });

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
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background canvas for smooth fluid glowing wave */}
      <canvas
        ref={canvasRef}
        className="w-full h-full mix-blend-screen opacity-75"
      />
      {/* Subtle edge vignetting so the wave seamlessly blends into the card */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#08080a] via-transparent to-[#08080a]/80 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-[#08080a]/60 pointer-events-none" />
    </div>
  );
}
