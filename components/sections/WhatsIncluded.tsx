"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { WHATS_INCLUDED } from "@/lib/constants";
import { Mic, Wand2, Calendar, Target } from "lucide-react";

const iconMap = {
  Mic: Mic,
  Wand2: Wand2,
  Calendar: Calendar,
  Target: Target,
};

// Greek ornament divider
function GreekOrnament() {
  return (
    <svg className="w-24 h-6 text-brand-terracotta mx-auto" viewBox="0 0 96 24" fill="none">
      <path d="M0 12h36" stroke="currentColor" strokeWidth="1" />
      <path d="M60 12h36" stroke="currentColor" strokeWidth="1" />
      <circle cx="48" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="48" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}

export function WhatsIncluded() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-brand-terracotta relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl" />

      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] roman-pattern" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <span className="text-brand-cream font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
            Membership Benefits
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mb-4">
            {WHATS_INCLUDED.title}
          </h2>
          <p className="text-xl text-brand-cream/90">{WHATS_INCLUDED.subtitle}</p>
        </motion.div>

        {/* Intro paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-brand-cream/80 text-center max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          {WHATS_INCLUDED.intro}
        </motion.p>

        {/* Features grid with medallion-style icons */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {WHATS_INCLUDED.features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-brand-cream/95 p-6 border border-brand-terracotta-dark/20 hover:bg-white transition-all duration-300 card-lift relative"
              >
                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-brand-terracotta/60" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-brand-terracotta/60" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-brand-terracotta/60" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-brand-terracotta/60" />

                {/* Medallion-style icon container */}
                <div className="relative w-16 h-16 mx-auto mb-5">
                  <div className="absolute inset-0 border-2 border-brand-terracotta rounded-full" />
                  <div className="absolute inset-2 border border-brand-terracotta/50 rounded-full" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {Icon && <Icon className="w-7 h-7 text-brand-terracotta" />}
                  </div>
                </div>

                <h3 className="font-heading text-xl font-semibold text-brand-black mb-2 text-center">
                  {feature.title}
                </h3>
                <p className="text-brand-slate text-sm leading-relaxed text-center">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button size="lg" asChild className="rounded-none bg-white text-brand-terracotta hover:bg-brand-cream border-2 border-white">
            <Link href="#blueprint">
              Get The Free Content Blueprint
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
