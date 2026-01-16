"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { FAQ_HOME } from "@/lib/constants";
import { HelpCircle, ArrowRight } from "lucide-react";

// Greek Key Border Pattern
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
        <pattern id="faqGreekKey" x="0" y="0" width="30" height="24" patternUnits="userSpaceOnUse">
          <path
            d="M0 20V4h4v12h8V4h4v16h-4V8H8v12H0z"
            fill={color}
            fillOpacity="0.15"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#faqGreekKey)" />
    </svg>
  );
}

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-cream via-white to-brand-cream" />

      {/* Greek Key Border - Top */}
      <div className="absolute top-0 left-0 right-0 h-6 overflow-hidden z-10">
        <GreekKeyBorder className="w-full h-full" />
      </div>

      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.18, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-brand-terracotta/15 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.08, 0.15, 0.08]
        }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-1/4 left-0 w-[350px] h-[350px] bg-brand-gold/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 bg-brand-terracotta/10 text-brand-terracotta font-medium text-sm tracking-[0.15em] uppercase px-4 py-2 rounded-full mb-6">
              <HelpCircle className="w-4 h-4" />
              FAQ
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-brand-black mb-4">
              Common Questions
            </h2>
            <p className="text-xl text-brand-slate">
              &ldquo;But What If...&rdquo;
            </p>
          </motion.div>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion items={FAQ_HOME} />
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-brand-slate mb-6">Still have questions?</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="outline" size="lg" asChild className="rounded-full">
                <Link href="/pricing">
                  View Pricing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" asChild className="rounded-full shadow-lg hover:shadow-xl">
                <Link href="#blueprint">
                  Get The Free Blueprint
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Greek Key Border - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-6 overflow-hidden z-10">
        <GreekKeyBorder className="w-full h-full" />
      </div>
    </section>
  );
}
