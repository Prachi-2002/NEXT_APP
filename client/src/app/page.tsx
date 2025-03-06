import AnimatedHeadline from "@/components/ui/AnimatedHeadline";
import SlowlyAppearingCard from "@/components/ui/SlowlyAppearingCard";
import "../styles/HeadlineStyle.css"
import { projects } from "@/constants/constant";
import PCard from "@/components/ui/PCard";
import Header from "@/components/ui/Header";

export default function Home() {
  return (
    <>
      <Header />
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <span className="hover-underline">
        <AnimatedHeadline title="Engineering Products That Perform, Scale, and Inspire." />
      </span>
      <span className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-red-500 to-cyan-500 top-[-5px] scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
      <SlowlyAppearingCard />
      <span className="hover-underline">
        <AnimatedHeadline title="My Work & Creations " />
      </span>
      <div className="w-full flex  justify-center flex-wrap gap-16 mt-4">
        {projects.map((project, index) => (
          <PCard key={index} {...project} />
        ))}
      </div>
    </div>
        </>
  );
}
