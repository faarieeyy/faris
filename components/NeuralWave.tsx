"use client";

import React, { useEffect, useRef } from "react";

interface NeuralWaveProps {
  className?: string;
}

export default function NeuralWave({ className = "" }: NeuralWaveProps) {
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

    // Wave grid parameters
    const COLS = 55;
    const ROWS = 28;
    let time = 0;

    const render = () => {
      time += 0.022;
      ctx.clearRect(0, 0, width, height);

      // Camera / Projection Settings
      const centerX = width * 0.5;
      const centerY = height * 0.58;
      const spacingX = (width * 1.15) / COLS;
      const spacingY = (height * 0.75) / ROWS;

      // Draw from back to front for correct depth overlap
      for (let r = 0; r < ROWS; r++) {
        const v = (r / (ROWS - 1)) - 0.5; // -0.5 to 0.5 (depth)
        const depthFactor = 0.65 + (r / ROWS) * 0.6; // depth perspective scaling

        for (let c = 0; c < COLS; c++) {
          const u = (c / (COLS - 1)) - 0.5; // -0.5 to 0.5 (horizontal)

          // Undulating wave elevation formula matching reference image
          // Deep glowing central trough + rolling crests
          const wave1 = Math.sin(u * 5.5 + time * 1.4) * 26;
          const wave2 = Math.cos(v * 4.2 + time * 1.1) * 18;
          const wave3 = Math.sin((u * 3 - v * 2) * 3 + time * 1.8) * 14;
          
          // Central dip / valley
          const centerValley = -Math.exp(-u * u * 10) * 34 * Math.cos(time * 1.2 + v * 2);
          
          // Crest peaks on sides
          const sidePeaks = Math.exp(-(u - 0.35) * (u - 0.35) * 8) * 28 * Math.sin(time + 1);
          
          const elevation = (wave1 + wave2 + wave3 + centerValley + sidePeaks) * depthFactor;

          // 3D Perspective Projection
          const posX = centerX + u * width * 1.05;
          const posY = centerY + v * height * 0.55 - elevation;

          // Normalized elevation factor for coloring: 0 (deepest valley) to 1 (highest crest)
          const normElev = (elevation + 45) / 90;

          // Determine color & glow based on position & elevation
          // Center valley: intense crimson neon red
          // Upper crests: luminous white/silver dots
          const distFromCenter = Math.abs(u);
          const isValley = elevation < -5 || (distFromCenter < 0.25 && elevation < 15);

          ctx.beginPath();

          if (isValley) {
            // Neon crimson red valley particles
            const redIntensity = Math.min(255, 200 + Math.floor((1 - distFromCenter) * 55));
            const alpha = 0.55 + Math.sin(time * 2 + u * 4) * 0.3;
            ctx.fillStyle = `rgba(${redIntensity}, 25, 35, ${alpha.toFixed(2)})`;
            ctx.shadowColor = "rgba(239, 68, 68, 0.8)";
            ctx.shadowBlur = 8 * depthFactor;
          } else if (normElev > 0.55) {
            // High crest: crisp white/silver dots
            const alpha = Math.min(1, 0.45 + normElev * 0.55);
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha.toFixed(2)})`;
            ctx.shadowColor = "rgba(255, 255, 255, 0.4)";
            ctx.shadowBlur = 4 * depthFactor;
          } else {
            // Transition zone: subtle charcoal / dim red
            ctx.fillStyle = `rgba(160, 160, 175, ${(0.35 * depthFactor).toFixed(2)})`;
            ctx.shadowBlur = 0;
          }

          // Point radius with depth of field
          const radius = Math.max(0.7, (1.2 + depthFactor * 0.9 + (isValley ? 0.4 : 0)));
          ctx.arc(posX, posY, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Reset shadow for next frame
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
    <div className={`relative w-full h-full overflow-hidden bg-[#050505] ${className}`}>
      {/* Background ambient radial red glow for extra cinematic depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_65%,rgba(220,38,38,0.22),transparent_70%)] pointer-events-none" />
      
      <canvas
        ref={canvasRef}
        className="relative z-10 w-full h-full block"
      />

      {/* Subtle top/bottom edge gradient fades into the card */}
      <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-[#09090b] to-transparent pointer-events-none z-20" />
      <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-[#09090b] to-transparent pointer-events-none z-20" />
    </div>
  );
}

