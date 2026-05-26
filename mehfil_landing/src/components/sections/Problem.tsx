"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, HelpCircle, Receipt } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface StoryStep {
  title: string;
  description: string;
  badge: string;
  icon: React.ReactNode;
}

export default function Problem() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const manualOverride = useRef<ReturnType<typeof setTimeout> | null>(null);

  const steps: StoryStep[] = [
    {
      badge: "Stage 01 — The Celebration",
      title: "You reserve a premium bottle.",
      description: "A bottle of single malt arrives at your table. It costs ₹12,000. You pay upfront, open it, and share the moment.",
      icon: <Clock className="w-4 h-4 text-brand-gold" />,
    },
    {
      badge: "Stage 02 — The Half-Leftover",
      title: "You drink half. The night ends.",
      description: "It's 1 AM. Four servings gone, six remain. You can't take the bottle home. Storing it at the venue feels like trusting a handshake.",
      icon: <HelpCircle className="w-4 h-4 text-red-400" />,
    },
    {
      badge: "Stage 03 — The Forgotten Bottle",
      title: "It vanishes behind the bar.",
      description: "You leave. Your half-bottle sits on a storage shelf with no digital record. No ownership proof. It belongs to hope.",
      icon: <X className="w-4 h-4 text-red-500" />,
    },
    {
      badge: "Stage 04 — The Costly Return",
      title: "You return, and pay again.",
      description: "Two weeks later, back at the same venue. The bottle can't be verified. You buy individual pegs at a 25% markup on the bottle you already paid for.",
      icon: <Receipt className="w-4 h-4 text-brand-teal" />,
    },
  ];

  const handleStepClick = (idx: number) => {
    setActiveStep(idx);
    // Suppress scroll sync for 2s after manual click
    if (manualOverride.current) clearTimeout(manualOverride.current);
    manualOverride.current = setTimeout(() => {
      manualOverride.current = null;
    }, 2000);
  };

  useEffect(() => {
    // Force a ScrollTrigger refresh after a tiny timeout to ensure Next.js layout is fully calculated
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      // Enable GSAP scroll pinning and interactive stepper strictly on desktop viewports
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            pin: true,
            end: "+=300%",
            scrub: 0.5,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (manualOverride.current) return;
              const progress = self.progress; // 0‑1
              const step = Math.min(3, Math.floor(progress * 4));
              setActiveStep(step);
            },
          },
        });

        // Dummy tween to establish a timeline duration so scrubbing works perfectly
        tl.to({}, { duration: 1 });
      });
    }, triggerRef);

    return () => {
      ctx.revert();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div id="problem-friction" className="relative bg-[#080809] w-full">
      
      {/* ========================================================================= */}
      {/* 1. DESKTOP VIEWPORT LAYOUT (min-width: 1024px) - Scroll pinned interactive stepper */}
      {/* ========================================================================= */}
      <div ref={triggerRef} className="hidden lg:block h-screen overflow-visible relative w-full">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-950/8 rounded-full blur-[180px] pointer-events-none" />

        <div className="relative w-full pt-16 max-w-7xl mx-auto px-6 lg:px-12 h-full grid grid-cols-12 gap-8 items-center" ref={containerRef}>

          {/* Left Side: Copy + Stepper */}
          <div className="col-span-5 flex flex-col justify-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-red-400 inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
              The Current Friction
            </span>

            <h2 className="font-display font-extrabold text-3xl lg:text-4.5xl text-white tracking-tight leading-[1.2] mb-3">
              Nightlife forgets its customers<br />
              <span className="text-red-400">after every night.</span>
            </h2>

            <p className="text-gray-400 text-xs font-light leading-relaxed mb-6 max-w-sm">
              Premium bottles become wasted capital. No digital record, no ownership trail. See how the current cycle plays out:
            </p>

            {/* Scroll progress bar */}
            <div className="flex gap-1.5 mb-5">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`h-0.5 flex-1 rounded-full transition-all duration-400 ${i <= activeStep ? "bg-red-400" : "bg-white/[0.06]"}`}
                />
              ))}
            </div>

            {/* Interactive Step Buttons */}
            <div className="flex flex-col gap-1.5">
              {steps.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => handleStepClick(idx)}
                  className={`text-left rounded-xl px-4 py-2.5 transition-all duration-300 border ${
                    activeStep === idx
                      ? "bg-red-950/20 border-red-400/20 text-white"
                      : "bg-transparent border-transparent text-gray-600 hover:text-gray-400"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className={`${activeStep === idx ? "opacity-100" : "opacity-40"}`}>{step.icon}</span>
                    <span className="text-[8px] font-bold uppercase tracking-widest">{step.badge}</span>
                  </div>
                  <div className={`text-xs font-semibold leading-snug ${activeStep === idx ? "text-white" : "text-gray-600"}`}>
                    {step.title}
                  </div>
                </button>
              ))}
            </div>

            <p className="text-[8px] text-gray-700 mt-5 uppercase tracking-wider font-semibold">
              Scroll to progress · or click any stage
            </p>
          </div>

          {/* Right Side: Visual Stage */}
          <div className="col-span-7 flex flex-col items-center justify-center h-full relative z-10">
            {/* VIP table silhouette */}
            <div className="absolute bottom-12 w-64 h-24 bg-[#101014] border border-white/[0.04] rounded-[50%] shadow-[0_20px_60px_rgba(0,0,0,0.9)] z-0 flex items-center justify-center">
              <div className="w-[88%] h-[88%] border border-dashed border-white/[0.03] rounded-[50%]" />
            </div>

            {/* Animated bottle/receipt visuals */}
            <div className="relative z-10 flex flex-col items-center justify-center h-64">
              <AnimatePresence mode="wait">
                <BottleVisual step={activeStep} />
              </AnimatePresence>
            </div>

            {/* Step description card */}
            <div className="absolute bottom-6 left-8 right-8 z-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                  className="bg-brand-charcoal/60 border border-white/[0.04] rounded-xl px-4 py-3.5 backdrop-blur-sm"
                >
                  <p className="text-xs text-gray-300 font-light leading-relaxed">
                    {steps[activeStep].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. MOBILE / TABLET VIEWPORT LAYOUT (max-width: 1023px) - Static visual timeline */}
      {/* ========================================================================= */}
      <div className="lg:hidden w-full px-6 py-16 flex flex-col relative">
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[320px] h-[320px] bg-red-950/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Section Header */}
        <div className="mb-8 text-left">
          <span className="text-[10px] font-bold uppercase tracking-widest text-red-400 inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
            The Current Friction
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight mb-3">
            Nightlife forgets its customers<br />
            <span className="text-red-400">after every night.</span>
          </h2>
          <p className="text-gray-400 text-xs font-light leading-relaxed max-w-md">
            Premium bottles become wasted capital. No digital record, no ownership trail. See how the current cycle plays out across all 4 stages:
          </p>
        </div>

        {/* Stacked Stage Cards */}
        <div className="flex flex-col gap-6 w-full relative z-10">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="bg-brand-charcoal/40 border border-white/[0.04] rounded-2xl p-5 sm:p-6 relative overflow-hidden"
            >
              {/* Radial gradient background light */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-950/[0.04] rounded-full blur-3xl pointer-events-none" />
              
              {/* Card Header with Icon + Badge */}
              <div className="flex items-center gap-2 mb-3.5">
                <span className="p-1.5 rounded-xl bg-red-950/20 text-red-400 border border-red-500/10 shrink-0">
                  {step.icon}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-red-400">
                  {step.badge}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="font-display font-extrabold text-lg sm:text-xl text-white mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="text-gray-400 text-xs font-light leading-relaxed mb-6">
                {step.description}
              </p>

              {/* Centered Graphic Element */}
              <div className="flex justify-center items-center py-5 bg-[#0a0a0c] border border-white/[0.02] rounded-xl relative overflow-hidden h-52">
                {/* Visual VIP Table representation for mobile cards */}
                <div className="absolute -bottom-8 w-44 h-16 bg-[#16161c]/30 border border-white/[0.02] rounded-[50%] z-0" />
                <div className="relative z-10 flex items-center justify-center scale-90">
                  <BottleVisual step={idx} isMobile />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

const BottleVisual = ({ step, isMobile = false }: { step: number; isMobile?: boolean }) => {
  // For mobile, return static fully visible layout to bypass any Framer Motion viewport bugs in static loops
  if (isMobile) {
    switch (step) {
      case 0:
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 100 250" className="w-16 h-48 drop-shadow-[0_0_24px_rgba(245,196,83,0.35)]">
              <rect x="40" y="18" width="20" height="38" rx="3" fill="#1b1b22" stroke="rgba(245,196,83,0.6)" strokeWidth="1.5"/>
              <path d="M25 56 Q20 78 20 118 L20 218 Q20 233 50 233 Q80 233 80 218 L80 118 Q80 78 75 56Z" fill="#1b1b22" stroke="rgba(245,196,83,0.6)" strokeWidth="1.5"/>
              <path d="M22 98 Q20 108 20 128 L20 218 Q20 230 50 230 Q80 230 80 218 L80 128 Q80 108 78 98Z" fill="oklch(82.26% 0.11 86.42)" opacity="0.85"/>
              <rect x="30" y="108" width="40" height="56" rx="2" fill="#fff" opacity="0.08"/>
              <text x="50" y="142" textAnchor="middle" fontSize="5.5" fill="#fef08a" fontWeight="bold">PREMIUM</text>
            </svg>
            <div className="mt-2 text-[8px] text-brand-gold font-bold uppercase tracking-widest bg-brand-gold/10 border border-brand-gold/20 px-2.5 py-0.5 rounded-full">Full · ₹12,000 paid</div>
          </div>
        );
      case 1:
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 100 250" className="w-16 h-48 drop-shadow-[0_0_16px_rgba(239,68,68,0.25)]">
              <rect x="40" y="18" width="20" height="38" rx="3" fill="#1b1b22" stroke="rgba(239,68,68,0.4)" strokeWidth="1.5"/>
              <path d="M25 56 Q20 78 20 118 L20 218 Q20 233 50 233 Q80 233 80 218 L80 118 Q80 78 75 56Z" fill="#1b1b22" stroke="rgba(239,68,68,0.4)" strokeWidth="1.5"/>
              <path d="M20 158 L20 218 Q20 230 50 230 Q80 230 80 218 L80 158Z" fill="oklch(82.26% 0.11 86.42)" opacity="0.65"/>
              <line x1="20" y1="158" x2="80" y2="158" stroke="rgba(239,68,68,0.5)" strokeWidth="1" strokeDasharray="3 2"/>
            </svg>
            <div className="mt-2 text-[8px] text-red-400 font-bold uppercase tracking-widest bg-red-950/30 border border-red-500/20 px-2.5 py-0.5 rounded-full">Half consumed — 1 AM</div>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col items-center relative">
            <svg viewBox="0 0 100 250" className="w-16 h-48 opacity-20">
              <rect x="40" y="18" width="20" height="38" rx="3" fill="none" stroke="#fff" strokeWidth="1.5" strokeDasharray="4 3"/>
              <path d="M25 56 Q20 78 20 118 L20 218 Q20 233 50 233 Q80 233 80 218 L80 118 Q80 78 75 56Z" fill="none" stroke="#fff" strokeWidth="1.5" strokeDasharray="4 3"/>
              <line x1="14" y1="118" x2="86" y2="118" stroke="#ef4444" strokeWidth="2" opacity="0.8"/>
            </svg>
            <div className="mt-2 text-[8px] text-red-500 font-bold uppercase tracking-widest bg-red-950/40 border border-red-500/20 px-2.5 py-0.5 rounded-full">No record. No proof.</div>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col items-center">
            <div className="w-36 bg-white text-gray-800 rounded-xl shadow-2xl overflow-hidden">
              <div className="bg-gray-100 px-3 py-1.5 border-b border-gray-200">
                <div className="text-[8px] font-bold uppercase tracking-wide text-gray-500">Club Invoice</div>
                <div className="text-[7px] text-gray-400">Return visit · 2 weeks later</div>
              </div>
              <div className="px-3 py-2 space-y-1">
                <div className="flex justify-between text-[9px] font-semibold">
                  <span>6 Pegs JW Black</span><span>₹9,000</span>
                </div>
                <div className="flex justify-between text-[7px] text-gray-500">
                  <span>Service charge</span><span>₹900</span>
                </div>
                <div className="flex justify-between text-[7px] text-gray-500">
                  <span>Excise + tax</span><span>₹1,800</span>
                </div>
                <div className="border-t border-dashed border-gray-300 pt-1 flex justify-between font-black text-red-600 text-[10px]">
                  <span>Total</span><span>₹11,700</span>
                </div>
              </div>
            </div>
            <div className="mt-2 text-[8px] text-red-400 font-bold uppercase tracking-widest text-glow-red text-center px-2 leading-tight">+25% markup on pegs you already bought</div>
          </div>
        );
      default:
        return null;
    }
  }

  // For desktop, render premium AnimatePresence-compatible motion.div layouts
  switch (step) {
    case 0:
      return (
        <motion.div key="s0" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }} className="flex flex-col items-center">
          <svg viewBox="0 0 100 250" className="w-16 h-48 drop-shadow-[0_0_24px_rgba(245,196,83,0.35)]">
            <rect x="40" y="18" width="20" height="38" rx="3" fill="#1b1b22" stroke="rgba(245,196,83,0.6)" strokeWidth="1.5"/>
            <path d="M25 56 Q20 78 20 118 L20 218 Q20 233 50 233 Q80 233 80 218 L80 118 Q80 78 75 56Z" fill="#1b1b22" stroke="rgba(245,196,83,0.6)" strokeWidth="1.5"/>
            <path d="M22 98 Q20 108 20 128 L20 218 Q20 230 50 230 Q80 230 80 218 L80 128 Q80 108 78 98Z" fill="oklch(82.26% 0.11 86.42)" opacity="0.85"/>
            <rect x="30" y="108" width="40" height="56" rx="2" fill="#fff" opacity="0.08"/>
            <text x="50" y="142" textAnchor="middle" fontSize="5.5" fill="#fef08a" fontWeight="bold">PREMIUM</text>
          </svg>
          <div className="mt-2 text-[8px] text-brand-gold font-bold uppercase tracking-widest bg-brand-gold/10 border border-brand-gold/20 px-2.5 py-0.5 rounded-full">Full · ₹12,000 paid</div>
        </motion.div>
      );
    case 1:
      return (
        <motion.div key="s1" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }} className="flex flex-col items-center">
          <svg viewBox="0 0 100 250" className="w-16 h-48 drop-shadow-[0_0_16px_rgba(239,68,68,0.25)]">
            <rect x="40" y="18" width="20" height="38" rx="3" fill="#1b1b22" stroke="rgba(239,68,68,0.4)" strokeWidth="1.5"/>
            <path d="M25 56 Q20 78 20 118 L20 218 Q20 233 50 233 Q80 233 80 218 L80 118 Q80 78 75 56Z" fill="#1b1b22" stroke="rgba(239,68,68,0.4)" strokeWidth="1.5"/>
            <path d="M20 158 L20 218 Q20 230 50 230 Q80 230 80 218 L80 158Z" fill="oklch(82.26% 0.11 86.42)" opacity="0.65"/>
            <line x1="20" y1="158" x2="80" y2="158" stroke="rgba(239,68,68,0.5)" strokeWidth="1" strokeDasharray="3 2"/>
          </svg>
          <div className="mt-2 text-[8px] text-red-400 font-bold uppercase tracking-widest bg-red-950/30 border border-red-500/20 px-2.5 py-0.5 rounded-full">Half consumed — 1 AM</div>
        </motion.div>
      );
    case 2:
      return (
        <motion.div key="s2" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.4 }} className="flex flex-col items-center relative">
          <svg viewBox="0 0 100 250" className="w-16 h-48 opacity-20">
            <rect x="40" y="18" width="20" height="38" rx="3" fill="none" stroke="#fff" strokeWidth="1.5" strokeDasharray="4 3"/>
            <path d="M25 56 Q20 78 20 118 L20 218 Q20 233 50 233 Q80 233 80 218 L80 118 Q80 78 75 56Z" fill="none" stroke="#fff" strokeWidth="1.5" strokeDasharray="4 3"/>
            <line x1="14" y1="118" x2="86" y2="118" stroke="#ef4444" strokeWidth="2" opacity="0.8"/>
          </svg>
          <div className="mt-2 text-[8px] text-red-500 font-bold uppercase tracking-widest bg-red-950/40 border border-red-500/20 px-2.5 py-0.5 rounded-full">No record. No proof.</div>
        </motion.div>
      );
    case 3:
      return (
        <motion.div key="s3" initial={{ opacity: 0, y: 15, rotate: -2 }} animate={{ opacity: 1, y: 0, rotate: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col items-center">
          <div className="w-36 bg-white text-gray-800 rounded-xl shadow-2xl overflow-hidden">
            <div className="bg-gray-100 px-3 py-1.5 border-b border-gray-200">
              <div className="text-[8px] font-bold uppercase tracking-wide text-gray-500">Club Invoice</div>
              <div className="text-[7px] text-gray-400">Return visit · 2 weeks later</div>
            </div>
            <div className="px-3 py-2 space-y-1">
              <div className="flex justify-between text-[9px] font-semibold">
                <span>6 Pegs JW Black</span><span>₹9,000</span>
              </div>
              <div className="flex justify-between text-[7px] text-gray-500">
                <span>Service charge</span><span>₹900</span>
              </div>
              <div className="flex justify-between text-[7px] text-gray-500">
                <span>Excise + tax</span><span>₹1,800</span>
              </div>
              <div className="border-t border-dashed border-gray-300 pt-1 flex justify-between font-black text-red-600 text-[10px]">
                <span>Total</span><span>₹11,700</span>
              </div>
            </div>
          </div>
          <div className="mt-2 text-[8px] text-red-400 font-bold uppercase tracking-widest text-glow-red text-center px-2 leading-tight">+25% markup on pegs you already bought</div>
        </motion.div>
      );
    default:
      return null;
  }
};