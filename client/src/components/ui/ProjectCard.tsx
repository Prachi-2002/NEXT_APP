"use client";

import { motion } from "framer-motion";

export default function ProjectCard({ title, techStack, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="relative bg-[#161616] border border-[#222] text-white rounded-2xl shadow-lg p-6 w-full max-w-sm transition-all"
    >
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#ff0000] via-[#00ffff] to-[#ff0000] rounded-2xl opacity-20"></div>

      {/* Card Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-semibold tracking-wide">{title}</h3>
        <p className="text-sm text-gray-400 mt-1">{techStack}</p>
        <p className="mt-3 text-gray-300 text-sm">{description}</p>
      </div>
    </motion.div>
  );
}
