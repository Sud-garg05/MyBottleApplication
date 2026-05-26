"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Smartphone, Sparkles, QrCode, Share2, Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function MagicScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const bottleCardRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const laserRef = useRef<HTMLDivElement>(null);
  const [servings, setServings] = useState(5);
  const [scanActive, setScanActive] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  // Refactored scrolling with GSAP ScrollTrigger pinning
  useEffect(() => {
    let mm = gsap.matchMedia();
    // Create GSAP context for proper cleanup
    let ctx = gsap.context(() => {
      // Pin the whole section and scrub the timeline based on scroll progress
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          // Pin the container; GSAP will add spacing automatically
          pin: true,
          // End after enough scroll to cover all 3 steps (~300% of viewport)
          end: "+=300%",
          scrub: 1.2,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const step = Math.min(2, Math.floor(self.progress * 3));
            setActiveStep(step);
          },
        },
      });

      // Set initial states
      gsap.set(laserRef.current, { y: -20, opacity: 0 });

      // Desktop animation sequence
      const desktopAnim = () => {
        tl.to(bottleCardRef.current, {
          scale: 0.58,
          y: "18vh",
          x: "-3vw",
          rotateY: 15,
          rotateX: -8,
          boxShadow: "0 30px 60px -12px rgba(0,0,0,0.95)",
          borderColor: "rgba(245,196,83,0.5)",
          duration: 3,
          ease: "power2.inOut",
        })
          .to(phoneRef.current, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 2.5,
            ease: "power2.out",
          }, "-=2")
          .to(laserRef.current, {
            opacity: 1,
            y: 280,
            duration: 3,
            ease: "power2.inOut",
            onStart: () => setScanActive(true),
            onComplete: () => {
              setScanActive(false);
              setServings(4);
            },
            onReverseComplete: () => {
              setScanActive(false);
              setServings(5);
            },
          })
          .to(laserRef.current, { opacity: 0, duration: 0.5 });
      };

      // Mobile animation sequence (same as original but scoped under same timeline)
      const mobileAnim = () => {
        tl.to(bottleCardRef.current, {
          scale: 0.48,
          y: "10vh",
          x: "0vw",
          rotateY: 0,
          rotateX: 0,
          boxShadow: "0 20px 40px -8px rgba(0,0,0,0.9)",
          borderColor: "rgba(245,196,83,0.3)",
          duration: 2.5,
        })
          .to(phoneRef.current, {
            opacity: 1,
            y: 0,
            scale: 0.82,
            duration: 2,
          }, "-=1.5")
          .to(laserRef.current, {
            opacity: 1,
            y: 240,
            duration: 3,
            ease: "power2.inOut",
            onStart: () => setScanActive(true),
            onComplete: () => {
              setScanActive(false);
              setServings(4);
            },
            onReverseComplete: () => {
              setScanActive(false);
              setServings(5);
            },
          })
          .to(laserRef.current, { opacity: 0, duration: 0.5 });
      };

      // Apply appropriate animation based on viewport width
      mm.add("(min-width: 1024px)", desktopAnim);
      mm.add("(max-width: 1023px)", mobileAnim);
    }, triggerRef);
    return () => ctx.revert();
  }, []);

  const steps = [
    {
      label: "Step 1",
      accent: "text-brand-gold",
      icon: <Award className="w-4 h-4" />,
      heading: "Your bottle, digitized instantly.",
      body: "Reserve a full bottle entitlement on the app. No physical lockers. No storage books. Your balance is legally protected on-chain.",
    },
    {
      label: "Step 2",
      accent: "text-brand-teal",
      icon: <Smartphone className="w-4 h-4" />,
      heading: "It lives in your wallet.",
      body: "As you scroll, the bottle scales and slots into your secure Mehfil Wallet. Always in your pocket, ready whenever you return.",
    },
    {
      label: "Step 3",
      accent: "text-brand-gold",
      icon: <Share2 className="w-4 h-4" />,
      heading: "1 bottle. 5 guaranteed visits.",
      body: "Walk in. Show your QR. The bartender scans it. Your balance decrements in 3 seconds. Your friends watch you pour like a VIP.",
    },
  ];

  return (
    <div ref={containerRef} id="how-it-works" className="relative bg-brand-black w-full">
      {/* 250vh: enough room for 3 clear scroll stages without feeling endless */}
      <div ref={triggerRef} className="relative w-full">

        <div className="h-screen overflow-visible flex items-center justify-center">

          {/* Ambient grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_60%,transparent_100%)] z-0" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-teal/4 rounded-full blur-[160px] pointer-events-none" />

          <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">

            {/* Left: Visual animation stage */}
            <div className="lg:col-span-7 flex items-center justify-center h-full relative z-20">

              {/* Section header — visible at top of sticky pane */}
              <div className="absolute top-24 left-0 right-0 text-center lg:text-left lg:right-auto lg:w-auto pointer-events-none">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-teal inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse" />
                  How Mehfil Works
                </span>
              </div>

              {/* Bottle Card */}
              <div
                ref={bottleCardRef}
                className="absolute z-30 w-64 sm:w-72 h-88 sm:h-96 rounded-2xl border border-brand-gold/20 bg-gradient-to-br from-[#111114]/95 to-[#181820]/90 p-5 shadow-2xl flex flex-col justify-between pointer-events-none"
                style={{ willChange: "transform, box-shadow, border-color" }}
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[9px] uppercase font-bold tracking-widest text-brand-gold">Mehfil Entitlement</span>
                    <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-pulse" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-white tracking-wide">JW Black Label</h3>
                  <p className="text-[9px] text-gray-500 font-light mt-0.5">Sudarshan Garg · Active</p>
                </div>

                <div className="flex justify-center py-4">
                  <svg viewBox="0 0 100 220" className="w-14 h-32 drop-shadow-[0_6px_14px_rgba(245,196,83,0.18)]">
                    <rect x="42" y="10" width="16" height="30" rx="3" fill="#0c0c0e" stroke="rgba(245,196,83,0.35)" strokeWidth="1"/>
                    <path d="M28 40 Q24 60 24 90 L24 185 Q24 200 50 200 Q76 200 76 185 L76 90 Q76 60 72 40 Z" fill="#0c0c0e" stroke="rgba(245,196,83,0.35)" strokeWidth="1"/>
                    <path d="M25 90 Q22 100 22 120 L22 185 Q22 196 50 196 Q78 196 78 185 L78 120 Q78 100 75 90 Z" fill="oklch(82.26% 0.11 86.42)" opacity="0.7"/>
                  </svg>
                </div>

                <div className="border-t border-white/[0.05] pt-3 flex justify-between items-center">
                  <div>
                    <div className="text-[8px] uppercase font-bold text-gray-600">Balance</div>
                    <div className="text-sm font-black text-white">{servings} Servings</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[8px] uppercase font-bold text-gray-600">Validity</div>
                    <div className="text-[9px] font-bold text-brand-gold">90 Days</div>
                  </div>
                </div>
              </div>

              {/* Phone mockup */}
              <div
                ref={phoneRef}
                className="absolute z-20 w-72 sm:w-80 h-[520px] sm:h-[560px] rounded-[44px] border-4 border-white/[0.07] bg-[#0b0b0d] p-3 shadow-2xl opacity-0 scale-95 translate-y-20 pointer-events-none flex flex-col overflow-hidden"
                style={{ willChange: "transform, opacity" }}
              >
                <div
                  ref={laserRef}
                  className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-brand-teal to-transparent shadow-[0_0_10px_#2dd4bf] z-50 ${scanActive ? "opacity-100" : "opacity-0"}`}
                />

                <div className="w-28 h-5 bg-black rounded-full mx-auto mb-3 z-40 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#1a1a22]" />
                </div>

                <div className="w-full flex-1 rounded-[36px] bg-brand-black/95 p-4 border border-white/[0.03] flex flex-col justify-between overflow-hidden">
                  <div className="flex justify-between items-center">
                    <span className="font-display font-extrabold text-xs text-white">mehfil</span>
                    <span className="text-[9px] font-semibold text-brand-teal flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse" />
                      Digital Wallet
                    </span>
                  </div>

                  <div className="w-full h-52 border border-dashed border-white/[0.05] rounded-xl flex items-center justify-center my-3">
                    <div className="text-[9px] text-gray-700 font-bold uppercase tracking-widest">Entitlement Slot</div>
                  </div>

                  <div className="bg-brand-charcoal/70 border border-white/[0.04] p-3 rounded-2xl flex flex-col items-center gap-2.5">
                    <div className="flex items-center justify-between w-full border-b border-white/[0.04] pb-2">
                      <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">Remaining Pegs</span>
                      <span className="text-sm font-black text-brand-teal">{servings} / 5</span>
                    </div>

                    <div className={`p-2 rounded-xl bg-white border ${scanActive ? "border-brand-teal/40 bg-brand-teal/5" : "border-gray-200"} transition-all duration-300`}>
                      <QrCode className={`w-10 h-10 ${scanActive ? "text-brand-teal" : "text-brand-black"}`} />
                    </div>

                    <div className="text-[9px] text-gray-500 font-light text-center">
                      Show QR at bar to redeem
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Step indicators — stacked vertically, centered in viewport, no huge gaps */}
            <div className="lg:col-span-5 h-full flex flex-col justify-center gap-4 pointer-events-none">

              {/* Progress header */}
              <div className="mb-2">
                <div className="text-[9px] uppercase font-bold text-gray-600 tracking-widest mb-3">The Mehfil Flow</div>
                <div className="flex gap-2">
                  {steps.map((_, i) => (
                    <div
                      key={i}
                      className={`h-0.5 flex-1 rounded-full transition-all duration-500 ${i <= activeStep ? "bg-brand-gold" : "bg-white/[0.06]"}`}
                    />
                  ))}
                </div>
              </div>

              {steps.map((step, i) => (
                <div
                  key={i}
                  className={`rounded-2xl border p-6 transition-all duration-500 ${
                    i === activeStep
                      ? "border-white/[0.08] bg-brand-charcoal/50 opacity-100 scale-100"
                      : "border-white/[0.02] bg-transparent opacity-40 scale-[0.98]"
                  }`}
                >
                  <span className={`text-[10px] font-bold uppercase tracking-widest mb-2 inline-flex items-center gap-1.5 ${step.accent}`}>
                    {step.icon} {step.label}
                  </span>
                  <h3 className={`font-display font-bold text-lg leading-snug mb-2 transition-colors ${i === activeStep ? "text-white" : "text-gray-500"}`}>
                    {step.heading}
                  </h3>
                  <p className={`text-xs leading-relaxed font-light transition-colors ${i === activeStep ? "text-gray-400" : "text-gray-700"}`}>
                    {step.body}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}