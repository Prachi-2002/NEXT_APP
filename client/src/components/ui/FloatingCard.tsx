"use client";

import { motion } from "framer-motion";

export default function FloatingCard() {
  return (

      <motion.div
        initial={{ y: 0, rotateX: 35, rotateY: 4, rotateZ: -30 }}
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        whileHover={{
          y: -20,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        }}
        className="relative w-[250px] h-[350px] rounded-lg flex items-center justify-center text-white text-xl font-semibold perspective-1000 cursor-pointer bg-black shadow-xl"
      >
        {/* Glowing Gradient Border */}
        <div className="absolute inset-0 border-2 border-transparent rounded-lg bg-gradient-to-r from-red-500 to-cyan-400 bg-clip-padding" />

        {/* Main Card Content */}
        <div className="relative z-10 flex items-center justify-center w-full h-full rounded-lg backdrop-blur-md bg-black/80">
          
        </div>
      </motion.div>

  );
}
