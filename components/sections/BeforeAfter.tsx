"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { BEFORE_AFTER } from "@/lib/constants";
import { X, Check } from "lucide-react";

export function BeforeAfter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-gradient-to-b from-brand-peach/20 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <span className="text-brand-bronze font-medium text-sm tracking-wider uppercase mb-4 block">
            The Transformation
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-brand-black leading-tight">
            {BEFORE_AFTER.title}
          </h2>
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
            <div className="bg-white rounded-2xl p-8 border border-red-100 shadow-sm h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <X className="w-5 h-5 text-red-500" />
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
                    <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
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
            <div className="bg-gradient-to-br from-brand-peach/30 to-brand-peach/10 rounded-2xl p-8 border border-brand-bronze/20 shadow-sm h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-brand-bronze flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
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
                    <Check className="w-5 h-5 text-brand-bronze flex-shrink-0 mt-0.5" />
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
          <Button size="lg" asChild>
            <Link href="#blueprint">Get The Free Content Blueprint →</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
