"use client";

import { motion } from "framer-motion";
import { Users2, MapPin, Sparkles, MessageSquare } from "lucide-react";

export default function Community() {
  const hotspots = [
    { name: "Indiranagar Circle", activeUsers: "420+", status: "High density", coords: { x: "32%", y: "38%" } },
    { name: "Koramangala Hub", activeUsers: "310+", status: "Peak hours", coords: { x: "24%", y: "62%" } },
    { name: "Lavelle Road VIP", activeUsers: "190+", status: "Exclusive", coords: { x: "60%", y: "28%" } },
  ];

  const feeds = [
    { user: "Aravind K.", tribe: "Single Malt", action: "split a bottle of Balvenie 14", time: "2m ago", location: "Skyye Lounge" },
    { user: "Priya Sharma", tribe: "Gin Botanical", action: "gifted a serving of Hendricks", time: "10m ago", location: "Vapour Bangalore" },
    { user: "Nikhil D.", tribe: "Techno Purists", action: "coordinated table at Indiranagar", time: "25m ago", location: "Social Club" },
  ];

  return (
    <section id="community" className="relative bg-brand-black py-20 overflow-hidden border-b border-white/[0.02]">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-brand-teal/4 blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left: Copy + feed */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold mb-3 inline-flex items-center gap-2">
              <Users2 className="w-3.5 h-3.5 text-brand-gold animate-pulse" />
              Verified Nightlife Circles
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-4 mt-1">
              Where India&apos;s nightlife<br />
              community <span className="text-brand-gold">lives.</span>
            </h2>
            <p className="text-gray-400 font-light text-sm leading-relaxed mb-7 max-w-sm">
              Discover verified circles, coordinate VIP table bookings, split premium entitlements. A community built on proof of presence.
            </p>

            <div className="space-y-3">
              <div className="text-[9px] text-gray-500 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <MessageSquare className="w-3 h-3 text-brand-gold" /> Live Social Ledger
              </div>

              {feeds.map((feed, idx) => (
                <div key={idx} className="bg-brand-charcoal/30 border border-white/[0.03] p-3.5 rounded-xl flex justify-between items-start gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-white flex items-center gap-2 flex-wrap">
                      {feed.user}
                      <span className="text-[8px] text-brand-gold bg-brand-gold/15 px-1.5 py-0.5 rounded uppercase font-semibold shrink-0">{feed.tribe}</span>
                    </div>
                    <p className="text-xs text-gray-400 font-light mt-0.5 truncate">
                      {feed.action} at <span className="font-semibold text-white">{feed.location}</span>
                    </p>
                  </div>
                  <span className="text-[9px] text-gray-600 font-bold uppercase tracking-wider shrink-0">{feed.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-[#111117] border border-white/[0.05] rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] h-[420px] relative flex flex-col justify-between overflow-hidden"
          >
            <div className="flex justify-between items-center z-10">
              <div>
                <div className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">Live Map Overlay</div>
                <div className="text-sm font-bold text-white flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-teal" /> Bangalore Hotspots
                </div>
              </div>
              <span className="px-2.5 py-1 bg-brand-teal/15 border border-brand-teal/25 text-[9px] text-brand-teal rounded-full font-bold uppercase tracking-wider">
                921 Active Now
              </span>
            </div>

            {/* Map grid overlay */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-30">
              <svg viewBox="0 0 600 400" className="w-full h-full">
                <path d="M50 150 Q120 80 200 200 T450 150 T600 250" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="2"/>
                <path d="M100 350 Q180 200 300 300 T550 100" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="2"/>
                <path d="M0 250 Q200 150 400 350" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="2"/>
                <path d="M192 152 L144 248 L330 96Z" fill="none" stroke="rgba(45,212,191,0.07)" strokeWidth="1.5"/>
              </svg>
            </div>

            {/* Hotspot nodes */}
            {hotspots.map((spot, idx) => (
              <motion.div
                key={idx}
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: idx * 0.8 }}
                style={{ left: spot.coords.x, top: spot.coords.y }}
                className="absolute z-10 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2.5 bg-brand-black/90 border border-white/[0.06] px-3 py-2 rounded-2xl shadow-xl"
              >
                <div className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-70" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-teal" />
                </div>
                <div>
                  <div className="text-[9px] font-bold text-white leading-none mb-0.5">{spot.name}</div>
                  <div className="text-[7px] text-gray-500 uppercase tracking-widest leading-none font-semibold">{spot.activeUsers} · {spot.status}</div>
                </div>
              </motion.div>
            ))}

            <div className="flex justify-between items-center z-10 mt-auto border-t border-white/[0.04] pt-3">
              <span className="text-[8px] uppercase tracking-wider text-gray-500 flex items-center gap-1 font-semibold">
                <Sparkles className="w-3 h-3 text-brand-gold" /> System: Normal
              </span>
              <span className="text-[8px] text-brand-gold uppercase tracking-wider font-bold">Drop Release: In 14 hrs</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}