"use client";
import { motion } from "framer-motion";

export default function AnimatedHeadline() {
  return (
    <motion.h2
      initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
      animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="font-bold text-3xl tracking-wide leading-tight text-center drop-shadow-lg"
    >
      <motion.span
        animate={{
            backgroundColor: ["#9DB79E", "#8A9A79", "#A78BFA"]// Soft green & pastel purple shades
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="px-2 text-transparent bg-clip-text"
      >
        Engineering Products That Perform, Scale, and Inspire.
      </motion.span>
    </motion.h2>
  );
}
