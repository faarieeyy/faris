"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import Counter from "@/components/Counter";

export default function Education() {
  const educationData = [
    {
      degree: "B.E. in Artificial Intelligence and Machine Learning (AIML)",
      institution: "Yenepoya Institute of Technology (Visvesvaraya Technological University)",
      period: "2023 – 2027",
      scoreType: "CGPA",
      scoreVal: 6.9,
      decimals: 1,
      suffix: "",
      isCurrent: true,
    },
    {
      degree: "Class 12th (Higher Secondary)",
      institution: "GHSS Tirurangadi, Malappuram, Kerala",
      period: "2023",
      scoreType: "Percentage",
      scoreVal: 82,
      decimals: 0,
      suffix: "%",
      isCurrent: false,
    },
    {
      degree: "Class 10th (SSLC)",
      institution: "PKMMHSSS, Edarikode, Kerala",
      period: "2021",
      scoreType: "Percentage",
      scoreVal: 89,
      decimals: 0,
      suffix: "%",
      isCurrent: false,
    },
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Column Header matching reference */}
      <div className="flex items-center gap-3 mb-8 pb-3 border-b border-zinc-900">
        <div className="w-8 h-8 rounded-lg bg-red-950/40 border border-red-800/60 flex items-center justify-center text-red-500 shadow-[0_0_12px_rgba(239,68,68,0.4)]">
          <GraduationCap className="w-4 h-4" />
        </div>
        <h3 className="font-sans text-xl sm:text-2xl font-bold text-white tracking-wider uppercase">
          EDUCATION
        </h3>
      </div>

      {/* Spacious, Elegant Timeline matching template reference */}
      <div className="relative pl-6 sm:pl-7 space-y-8 sm:space-y-9 flex-1">
        {/* Continuous vertical timeline line */}
        <div className="absolute left-[7px] sm:left-[8px] top-2 bottom-4 w-[2px] bg-gradient-to-b from-red-600 via-zinc-800 to-zinc-900 pointer-events-none" />

        {educationData.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.12 }}
            className="group relative"
          >
            {/* Glowing Red Timeline Node Bullet */}
            <span
              className={`absolute -left-[23px] sm:-left-[24px] top-1.5 h-3.5 w-3.5 rounded-full transition-transform group-hover:scale-125 ${
                item.isCurrent
                  ? "bg-red-500 ring-4 ring-red-950 shadow-[0_0_12px_rgba(239,68,68,0.95)] animate-pulse"
                  : "bg-red-600 ring-4 ring-zinc-950 shadow-[0_0_8px_rgba(239,68,68,0.6)]"
              }`}
            />

            {/* Title & Period */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
              <h4 className="font-sans text-sm sm:text-base font-bold text-white group-hover:text-red-400 transition-colors leading-snug">
                {item.degree}
              </h4>
              <span className="text-xs sm:text-sm font-semibold text-red-500 font-mono tracking-wider shrink-0">
                {item.period}
              </span>
            </div>

            {/* Institution */}
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 leading-relaxed">
              {item.institution}
            </p>

            {/* Score in Clean Editorial Typography */}
            <div className="mt-2 flex items-center gap-2">
              <span className="text-xs sm:text-sm font-medium text-zinc-400">
                {item.scoreType}:
              </span>
              <span className="font-mono text-xs sm:text-sm font-bold text-white group-hover:text-red-400 transition-colors">
                <Counter
                  value={item.scoreVal}
                  decimals={item.decimals}
                  suffix={item.suffix}
                  duration={1.5}
                />
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
