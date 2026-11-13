"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

export default function Skills() {
  const coreSkills = [
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "NLP",
    "Generative AI",
    "Data Analysis",
  ];

  const toolsAndLibraries = [
    "Python",
    "TensorFlow",
    "Keras",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Git",
    "Jupyter",
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Column Header matching reference */}
      <div className="flex items-center gap-3 mb-8 pb-3 border-b border-zinc-900">
        <div className="w-8 h-8 rounded-lg bg-red-950/40 border border-red-800/60 flex items-center justify-center text-red-500 shadow-[0_0_12px_rgba(239,68,68,0.4)]">
          <Code2 className="w-4 h-4" />
        </div>
        <h3 className="font-sans text-xl sm:text-2xl font-bold text-white tracking-wider uppercase">
          TECHNICAL SKILLS
        </h3>
      </div>

      <div className="space-y-8 flex-1">
        {/* Core Skills */}
        <div>
          <h4 className="text-xs font-bold tracking-[0.2em] text-red-500 uppercase mb-3.5 sm:mb-4">
            CORE SKILLS
          </h4>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {coreSkills.map((skill, idx) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  transition: { type: "spring", stiffness: 400, damping: 15 },
                }}
                className="inline-flex items-center px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide bg-[#0d0d10] border border-zinc-800 text-zinc-300 hover:border-red-500 hover:text-white hover:bg-red-950/20 transition-all cursor-default shadow-sm hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Tools & Libraries */}
        <div>
          <h4 className="text-xs font-bold tracking-[0.2em] text-red-500 uppercase mb-3.5 sm:mb-4">
            TOOLS &amp; LIBRARIES
          </h4>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {toolsAndLibraries.map((tool, idx) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  transition: { type: "spring", stiffness: 400, damping: 15 },
                }}
                className="inline-flex items-center px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide bg-[#0d0d10] border border-zinc-800 text-zinc-300 hover:border-red-500 hover:text-white hover:bg-red-950/20 transition-all cursor-default shadow-sm hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
