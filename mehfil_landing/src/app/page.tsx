import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import MagicScroll from "@/components/sections/MagicScroll";
import Identity from "@/components/sections/Identity";
import B2B from "@/components/sections/B2B";
import Community from "@/components/sections/Community";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full flex flex-col bg-brand-black overflow-x-clip">
        <Hero />
        <Problem />
        <MagicScroll />
        <Identity />
        <B2B />
        <Community />
        <CTA />
      </main>
    </>
  );
}
