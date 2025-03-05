"use client";
import { motion } from "framer-motion";
import "../../styles/HeadlineStyle.css";
interface AnimatedHeadlineProps {
  title: string;
}

export default function AnimatedHeadline({ title }: AnimatedHeadlineProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
      animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
    //   transition={{ duration: 1.5, ease: "easeOut" }}
      className="relative font-bold text-3xl tracking-wide leading-tight text-center text-white inline-block group"
    >
      <motion.span
        // animate={{
        //   backgroundColor: ["#9DB79E", "#8A9A79", "#A78BFA"],
        // }}
        // transition={{
        //   duration: 3,
        //   ease: "easeInOut",
        //   repeat: Infinity,
        //   repeatType: "reverse",
        // }}
        className="relative px-2 text-white bg-clip-text"
      >
        {title}
      </motion.span>

      {/* Underline Animation (Top & Bottom) */}
      <span className="absolute left-0 bottom-[-5px] w-full h-[2px] bg-gradient-to-r from-red-500 to-cyan-500 scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
      <span className="absolute left-0 top-[-5px] w-full h-[2px] bg-gradient-to-r from-red-500 to-cyan-500 scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
    </motion.h2>
  );
}
