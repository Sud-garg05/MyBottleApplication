"use client";

import { motion } from "framer-motion";
import { Star, Award, Compass, Zap } from "lucide-react";

export default function Identity() {
  const cards = [
    {
      title: "Nightlife Passport",
      subtitle: "Verified Visit Ledger",
      desc: "Every visit stamped. Every bottle recorded. A permanent historical record of your tastes and social footprint.",
      bg: "gold-card-gradient",
      glow: "glow-gold",
      accent: "text-brand-gold",
      icon: <Compass className="w-4 h-4 text-brand-gold" />,
      detail: (
        <div className="mt-4 border-t border-white/[0.04] pt-4 space-y-2">
          <div className="flex justify-between text-[9px] text-gray-500 font-bold uppercase tracking-wider">
            <span>Recent Stamps</span><span>Style</span>
          </div>
          {[
            { club: "Vapour Bangalore", style: "Single Malt" },
            { club: "Skyye Lounge", style: "Gin Botanical" },
            { club: "Social Indiranagar", style: "Craft Beer" },
          ].map((item, idx) => (
            <div key={idx} className="flex justify-between items-center text-xs">
              <span className="text-gray-400 font-medium">{item.club}</span>
              <span className="text-[9px] text-gray-600 bg-brand-gray border border-white/[0.03] px-2 py-0.5 rounded">{item.style}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "The Pour Score",
      subtitle: "Social Trust Rating",
      desc: "Your behavioral score unlocked by redemptions, consistency, and generous gifting. Higher scores unlock limited-edition drops.",
      bg: "teal-card-gradient",
      glow: "glow-teal",
      accent: "text-brand-teal",
      icon: <Zap className="w-4 h-4 text-brand-teal animate-bounce" />,
      detail: (
        <div className="mt-4 flex items-center justify-between bg-brand-black/40 border border-white/[0.03] p-3 rounded-xl">
          <div>
            <div className="text-[8px] uppercase font-bold text-gray-500">Active Rating</div>
            <div className="text-xl font-black text-white tracking-wider">940 / 1000</div>
          </div>
          <div className="text-right">
            <div className="text-[8px] uppercase font-bold text-gray-500">Tier</div>
            <div className="text-xs font-bold text-brand-teal uppercase tracking-widest">Legends</div>
          </div>
        </div>
      ),
    },
    {
      title: "Nightlife Tribes",
      subtitle: "Taste-Driven Circles",
      desc: "Auto-assigned to interest-based micro-communities. Coordinate tables, splits, and VIP drops with verified regulars.",
      bg: "gold-card-gradient",
      glow: "glow-gold",
      accent: "text-brand-gold",
      icon: <Award className="w-4 h-4 text-brand-gold" />,
      detail: (
        <div className="mt-4 space-y-2">
          <div className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">Your Active Tribes</div>
          <div className="flex flex-wrap gap-1.5">
            {["Single Malt Crew", "Indiranagar VIPs", "Techno Purists", "Rooftop Socials"].map((tribe, idx) => (
              <span key={idx} className="text-[9px] text-brand-gold bg-brand-gold/10 border border-brand-gold/20 px-2.5 py-0.5 rounded-full font-semibold">
                {tribe}
              </span>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="identity" className="relative bg-brand-black py-20 overflow-hidden border-b border-white/[0.02]">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] rounded-full bg-brand-teal/4 blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold mb-4 inline-flex items-center gap-2">
            <Star className="w-3.5 h-3.5 text-brand-gold animate-spin-slow" />
            Social Passport Layer
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight mt-3 mb-4">
            Your nights become<br />
            your <span className="text-brand-gold">permanent identity.</span>
          </h2>
          <p className="text-gray-400 font-light text-base max-w-xl mx-auto leading-relaxed">
            Not just ephemeral memories. A verified, portable nightlife graph that unlocks premium access, priority seating, and cultural standing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`rounded-2xl p-6 ${card.bg} ${card.glow} flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[9px] uppercase font-black tracking-widest text-gray-500">{card.subtitle}</span>
                  <div className="p-1.5 rounded-xl bg-brand-black/60 border border-white/[0.05]">{card.icon}</div>
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2">{card.title}</h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed">{card.desc}</p>
              </div>
              {card.detail}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 border border-white/[0.03] bg-brand-charcoal/20 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="max-w-sm">
            <div className="text-[9px] font-bold uppercase tracking-widest text-brand-teal mb-1">Live Activity Feed</div>
            <h4 className="text-lg font-bold text-white mb-1">The Nightlife Graph</h4>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              Every bottle split, serving gifted, or coordinate mapped into your live social graph. Verifies your standing with venues and brands.
            </p>
          </div>

          <div className="flex-1 max-w-md w-full h-20 flex items-center justify-around relative">
            <div className="absolute inset-x-0 h-px bg-gradient-to-r from-brand-teal/20 via-brand-gold/25 to-brand-teal/20 top-1/2 -translate-y-1/2 z-0" />
            {[
              { label: "Sudarshan Garg", status: "Active pour", glow: "glow-gold border-brand-gold/30" },
              { label: "Hargobind", status: "VIP Single Malt", glow: "glow-teal border-brand-teal/30" },
              { label: "Vapour Bangalore", status: "Host Venue", glow: "glow-gold border-brand-gold/30" },
            ].map((node, idx) => (
              <motion.div
                key={idx}
                animate={{ y: [0, idx % 2 === 0 ? 6 : -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }}
                className={`relative z-10 px-3 py-1.5 bg-brand-black border rounded-full text-center shadow-lg ${node.glow}`}
              >
                <div className="text-[9px] font-bold text-white leading-none mb-0.5">{node.label}</div>
                <div className="text-[7px] text-gray-500 uppercase tracking-widest leading-none font-semibold">{node.status}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}