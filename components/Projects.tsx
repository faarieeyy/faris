"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight, X, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import NeuralWave from "@/components/NeuralWave";
import KathakaliWave from "@/components/KathakaliWave";
import AIUtilityWave from "@/components/AIUtilityWave";

export interface Project {
  id: string;
  category: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  technologies: string[];
  keyFeatures: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projectsData: Project[] = [
  {
    id: "kathakali",
    category: "COMPUTER VISION",
    title: "Kathakali Mudra &\nNavarasa Recognition",
    shortDesc:
      "AI system to recognize 24 mudras and 9 navarasas from images, videos and webcam input.",
    fullDesc:
      "A flagship computer vision and deep learning project dedicated to cultural preservation and AI performance arts analysis. The system captures fine-grained hand gestures and complex facial expressions to classify 24 classical Kathakali mudras (hand gestures) and 9 classical Navarasas (emotional facial expressions) in real-time.",
    image: "/images/projects/kathakali-person.webp",
    technologies: ["MediaPipe", "TensorFlow", "Keras", "Python", "Streamlit", "OpenCV"],
    keyFeatures: [
      "Real-time webcam inference pipeline with sub-50ms latency",
      "MediaPipe Holistic / Hands landmark extraction for 21 3D hand coordinates",
      "Custom deep neural network classifier trained on specialized Kathakali gesture datasets",
      "Streamlit-based interactive diagnostic and presentation dashboard",
    ],
    githubUrl: "https://github.com/gitfaarieeyy",
    liveUrl: "#",
  },
  {
    id: "image-classification",
    category: "DEEP LEARNING",
    title: "Image\nClassification",
    shortDesc:
      "Built and trained a classification model using TensorFlow/Keras.",
    fullDesc:
      "End-to-end deep learning image classification system exploring convolutional neural network (CNN) architectures, transfer learning strategies, and data augmentation techniques to achieve robust object classification across multi-class benchmark datasets.",
    image: "/images/projects/neural-wave.webp",
    technologies: ["TensorFlow", "Keras", "Python", "NumPy", "Matplotlib", "Scikit-learn"],
    keyFeatures: [
      "Custom CNN architectures benchmarked against MobileNetV2 and ResNet backbones",
      "Image augmentation pipeline preventing overfitting on limited training datasets",
      "Confusion matrix analysis, ROC-AUC evaluation, and validation loss optimization",
      "Model export and quantization for lightweight edge deployment",
    ],
    githubUrl: "https://github.com/gitfaarieeyy",
    liveUrl: "#",
  },
  {
    id: "genai-utilities",
    category: "GEN AI",
    title: "AI Utility\nApplications",
    shortDesc:
      "Explored real-world Generative AI use cases and small tools.",
    fullDesc:
      "A suite of intelligent developer utilities, document reasoning tools, and generative AI agents designed to automate repetitive workflows, summarize dense research texts, and streamline productivity using LLMs and prompt engineering.",
    image: "/images/projects/genai-laptop.webp",
    technologies: ["Python", "Generative AI", "LangChain", "OpenAI / Gemini API", "Streamlit"],
    keyFeatures: [
      "Retrieval-Augmented Generation (RAG) prototype for querying academic notes and PDFs",
      "Structured prompt engineering frameworks for concise code analysis and synthesis",
      "Lightweight web interfaces powered by Streamlit for rapid utility access",
      "Integration with state-of-the-art vision and language APIs",
    ],
    githubUrl: "https://github.com/gitfaarieeyy",
    liveUrl: "#",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-transparent relative z-20">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header: Geometric Sans-serif matching template */}
        <div className="flex items-center justify-between gap-4 pb-4 mb-8">
          <div className="flex items-center gap-4 flex-1">
            <h2 className="font-sans text-xl sm:text-2xl font-bold text-white tracking-wider uppercase whitespace-nowrap">
              SELECTED PROJECTS
            </h2>
            <div className="h-[1px] bg-zinc-800/80 flex-1 mx-2 sm:mx-4" />
          </div>
          <div>
            <a
              href="https://github.com/gitfaarieeyy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-zinc-300 hover:text-red-500 uppercase transition-colors group whitespace-nowrap"
            >
              <span>VIEW ALL PROJECTS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Project Cards Grid - 1:1 match to reference template */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl bg-[#0a0a0d] border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-[210px] xs:h-[220px] sm:h-[225px] p-4 xs:p-5 sm:p-6 hover:shadow-2xl hover:shadow-red-950/20"
            >
              {/* Subtle radial sheen on card hover */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-red-600/10 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Text Container on the LEFT */}
              <div className="relative z-10 w-[56%] xs:w-[55%] sm:w-[56%] flex flex-col justify-between h-full pr-1.5">
                <div>
                  {/* Category Pill */}
                  <div className="mb-2 sm:mb-2.5">
                    <span className="inline-block px-2 sm:px-2.5 py-0.5 rounded-md text-[9px] sm:text-[10px] font-semibold tracking-wider text-zinc-300 bg-zinc-800/80 border border-zinc-700/50 uppercase">
                      {project.category}
                    </span>
                  </div>

                  {/* Title (Geometric Sans bold matching template) */}
                  <h3 className="font-sans font-bold text-sm xs:text-base sm:text-[1.12rem] text-white tracking-tight leading-snug whitespace-pre-line mb-1.5 sm:mb-2 group-hover:text-red-500 transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Short Description */}
                <p className="text-[10.5px] xs:text-[11px] sm:text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors leading-relaxed line-clamp-3">
                  {project.shortDesc}
                </p>
              </div>

              {/* Graphic / Artwork on the RIGHT */}
              <div className="absolute right-0 top-0 bottom-0 w-[45%] xs:w-[46%] sm:w-[46%] overflow-hidden pointer-events-none">
                {project.id === "kathakali" ? (
                  <KathakaliWave className="w-full h-full" />
                ) : project.id === "image-classification" ? (
                  <NeuralWave className="w-full h-full" />
                ) : (
                  <AIUtilityWave className="w-full h-full" />
                )}
              </div>

              {/* Sleek Minimal Arrow in Bottom-Right Corner matching reference */}
              <div className="absolute bottom-3.5 right-3.5 sm:bottom-4 sm:right-4 z-20 pointer-events-none">
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/80 group-hover:text-red-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl bg-[#0c0c0e] border border-red-900/50 rounded-2xl shadow-2xl shadow-red-950/30 overflow-hidden z-10 max-h-[92vh] sm:max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 sm:p-2.5 rounded-full bg-zinc-900/90 text-zinc-400 hover:text-white hover:bg-red-600 transition-colors active:scale-95"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Visual Header */}
              <div className="relative w-full h-48 sm:h-64 bg-black border-b border-zinc-900 overflow-hidden">
                {selectedProject.id === "kathakali" ? (
                  <KathakaliWave className="w-full h-full" isModal />
                ) : selectedProject.id === "image-classification" ? (
                  <NeuralWave className="w-full h-full" />
                ) : (
                  <AIUtilityWave className="w-full h-full" isModal />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Modal Body */}
              <div className="p-5 sm:p-6 overflow-y-auto space-y-4 sm:space-y-6">
                <div>
                  <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
                    {selectedProject.category}
                  </span>
                  <h3 className="font-sans text-xl sm:text-3xl text-white font-bold tracking-tight mt-1 whitespace-pre-line leading-tight">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Full Description */}
                <div>
                  <h4 className="text-[11px] sm:text-xs font-bold tracking-wider text-zinc-400 uppercase mb-2">
                    Project Overview
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                    {selectedProject.fullDesc}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-[11px] sm:text-xs font-bold tracking-wider text-zinc-400 uppercase mb-3">
                    Key Features & Architecture
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.keyFeatures.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-[11px] sm:text-xs font-bold tracking-wider text-zinc-400 uppercase mb-2">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 sm:px-3 py-1 rounded-lg text-[11px] sm:text-xs font-medium bg-zinc-900/90 text-zinc-200 border border-zinc-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-4 border-t border-zinc-900">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-bold tracking-wider uppercase border border-zinc-800 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>View Source</span>
                    </a>
                  )}
                  {selectedProject.liveUrl && selectedProject.liveUrl !== "#" && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold tracking-wider uppercase transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
