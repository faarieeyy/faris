"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, Target, Database, GitBranch, BarChart3, Rocket } from "lucide-react";

export default function WorkProcess() {
  const steps = [
    {
      num: "01",
      icon: Target,
      title: "Define Problem",
      desc: "Understand the goal and real-world impact.",
    },
    {
      num: "02",
      icon: Database,
      title: "Prepare Data",
      desc: "Collect, process and structure the data.",
    },
    {
      num: "03",
      icon: GitBranch,
      title: "Build Model",
      desc: "Design and train with suitable algorithms.",
    },
    {
      num: "04",
      icon: BarChart3,
      title: "Evaluate",
      desc: "Test, analyze and improve performance.",
    },
    {
      num: "05",
      icon: Rocket,
      title: "Deploy",
      desc: "Integrate and showcase through web apps (e.g., Streamlit).",
    },
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Column Header matching reference */}
      <div className="flex items-center gap-3 mb-8 pb-3 border-b border-zinc-900">
        <div className="w-8 h-8 rounded-lg bg-red-950/40 border border-red-800/60 flex items-center justify-center text-red-500 shadow-[0_0_12px_rgba(239,68,68,0.4)]">
          <Layers className="w-4 h-4" />
        </div>
        <h3 className="font-sans text-xl sm:text-2xl font-bold text-white tracking-wider uppercase">
          WORK PROCESS
        </h3>
      </div>

      {/* Spacious 01-05 Steps List matching template */}
      <div className="space-y-6 sm:space-y-6.5 flex-1">
        {steps.map((step, idx) => {
          const IconComponent = step.icon;
          return (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              whileHover={{ x: 5 }}
              className="flex items-start gap-4 group cursor-default"
            >
              {/* Step number in bold red font */}
              <span className="font-bebas text-2xl sm:text-3xl font-bold text-red-500 leading-none shrink-0 w-7 pt-1 group-hover:text-red-400 group-hover:scale-105 transition-all">
                {step.num}
              </span>

              {/* Step icon in circular red outline badge matching reference */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-red-500/80 bg-red-950/20 flex items-center justify-center shrink-0 text-red-400 group-hover:border-red-400 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-[0_0_12px_rgba(239,68,68,0.7)] transition-all">
                <IconComponent className="w-4 h-4 sm:w-4.5 sm:h-4.5 group-hover:rotate-6 transition-transform" />
              </div>

              {/* Title & Description */}
              <div className="flex-1 pt-0.5">
                <h4 className="font-sans text-sm sm:text-base font-bold text-red-500 group-hover:text-red-400 transition-colors leading-snug">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mt-0.5">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
