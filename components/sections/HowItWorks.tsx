"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { HOW_IT_WORKS } from "@/lib/constants";
import { useInView } from "framer-motion";
import { useRef } from "react";

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

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-24 bg-brand-cream relative overflow-hidden">
      {/* Greek pattern top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-terracotta/40 to-transparent" />

      {/* Subtle background decorations */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-brand-terracotta/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-brand-gold/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-brand-terracotta font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
            The Process
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-brand-black mb-4">
            {HOW_IT_WORKS.title}
          </h2>
          <p className="text-xl text-brand-slate mb-6">
            {HOW_IT_WORKS.subtitle}
          </p>
          <GreekOrnament />
        </motion.div>

        {/* Steps with Greek medallion styling */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {HOW_IT_WORKS.steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connector line - Greek style */}
              {index < HOW_IT_WORKS.steps.length - 1 && (
                <div className="hidden md:block absolute top-14 left-[60%] w-[calc(100%-20%)] h-px bg-gradient-to-r from-brand-terracotta/50 to-brand-terracotta/10" />
              )}

              <div className="relative bg-brand-cream-dark/50 p-8 border border-brand-terracotta/20 hover:border-brand-terracotta/40 transition-all duration-300 card-lift">
                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-terracotta/40" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-brand-terracotta/40" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-brand-terracotta/40" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-brand-terracotta/40" />

                {/* Number - Greek medallion style */}
                <div className="relative inline-flex items-center justify-center w-16 h-16 mb-6">
                  <div className="absolute inset-0 border-2 border-brand-terracotta/60 rounded-full" />
                  <div className="absolute inset-2 border border-brand-terracotta/30 rounded-full" />
                  <span className="font-heading text-2xl font-semibold text-brand-terracotta">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-heading text-2xl font-semibold text-brand-black mb-3">
                  {step.title}
                </h3>
                <p className="text-brand-slate leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button size="lg" asChild className="rounded-none">
            <Link href="#blueprint">Get The Free Content Blueprint</Link>
          </Button>
        </motion.div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-terracotta/40 to-transparent" />
    </section>
  );
}
