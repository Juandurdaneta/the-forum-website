"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { FINAL_CTA } from "@/lib/constants";
import { ArrowRight, Eye, Sparkles } from "lucide-react";

// Greek Key border component
function GreekKeyBorder({ className = "", color = "#C47A2B" }: { className?: string; color?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="finalCtaGreekKey" x="0" y="0" width="30" height="24" patternUnits="userSpaceOnUse">
          <path
            d="M0 20V4h4v12h8V4h4v16h-4V8H8v12H0z"
            fill={color}
            fillOpacity="0.2"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#finalCtaGreekKey)" />
    </svg>
  );
}

export function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-black to-brand-terracotta/30" />

      {/* Greek key border top */}
      <div className="absolute top-0 left-0 right-0 h-6 overflow-hidden z-10">
        <GreekKeyBorder className="w-full h-full" />
      </div>

      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-terracotta/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-brand-terracotta/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-brand-terracotta" />
              <span className="text-sm font-medium text-white/90 tracking-wide">Ready to Start?</span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight"
          >
            {FINAL_CTA.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 mb-12 leading-relaxed max-w-2xl mx-auto"
          >
            {FINAL_CTA.body}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <div className="text-center">
              <Button
                size="xl"
                asChild
                className="rounded-full shadow-xl hover:shadow-2xl bg-brand-terracotta hover:bg-brand-terracotta-dark"
              >
                <Link href="#blueprint">
                  Get The Free Content Blueprint
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <p className="text-white/50 text-sm mt-3">
                Plan what to record before you record it
              </p>
            </div>

            <div className="text-center">
              <Button
                size="xl"
                variant="outline"
                className="rounded-full border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                asChild
              >
                <Link href="/pricing">
                  <Eye className="mr-2 h-5 w-5" />
                  Explore Studio Membership
                </Link>
              </Button>
              <p className="text-white/50 text-sm mt-3">
                See packages, pricing & what&apos;s included
              </p>
            </div>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-8 mt-16 text-white/50 text-sm"
          >
            {["No contracts", "Cancel anytime", "Equipment included"].map((text, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-terracotta" />
                <span>{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Greek key border bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-6 overflow-hidden z-10">
        <GreekKeyBorder className="w-full h-full" />
      </div>
    </section>
  );
}
