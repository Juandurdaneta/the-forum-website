"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { BEFORE_AFTER } from "@/lib/constants";
import { X, Check } from "lucide-react";

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

export function BeforeAfter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-brand-cream relative overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-terracotta/30 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <span className="text-brand-terracotta font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
            The Transformation
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-brand-black leading-tight mb-6">
            {BEFORE_AFTER.title}
          </h2>
          <GreekOrnament />
        </motion.div>

        {/* Comparison grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Before column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-brand-cream-dark/50 p-8 border border-brand-slate/20 h-full">
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-slate/40" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-brand-slate/40" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-brand-slate/40" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-brand-slate/40" />

              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-12 h-12">
                  <div className="absolute inset-0 border-2 border-brand-slate/50 rounded-full" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <X className="w-5 h-5 text-brand-slate" />
                  </div>
                </div>
                <h3 className="font-heading text-2xl font-semibold text-brand-black">
                  Before
                </h3>
              </div>
              <ul className="space-y-4">
                {BEFORE_AFTER.before.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <X className="w-5 h-5 text-brand-slate/70 flex-shrink-0 mt-0.5" />
                    <span className="text-brand-slate">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* After column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-brand-terracotta/10 p-8 border border-brand-terracotta/30 h-full">
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-terracotta/60" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-brand-terracotta/60" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-brand-terracotta/60" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-brand-terracotta/60" />

              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-12 h-12">
                  <div className="absolute inset-0 border-2 border-brand-terracotta rounded-full" />
                  <div className="absolute inset-2 border border-brand-terracotta/50 rounded-full" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Check className="w-5 h-5 text-brand-terracotta" />
                  </div>
                </div>
                <h3 className="font-heading text-2xl font-semibold text-brand-black">
                  After
                </h3>
              </div>
              <ul className="space-y-4">
                {BEFORE_AFTER.after.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 border border-brand-terracotta rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-brand-terracotta" />
                    </div>
                    <span className="text-brand-black font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button size="lg" asChild className="rounded-none">
            <Link href="#blueprint">Get The Free Content Blueprint</Link>
          </Button>
        </motion.div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-terracotta/30 to-transparent" />
    </section>
  );
}
