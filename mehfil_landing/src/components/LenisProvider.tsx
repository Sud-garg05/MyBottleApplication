"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger globally
gsap.registerPlugin(ScrollTrigger);

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Create new Lenis smooth scroller instance
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Sync GSAP's scroll handler with Lenis scroll events
    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    // Bind GSAP ticker to Lenis' RequestAnimationFrame
    const updateGsapTicker = (time: number) => {
      lenis.raf(time * 1000);
    };
    
    gsap.ticker.add(updateGsapTicker);
    gsap.ticker.lagSmoothing(0);

    // Clean up on component unmount
    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateGsapTicker);
    };
  }, []);

  return <>{children}</>;
}
