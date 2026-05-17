"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "Identity", href: "#identity" },
    { name: "For Clubs", href: "#for-clubs" },
    { name: "Community", href: "#community" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-12 md:py-6 transition-all duration-300"
      >
        <div 
          className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-3.5 rounded-full transition-all duration-300 ${
            isScrolled 
              ? "backdrop-blur-lg bg-brand-black/85 border border-brand-teal/20 shadow-[0_12px_40px_rgba(45,212,191,0.15)]" 
              : "backdrop-blur-md bg-brand-black/40 border border-white/[0.04] shadow-[0_8px_32px_rgba(5,5,6,0.5)]"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-display font-extrabold text-xl tracking-tight text-white transition-colors group-hover:text-brand-teal">
              mehfil<span className="text-brand-teal group-hover:text-white">.ing</span>
            </span>
          </Link>

          {/* Navigation Links - Hidden on Mobile */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* CTA Button */}
            <Link
              href="#join"
              className="relative inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-brand-black bg-brand-gold rounded-full transition-transform duration-300 hover:scale-105 active:scale-95 text-glow-gold hover:bg-white"
            >
              Get Early Access
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Hamburger Button (Mobile only) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none transition-colors cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Slide-Down Drawer Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-brand-black/95 backdrop-blur-xl pt-28 px-6 flex flex-col justify-between pb-12 md:hidden"
          >
            <div className="flex flex-col gap-6 mt-8">
              <span className="text-[10px] uppercase font-bold tracking-widest text-brand-gold border-b border-white/5 pb-2">
                Navigation Menu
              </span>
              {navLinks.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={link.name}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-display font-bold text-white hover:text-brand-teal transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="space-y-4">
              <Link
                href="#join"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 bg-brand-teal text-brand-black font-bold uppercase tracking-widest text-xs rounded-xl flex items-center justify-center gap-2 text-glow-teal cursor-pointer"
              >
                Claim Username
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <div className="text-[10px] text-gray-600 text-center uppercase tracking-widest font-semibold">
                Bangalore Nightlife Layer
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}