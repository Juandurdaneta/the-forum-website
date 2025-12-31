"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { HOW_IT_WORKS } from "@/lib/constants";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-peach to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-brand-bronze font-medium text-sm tracking-wider uppercase mb-4 block">
            The Process
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-brand-black mb-4">
            {HOW_IT_WORKS.title}
          </h2>
          <p className="text-xl text-brand-slate">
            {HOW_IT_WORKS.subtitle}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {HOW_IT_WORKS.steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connector line */}
              {index < HOW_IT_WORKS.steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[calc(100%-20%)] h-0.5 bg-gradient-to-r from-brand-bronze/40 to-brand-bronze/10" />
              )}
              
              <div className="relative bg-white rounded-2xl p-8 border border-border hover:border-brand-bronze/30 transition-all duration-300 card-lift">
                {/* Number */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-peach mb-6">
                  <span className="font-heading text-2xl font-semibold text-brand-bronze">
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
          <Button size="lg" asChild>
            <Link href="#blueprint">Get The Free Content Blueprint</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
