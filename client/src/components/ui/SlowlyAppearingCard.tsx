"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function SlowlyAppearingCard() {
  return (
    <div className="flex justify-start w-full items-center px-10 overflow-x-hidden">
      {/* Main Card Container with Unfold Effect */}
      <motion.div
        initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }} // Starts hidden
        animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }} // Unfolds smoothly
        transition={{ duration: 1.8, ease: "easeInOut" }} // More natural animation
        className="relative overflow-hidden rounded-2xl shadow-lg bg-[#1a1a1a]"
      >
        {/* Softer Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#262626] via-[#333] to-[#1a1a1a] opacity-40" />

        {/* Developer Info Card */}
        <Card className="bg-transparent text-gray-200 border-0 relative z-10">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold text-white mb-3">
              Prachi Madame
            </h3>

            <h4 className="text-xl font-bold text-white">
              Full-Stack Developer | 3+ Years of Experience
            </h4>
            <p className="mt-4 text-gray-300">
              As a <strong className="text-white">Full-Stack Developer</strong> with
              <strong className="text-white"> 3+ years of experience</strong> in
              <strong className="text-[#80d6ff]"> React.js, Next.js, Node.js, NestJS, and Java</strong>,
              I have designed and delivered
              <strong className="text-white"> 6+ scalable web applications</strong>
              across diverse domains.
            </p>

            <p className="mt-3 text-gray-300">
              Over the past 3 years, I built
              <strong className="text-white"> 10+ high-performance backend services</strong>,
              improving system efficiency by
              <strong className="text-white"> 40%</strong> and reducing server costs by
              <strong className="text-white"> 20%</strong>. I enhanced user engagement by
              implementing <strong className="text-[#80d6ff]">real-time features</strong> with
              <strong className="text-[#80d6ff]"> Socket.IO</strong> and expanded global accessibility by integrating
              <strong className="text-[#80d6ff]"> translation agents</strong> for multilingual support
              across <strong className="text-white">10+ languages</strong>.
            </p>

            <p className="mt-3 text-gray-300">
              Proficient in <strong className="text-[#80d6ff]">TypeScript, Java, AWS, and Vite</strong>, I architect secure,
              scalable, and maintainable applications. Using
              <strong className="text-[#80d6ff]"> Next.js</strong>, I optimize frontend performance
              for lightning-fast web experiences.
            </p>

            <p className="mt-3 text-gray-300">
              Skilled in <strong className="text-[#80d6ff]">Bootstrap and Tailwind CSS</strong>, I
              have developed responsive and visually appealing UIs, cutting development time by
              <strong className="text-white"> 30%</strong>. Passionate about building robust
              applications, I collaborate closely with
              <strong className="text-white"> cross-functional teams</strong> to deliver
              cutting-edge digital experiences.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
