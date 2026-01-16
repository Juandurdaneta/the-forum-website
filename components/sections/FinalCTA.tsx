"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { FINAL_CTA } from "@/lib/constants";
import { ArrowRight, Eye } from "lucide-react";

// Greek Key border component
function GreekKeyBorder({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <pattern id="greekKeyCTA" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
        <path
          d="M0 12h6v-6h6v6h-6v6h-6v-6zm12 0h6v-6h6v6h-6v6h-6v-6z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
      </pattern>
      <rect width="100%" height="100%" fill="url(#greekKeyCTA)" />
    </svg>
  );
}

export function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-brand-black relative overflow-hidden">
      {/* Background gradient with terracotta accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-black to-brand-terracotta/20" />

      {/* Greek key border top */}
      <div className="absolute top-0 left-0 right-0 h-6 text-brand-terracotta/40 overflow-hidden">
        <GreekKeyBorder className="w-full h-full" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-brand-terracotta/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-48 h-48 bg-brand-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative" ref={ref}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Greek ornament */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <svg className="w-20 h-10 text-brand-terracotta" viewBox="0 0 80 40" fill="none">
              <path d="M0 20h28" stroke="currentColor" strokeWidth="1" />
              <path d="M52 20h28" stroke="currentColor" strokeWidth="1" />
              <circle cx="40" cy="20" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="40" cy="20" r="4" fill="currentColor" />
            </svg>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl font-semibold text-white mb-6"
          >
            {FINAL_CTA.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-brand-slate mb-12 leading-relaxed max-w-2xl mx-auto"
          >
            {FINAL_CTA.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <div className="text-center">
              <Button size="xl" asChild className="rounded-none bg-brand-terracotta hover:bg-brand-terracotta-dark">
                <Link href="#blueprint">
                  Get The Free Content Blueprint
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <p className="text-brand-slate text-sm mt-3">
                Plan what to record before you record it
              </p>
            </div>

            <div className="text-center">
              <Button size="xl" variant="outline" className="rounded-none border-brand-terracotta/50 text-brand-terracotta hover:bg-brand-terracotta hover:text-white" asChild>
                <Link href="/pricing">
                  <Eye className="mr-2 h-5 w-5" />
                  Explore Studio Membership
                </Link>
              </Button>
              <p className="text-brand-slate text-sm mt-3">
                See packages, pricing & what&apos;s included
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Greek key border bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-6 text-brand-terracotta/40 overflow-hidden">
        <GreekKeyBorder className="w-full h-full" />
      </div>
    </section>
  );
}
