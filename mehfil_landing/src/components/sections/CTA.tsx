"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Star, Send, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", username: "", role: "customer" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Full name is required.";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errs.email = "A valid email address is required.";
    if (!formData.username.trim() || formData.username.length < 3)
      errs.username = "Username must be at least 3 characters.";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setFormSubmitted(true);
  };

  return (
    <section id="join" className="relative bg-brand-black pt-20 pb-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-brand-gold/8 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-brand-teal/4 rounded-full blur-[150px] pointer-events-none z-0" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        <div className="max-w-xl mx-auto text-center mb-10 flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold uppercase tracking-widest text-brand-gold mb-3 inline-flex items-center gap-2"
          >
            <Star className="w-3.5 h-3.5 text-brand-gold animate-pulse" />
            Limited Early Access
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.08] mb-4"
          >
            Your Night.<br />
            Your People. <span className="text-brand-gold text-glow-gold">Your Bottle.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 font-light text-sm sm:text-base max-w-md leading-relaxed"
          >
            Invitation-only. Secure your premium username to be first when we launch across Bangalore&apos;s premier clubs.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-md mx-auto bg-brand-charcoal/40 border border-white/[0.05] p-7 rounded-2xl shadow-2xl"
        >
          <AnimatePresence mode="wait">
            {!formSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                onSubmit={handleSubmit}
                className="space-y-4 text-left"
                noValidate
              >
                <div>
                  <label className="block text-[9px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">Full Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Sudarshan Garg"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full bg-brand-black border ${errors.name ? "border-red-500/50" : "border-white/[0.07]"} focus:border-brand-gold/40 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors placeholder:text-gray-700`}
                  />
                  {errors.name && <p className="text-red-400 text-[9px] mt-1 font-semibold">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-[9px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">Claim Username</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gold text-sm font-bold select-none">@</span>
                    <input
                      type="text"
                      placeholder="yourhandle"
                      value={formData.username}
                      onChange={(e) => setFormData({ ...formData, username: e.target.value.toLowerCase().replace(/[^a-z0-9_.]/g, "") })}
                      className={`w-full bg-brand-black border ${errors.username ? "border-red-500/50" : "border-white/[0.07]"} focus:border-brand-gold/40 rounded-xl pl-8 pr-4 py-3 text-sm text-white focus:outline-none transition-colors placeholder:text-gray-700 font-mono`}
                    />
                  </div>
                  {errors.username && <p className="text-red-400 text-[9px] mt-1 font-semibold">{errors.username}</p>}
                </div>

                <div>
                  <label className="block text-[9px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    placeholder="e.g. sudarshan@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full bg-brand-black border ${errors.email ? "border-red-500/50" : "border-white/[0.07]"} focus:border-brand-gold/40 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors placeholder:text-gray-700`}
                  />
                  {errors.email && <p className="text-red-400 text-[9px] mt-1 font-semibold">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-[9px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">I am signing up as</label>
                  <div className="relative">
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full bg-brand-black border border-white/[0.07] focus:border-brand-gold/40 rounded-xl px-4 py-3 pr-10 text-sm text-gray-300 focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="customer">Premium Customer</option>
                      <option value="club">Club Partner / Owner</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-brand-gold text-brand-black font-bold uppercase tracking-widest text-xs rounded-xl flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] hover:bg-white cursor-pointer mt-1"
                >
                  Join the Waitlist
                  <Send className="w-3.5 h-3.5" />
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="py-8 flex flex-col items-center justify-center text-center space-y-4"
              >
                <CheckCircle2 className="w-14 h-14 text-brand-teal drop-shadow-[0_0_12px_rgba(45,212,191,0.4)] animate-bounce" />
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">You&apos;re in the Mehfil.</h4>
                  <p className="text-sm text-gray-400 font-light max-w-xs leading-relaxed">
                    Welcome, <span className="font-semibold text-white">{formData.name}</span>. Username{" "}
                    <span className="text-brand-gold font-bold font-mono">@{formData.username}</span> is reserved.
                    We&apos;ll notify <span className="text-white font-semibold">{formData.email}</span> on launch day.
                  </p>
                </div>
                <button
                  onClick={() => { setFormSubmitted(false); setFormData({ name: "", email: "", username: "", role: "customer" }); }}
                  className="text-[9px] text-gray-600 hover:text-gray-300 uppercase tracking-widest font-semibold transition-colors cursor-pointer"
                >
                  Register another
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Footer */}
        <footer className="border-t border-white/[0.04] pt-12 mt-14 text-xs text-gray-500">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-10">

            <div className="md:col-span-5 space-y-2">
              <span className="font-display font-extrabold text-base text-white">
                mehfil<span className="text-brand-teal">.ing</span>
              </span>
              <p className="font-light text-gray-500 max-w-xs leading-relaxed text-xs">
                The social, identity, and retention infrastructure of modern nightlife. Stamped in Bangalore, India.
              </p>
            </div>

            <div className="md:col-span-3 space-y-2">
              <div className="text-[9px] uppercase font-bold text-white tracking-widest mb-3">The Platform</div>
              {[
                { label: "Passport Identity", href: "#identity" },
                { label: "B2B Dashboard", href: "#for-clubs" },
                { label: "Community Map", href: "#community" },
              ].map((link, idx) => (
                <Link key={idx} href={link.href} className="block text-gray-500 hover:text-white transition-colors">{link.label}</Link>
              ))}
            </div>

            <div className="md:col-span-4 space-y-2">
              <div className="text-[9px] uppercase font-bold text-white tracking-widest mb-3">Regulatory</div>
              <p className="text-[10px] text-gray-600 leading-relaxed font-light">
                Mehfil is a pure-play technology, wallet, and identity platform. It does not sell, distribute, or own alcohol. All spirits are legally owned and served by licensed hospitality venues. Age-verified 21+ only.
              </p>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center border-t border-white/[0.02] pt-6 font-light text-gray-600">
            <span>&copy; 2026 Mehfil.ing. All rights reserved.</span>
            <div className="flex gap-5 mt-3 sm:mt-0">
              {["Instagram", "Twitter", "LinkedIn"].map((s) => (
                <span key={s} className="hover:text-white transition-colors cursor-pointer">{s}</span>
              ))}
            </div>
          </div>
        </footer>

      </div>
    </section>
  );
}