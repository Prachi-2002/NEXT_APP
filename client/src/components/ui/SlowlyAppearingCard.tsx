"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function SlowlyAppearingCard() {
  return (
    <div className="flex justify-start w-full items-center px-10 overflow-hidden">
      {/* Main Card Container with Unfold Effect */}
      <motion.div
        initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }} // Starts completely hidden
        animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }} // Gradually reveals from left to right
        transition={{ duration: 2, ease: "easeOut" }} // Smooth unfolding animation
        className="relative overflow-hidden rounded-xl shadow-xl"
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8F9FA] via-[#DEE2E6] to-[#BFD3C1]" />

        {/* Developer Info Card */}
        <Card className="bg-transparent text-gray-800 border-0 relative z-10">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Prachi Madame</h3>

            <h4 className="text-xl font-bold text-gray-900">Full-Stack Developer | 3+ Years of Experience</h4>
            <p className="mt-4 text-gray-700">
              As a <strong className="text-gray-900">Full-Stack Developer</strong> with 
              <strong className="text-gray-900"> 3+ years of experience</strong> in 
              <strong className="text-green-600"> React.js, Next.js, Node.js, NestJS, and Java</strong>, 
              I have designed and delivered <strong className="text-gray-900">6+ scalable web applications</strong> 
              across diverse domains.
            </p>

            <p className="mt-3 text-gray-700">
              Over the past 3 years, I built <strong className="text-gray-900">10+ high-performance backend services</strong>, 
              improving system efficiency by <strong className="text-gray-900">40%</strong> and reducing server costs by 
              <strong className="text-gray-900"> 20%</strong>. I enhanced user engagement by implementing 
              <strong className="text-green-600"> real-time features</strong> with <strong className="text-green-600">Socket.IO</strong> 
              and expanded global accessibility by integrating <strong className="text-green-600">translation agents</strong> for 
              multilingual support across <strong className="text-gray-900">10+ languages</strong>.
            </p>

            <p className="mt-3 text-gray-700">
              Proficient in <strong className="text-green-600">TypeScript, Java, AWS, and Vite</strong>, I architect secure, scalable, 
              and maintainable applications. Using <strong className="text-green-600">Next.js</strong>, I optimize frontend 
              performance for lightning-fast web experiences.
            </p>

            <p className="mt-3 text-gray-700">
              Skilled in <strong className="text-green-600">Bootstrap and Tailwind CSS</strong>, I have developed responsive and visually 
              appealing UIs, cutting development time by <strong className="text-gray-900">30%</strong>. Passionate about building 
              robust applications, I collaborate closely with <strong className="text-gray-900">cross-functional teams</strong> to 
              deliver cutting-edge digital experiences.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}