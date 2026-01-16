"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { FAQ_HOME } from "@/lib/constants";

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

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-brand-cream relative overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-terracotta/30 to-transparent" />

      {/* Decorative elements */}
      <div className="absolute top-1/3 right-0 w-48 h-48 bg-brand-terracotta/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8" ref={ref}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-brand-terracotta font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
              FAQ
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-brand-black mb-4">
              Common Questions
            </h2>
            <p className="text-xl text-brand-slate italic mb-6">
              &ldquo;But What If...&rdquo;
            </p>
            <GreekOrnament />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Greek-style container border */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-brand-terracotta/30" />
            <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-brand-terracotta/30" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-brand-terracotta/30" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-brand-terracotta/30" />

            <Accordion items={FAQ_HOME} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg" asChild className="rounded-none">
              <Link href="/pricing">Learn More</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-terracotta/30 to-transparent" />
    </section>
  );
}
