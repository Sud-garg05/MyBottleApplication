"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, RefreshCw, BarChart3, ChevronRight } from "lucide-react";

export default function B2B() {
  const metrics = [
    {
      figure: "5x",
      label: "Visit Frequency",
      desc: "Users return up to 5 times to finish their reserved bottle rather than visiting once.",
      icon: <RefreshCw className="w-4 h-4 text-brand-teal" />,
    },
    {
      figure: "85%",
      label: "Retention Target",
      desc: "Industry average is 32%. Mehfil shifts the guest relationship permanently online.",
      icon: <Users className="w-4 h-4 text-brand-gold" />,
    },
    {
      figure: "+30%",
      label: "Midweek Revenue",
      desc: "Guaranteed redemptions stimulate midweek demand, protecting margins on dead inventory.",
      icon: <TrendingUp className="w-4 h-4 text-brand-teal" />,
    },
  ];

  return (
    <section id="for-clubs" className="relative bg-[#08080a] py-20 overflow-hidden border-b border-white/[0.02]">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-brand-gold/4 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-14">
          <div className="lg:col-span-7">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-teal mb-3 inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
              Mehfil for Venues
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mt-2">
              Turn dead inventory into<br />
              <span className="text-brand-teal">recurring revenue.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-gray-400 font-light text-sm leading-relaxed max-w-sm">
              Secure upfront payments, drive repeat visits, lock down premium guest loyalty. Mehfil converts one-off customers into lifelong relationships.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          <div className="lg:col-span-5 space-y-4">
            {metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-4 bg-brand-charcoal/40 border border-white/[0.03] p-5 rounded-2xl"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-black flex items-center justify-center border border-white/[0.04] shrink-0">
                  {metric.icon}
                </div>
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-2xl font-display font-black text-white">{metric.figure}</span>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{metric.label}</span>
                  </div>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">{metric.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-[#111116] border border-white/[0.05] rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          >
            <div className="flex justify-between items-center border-b border-white/[0.04] pb-4 mb-5">
              <div>
                <div className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">Mehfil Partner Dashboard</div>
                <div className="text-sm font-bold text-white mt-0.5">Vapour Lounge Indiranagar</div>
              </div>
              <div className="px-2.5 py-1 bg-brand-teal/10 border border-brand-teal/20 text-[9px] text-brand-teal rounded-full font-bold uppercase tracking-wider">
                Live Console
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-5">
              {[
                { title: "Net GMV", val: "₹4,82,000", change: "+18%" },
                { title: "Active Bottles", val: "142", change: "+24%" },
                { title: "Redemptions", val: "29 today", change: "Stable" },
              ].map((item, idx) => (
                <div key={idx} className="bg-brand-black/50 border border-white/[0.03] p-3 rounded-xl">
                  <div className="text-[8px] text-gray-500 font-bold uppercase tracking-wider">{item.title}</div>
                  <div className="text-sm font-bold text-white mt-1">{item.val}</div>
                  <div className="text-[8px] text-brand-teal font-semibold mt-0.5">{item.change}</div>
                </div>
              ))}
            </div>

            <div className="bg-brand-black/40 border border-white/[0.03] p-4 rounded-xl mb-4">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <BarChart3 className="w-3 h-3 text-brand-teal" /> Revenue vs Peg Sales
                </span>
                <span className="text-[8px] text-gray-600">Last 30 Days</span>
              </div>
              <div className="w-full h-24 relative">
                <svg viewBox="0 0 500 96" className="w-full h-full">
                  <defs>
                    <linearGradient id="b2b-chart-glow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.18"/>
                      <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  <line x1="0" y1="24" x2="500" y2="24" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
                  <line x1="0" y1="56" x2="500" y2="56" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
                  <path d="M0 80 Q80 64 150 32 T300 16 T450 8 L500 8" fill="none" stroke="#2dd4bf" strokeWidth="2" className="drop-shadow-[0_0_6px_rgba(45,212,191,0.5)]"/>
                  <path d="M0 80 Q80 64 150 32 T300 16 T450 8 L500 8 L500 96 L0 96Z" fill="url(#b2b-chart-glow)"/>
                  <line x1="0" y1="72" x2="500" y2="72" stroke="rgba(239,68,68,0.35)" strokeWidth="1.5" strokeDasharray="3 3"/>
                </svg>
                <div className="absolute top-3 right-3 text-[8px] uppercase tracking-wider text-brand-teal font-black">Mehfil Lift</div>
                <div className="absolute bottom-3 left-3 text-[8px] uppercase tracking-wider text-red-400/70 font-semibold">Peg Baseline</div>
              </div>
            </div>

            <div className="flex justify-between items-center text-xs">
              <span className="text-gray-500 text-[11px]">Want to run a pilot at your club?</span>
              <a href="#join" className="text-brand-gold font-bold uppercase tracking-wider flex items-center gap-1 text-[10px] hover:underline">
                Contact Sales <ChevronRight className="w-3 h-3"/>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}