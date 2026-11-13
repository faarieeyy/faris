"use client";

import React from "react";

export default function BackgroundKineticLoop() {
  const track1Words =
    "COMPUTER VISION • DEEP LEARNING • NEURAL NETWORKS • GENERATIVE AI • TENSORFLOW • MEDIAPIPE • PYTORCH • KERAS • OPENCV • ";
  const track2Words =
    "MACHINE LEARNING DEVELOPER • DATA SCIENCE • NLP • MODEL DEPLOYMENT • SYSTEM ARCHITECTURE • PYTHON • ALGORITHMS • ";
  const track3Words =
    "KATHAKALI RECOGNITION • INTELLIGENT AGENTS • CLEAN ARCHITECTURE • AVAILABLE FOR INTERNSHIP • IMPACTFUL AI SOLUTIONS • ";

  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
      {/* Track 1: Upper Track (behind Projects section) */}
      <div className="absolute top-[8%] left-0 right-0 overflow-hidden opacity-90">
        <div className="flex w-max animate-marquee-left">
          <div className="flex shrink-0 items-center whitespace-nowrap text-4xl xs:text-5xl sm:text-7xl lg:text-8xl font-bebas tracking-[0.16em] uppercase text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.04)]">
            <span>{track1Words}</span>
            <span className="[-webkit-text-stroke:1px_rgba(239,68,68,0.09)] text-red-600/[0.03]">
              {track1Words}
            </span>
          </div>
          <div className="flex shrink-0 items-center whitespace-nowrap text-4xl xs:text-5xl sm:text-7xl lg:text-8xl font-bebas tracking-[0.16em] uppercase text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.04)]">
            <span>{track1Words}</span>
            <span className="[-webkit-text-stroke:1px_rgba(239,68,68,0.09)] text-red-600/[0.03]">
              {track1Words}
            </span>
          </div>
        </div>
      </div>

      {/* Track 2: Middle Track (behind Education & Skills section) */}
      <div className="absolute top-[48%] left-0 right-0 overflow-hidden opacity-85 -rotate-1">
        <div className="flex w-max animate-marquee-right">
          <div className="flex shrink-0 items-center whitespace-nowrap text-4xl xs:text-5xl sm:text-7xl lg:text-8xl font-bebas tracking-[0.16em] uppercase text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.035)]">
            <span className="[-webkit-text-stroke:1px_rgba(239,68,68,0.08)] text-red-600/[0.03]">
              {track2Words}
            </span>
            <span>{track2Words}</span>
          </div>
          <div className="flex shrink-0 items-center whitespace-nowrap text-4xl xs:text-5xl sm:text-7xl lg:text-8xl font-bebas tracking-[0.16em] uppercase text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.035)]">
            <span className="[-webkit-text-stroke:1px_rgba(239,68,68,0.08)] text-red-600/[0.03]">
              {track2Words}
            </span>
            <span>{track2Words}</span>
          </div>
        </div>
      </div>

      {/* Track 3: Lower Track (behind Contact section) */}
      <div className="absolute top-[82%] left-0 right-0 overflow-hidden opacity-90">
        <div className="flex w-max animate-marquee-left-fast">
          <div className="flex shrink-0 items-center whitespace-nowrap text-4xl xs:text-5xl sm:text-7xl lg:text-8xl font-bebas tracking-[0.16em] uppercase text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.038)]">
            <span>{track3Words}</span>
            <span className="[-webkit-text-stroke:1px_rgba(239,68,68,0.09)] text-red-600/[0.03]">
              {track3Words}
            </span>
          </div>
          <div className="flex shrink-0 items-center whitespace-nowrap text-4xl xs:text-5xl sm:text-7xl lg:text-8xl font-bebas tracking-[0.16em] uppercase text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.038)]">
            <span>{track3Words}</span>
            <span className="[-webkit-text-stroke:1px_rgba(239,68,68,0.09)] text-red-600/[0.03]">
              {track3Words}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

