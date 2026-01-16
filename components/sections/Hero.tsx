"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { HERO_CONTENT } from "@/lib/constants";
import { ArrowRight, Play } from "lucide-react";

// Greek Key SVG pattern component
function GreekKeyBorder({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <pattern id="greekKey" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
        <path
          d="M0 12h6v-6h6v6h-6v6h-6v-6zm12 0h6v-6h6v6h-6v6h-6v-6z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
      </pattern>
      <rect width="100%" height="100%" fill="url(#greekKey)" />
    </svg>
  );
}

// Decorative column SVG
function GreekColumn({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="15" width="50" height="170" fill="currentColor" fillOpacity="0.1" />
      <rect x="0" y="0" width="60" height="15" fill="currentColor" fillOpacity="0.15" />
      <rect x="0" y="185" width="60" height="15" fill="currentColor" fillOpacity="0.15" />
      <line x1="15" y1="15" x2="15" y2="185" stroke="currentColor" strokeOpacity="0.2" />
      <line x1="30" y1="15" x2="30" y2="185" stroke="currentColor" strokeOpacity="0.2" />
      <line x1="45" y1="15" x2="45" y2="185" stroke="currentColor" strokeOpacity="0.2" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-cream">
      {/* Background with subtle terracotta gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-cream via-brand-cream to-brand-cream-dark/50" />

      {/* Decorative terracotta elements */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand-terracotta/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-brand-gold/10 rounded-full blur-3xl" />

      {/* Greek pattern texture overlay */}
      <div className="absolute inset-0 roman-pattern" />

      {/* Greek columns decoration - left */}
      <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 text-brand-terracotta opacity-20">
        <GreekColumn className="w-12 h-48" />
      </div>

      {/* Greek columns decoration - right */}
      <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 text-brand-terracotta opacity-20">
        <GreekColumn className="w-12 h-48" />
      </div>

      {/* Top Greek key border */}
      <div className="absolute top-0 left-0 right-0 h-6 text-brand-terracotta/30 overflow-hidden">
        <GreekKeyBorder className="w-full h-full" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 pt-32 pb-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge with Greek styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-brand-terracotta/10 border border-brand-terracotta/30 rounded-none px-5 py-2.5 mb-8"
          >
            <span className="w-2 h-2 bg-brand-terracotta rounded-full animate-pulse" />
            <span className="text-sm font-medium text-brand-black tracking-wide uppercase">
              Now accepting founding members
            </span>
          </motion.div>

          {/* Greek ornament above headline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="flex justify-center mb-6"
          >
            <svg className="w-16 h-8 text-brand-terracotta" viewBox="0 0 64 32" fill="none">
              <path d="M32 0L40 8L32 16L24 8L32 0Z" fill="currentColor" fillOpacity="0.3" />
              <path d="M0 16h24M40 16h24" stroke="currentColor" strokeWidth="1" />
              <circle cx="32" cy="16" r="4" fill="currentColor" fillOpacity="0.5" />
            </svg>
          </motion.div>

          {/* Headline with Greek styling */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-brand-black leading-[1.1] mb-6"
          >
            <span className="block text-lg sm:text-xl md:text-2xl font-normal tracking-[0.3em] text-brand-terracotta mb-2 uppercase">
              The Forum Presents
            </span>
            {HERO_CONTENT.headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-brand-slate max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {HERO_CONTENT.subheadline}
          </motion.p>

          {/* CTAs with Greek-inspired styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="xl" asChild className="rounded-none">
              <Link href="#blueprint">
                {HERO_CONTENT.primaryCta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="lg" asChild className="rounded-none border border-brand-terracotta/30 hover:bg-brand-terracotta/10">
              <Link href="#how-it-works" className="group">
                <Play className="mr-2 h-4 w-4 text-brand-terracotta group-hover:scale-110 transition-transform" />
                {HERO_CONTENT.secondaryCta}
              </Link>
            </Button>
          </motion.div>

          {/* Trust indicators with medallion style */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-brand-slate"
          >
            {[
              "Professional equipment included",
              "Post-production handled",
              "No long-term contracts"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border-2 border-brand-terracotta/40 flex items-center justify-center">
                  <svg className="w-4 h-4 text-brand-terracotta" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Greek key border */}
      <div className="absolute bottom-0 left-0 right-0 h-6 text-brand-terracotta/30 overflow-hidden">
        <GreekKeyBorder className="w-full h-full" />
      </div>

      {/* Scroll indicator with Greek styling */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-8 h-12 border-2 border-brand-terracotta/40 rounded-none flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-2 h-2 bg-brand-terracotta rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
