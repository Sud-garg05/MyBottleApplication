"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Star } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-brand-black">
      {/* Ambient backdrop */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-radial-[circle_at_center,_var(--tw-gradient-stops)] from-brand-teal/5 via-brand-black/90 to-brand-black z-10" />

        <motion.div
          animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/5 w-96 h-96 rounded-full bg-brand-teal/10 blur-[120px] pointer-events-none"
        />
        <motion.div
          animate={{ x: [0, -40, 30, 0], y: [0, 30, -50, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-brand-gold/5 blur-[150px] pointer-events-none"
        />

        {/* City skyline silhouette */}
        <div className="absolute bottom-0 left-0 w-full h-[45vh] opacity-20 z-0 pointer-events-none">
          <svg className="w-full h-full object-cover" viewBox="0 0 1440 400" fill="none" preserveAspectRatio="none">
            <path d="M0 400V250H40V280H80V220H150V290H210V200H290V260H340V240H400V300H450V210H520V260H610V180H680V270H750V220H820V290H890V190H980V250H1050V230H1120V280H1190V200H1260V250H1320V210H1380V270H1440V400H0Z" fill="#0b0b0e"/>
            <circle cx="120" cy="180" r="1.5" fill="#fef08a" opacity="0.6" />
            <circle cx="250" cy="150" r="1" fill="#2dd4bf" opacity="0.8" />
            <circle cx="480" cy="120" r="2" fill="#fff" opacity="0.5" />
            <circle cx="650" cy="140" r="1.5" fill="#fef08a" opacity="0.7" />
            <circle cx="880" cy="160" r="1" fill="#fff" opacity="0.4" />
            <circle cx="1150" cy="130" r="2" fill="#2dd4bf" opacity="0.6" />
          </svg>
        </div>
      </div>

      {/* Floating social proof chips */}
      <div className="absolute top-[22%] right-[8%] z-20 pointer-events-none hidden lg:block">
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="bg-brand-charcoal/80 border border-white/[0.05] p-3.5 rounded-2xl flex items-center gap-3 shadow-[0_8px_24px_rgba(0,0,0,0.5)]"
        >
          <div className="w-9 h-9 rounded-full bg-brand-gold/15 flex items-center justify-center border border-brand-gold/20 shrink-0">
            <Star className="w-4 h-4 text-brand-gold" />
          </div>
          <div>
            <div className="text-[9px] text-gray-500 uppercase tracking-widest font-semibold">Verified Lounge</div>
            <div className="text-xs font-bold text-white">JW Black Label (Active)</div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-[28%] left-[7%] z-20 pointer-events-none hidden lg:block">
        <motion.div
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="bg-brand-charcoal/80 border border-white/[0.05] p-3.5 rounded-2xl flex items-center gap-3 shadow-[0_8px_24px_rgba(0,0,0,0.5)]"
        >
          <div className="w-9 h-9 rounded-full bg-brand-teal/15 flex items-center justify-center border border-brand-teal/20 shrink-0">
            <ShieldCheck className="w-4 h-4 text-brand-teal" />
          </div>
          <div>
            <div className="text-[9px] text-gray-500 uppercase tracking-widest font-semibold">Secure Wallet</div>
            <div className="text-xs font-bold text-white">Taste DNA: Single Malt</div>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-30 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-teal/20 bg-brand-teal/[0.04] text-brand-teal text-[10px] font-bold tracking-widest uppercase mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse" />
          mehfil.ing is live in Bangalore
        </motion.div>

        {/* Headline — ✅ FIX: removed gradient text (absolute ban), using solid color emphasis */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="font-display font-extrabold text-4xl sm:text-5xl md:text-7xl leading-[1.08] tracking-tight text-white mb-5 text-balance"
        >
          The Social, Identity{" "}
          <span className="text-brand-teal">&amp; Retention Layer</span>
          <br className="hidden md:inline" />
          {" "}for India&apos;s Nightlife
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-gray-400 font-light max-w-2xl leading-relaxed mb-10 text-balance"
        >
          Reserve premium bottles. Build your permanent nightlife identity.
          Unlock exclusive drops and belong to the culture.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
        >
          <Link
            href="#join"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold bg-brand-teal text-brand-black transition-transform duration-300 hover:scale-[1.03] hover:bg-white text-center text-sm"
          >
            Claim Your Username
          </Link>
          <Link
            href="#for-clubs"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold bg-brand-charcoal text-white border border-white/[0.08] hover:border-brand-gold/30 transition-transform duration-300 hover:scale-[1.03] text-center text-sm flex items-center justify-center gap-2 group"
          >
            Partner With Us
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-8 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] uppercase tracking-widest text-gray-600 font-bold">Scroll to Enter</span>
          <div className="w-5 h-8 border border-white/15 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-brand-teal"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}