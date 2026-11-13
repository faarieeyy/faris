"use client";

import React from "react";
import Image from "next/image";

interface KathakaliWaveProps {
  className?: string;
  isModal?: boolean;
}

export default function KathakaliWave({ className = "", isModal = false }: KathakaliWaveProps) {
  if (isModal) {
    return (
      <div className={`relative w-full h-full overflow-hidden bg-black flex items-center justify-center ${className}`}>
        <Image
          src="/images/projects/kathakali-person.webp"
          alt="Kathakali Mudra & Navarasa Recognition"
          fill
          sizes="(max-width: 768px) 100vw, 672px"
          className="object-contain object-center"
          priority
        />
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* High-Resolution Clean Kathakali Performer Cutout without waves */}
      <Image
        src="/images/projects/kathakali-person.webp"
        alt="Kathakali Mudra & Navarasa Recognition"
        fill
        sizes="(max-width: 768px) 50vw, 320px"
        className="object-cover object-[center_top] scale-105 group-hover:scale-110 transition-transform duration-500 pointer-events-none"
        priority
      />
    </div>
  );
}
