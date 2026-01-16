"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { MeanderBorder } from "@/components/ui/MeanderPattern";
import { HOW_IT_WORKS } from "@/lib/constants";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mic, Wand2, Share2 } from "lucide-react";

const stepIcons = [Mic, Wand2, Share2];

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-cream via-white to-brand-cream" />

      {/* Greek Key Border - Top */}
      <div className="absolute top-0 left-0 right-0 h-6 overflow-hidden z-10">
        <MeanderBorder className="w-full h-full" id="howItWorksMeander" />
      </div>

      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-brand-terracotta/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] bg-brand-gold/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-brand-terracotta/10 text-brand-terracotta font-medium text-sm tracking-[0.15em] uppercase px-4 py-2 rounded-full mb-6">
            Simple Process
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-brand-black mb-6">
            {HOW_IT_WORKS.title}
          </h2>
          <p className="text-xl text-brand-slate leading-relaxed">
            {HOW_IT_WORKS.subtitle}
          </p>
        </motion.div>

        {/* Steps - Horizontal timeline on desktop */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connector line - desktop only */}
          <div className="hidden md:block absolute top-24 left-[15%] right-[15%] h-1 bg-gradient-to-r from-brand-terracotta/20 via-brand-terracotta/40 to-brand-terracotta/20 rounded-full" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {HOW_IT_WORKS.steps.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative group"
                >
                  <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-brand-terracotta/10 hover:border-brand-terracotta/30 h-full">
                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-terracotta/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                    {/* Step number with icon */}
                    <div className="relative flex items-center justify-center mb-8">
                      <motion.div
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        className="relative"
                      >
                        {/* Outer ring */}
                        <div className="absolute -inset-3 border-2 border-dashed border-brand-terracotta/30 rounded-full" />
                        {/* Main circle */}
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-terracotta to-brand-terracotta-dark flex items-center justify-center shadow-lg">
                          {Icon && <Icon className="w-9 h-9 text-white" strokeWidth={1.5} />}
                        </div>
                        {/* Step number badge */}
                        <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-white border-2 border-brand-terracotta flex items-center justify-center shadow-md">
                          <span className="font-heading text-sm font-bold text-brand-terracotta">
                            {step.number}
                          </span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="text-center relative z-10">
                      <h3 className="font-heading text-2xl font-semibold text-brand-black mb-3 group-hover:text-brand-terracotta transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-brand-slate leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-brand-terracotta/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button size="lg" asChild className="rounded-full shadow-lg hover:shadow-xl">
            <Link href="#blueprint">
              Get The Free Content Blueprint
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Greek Key Border - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-6 overflow-hidden z-10">
        <MeanderBorder className="w-full h-full" id="howItWorksMeander" />
      </div>
    </section>
  );
}
