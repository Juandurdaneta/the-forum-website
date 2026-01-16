"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { GreekKeyBorder } from "@/components/ui/MeanderPattern";
import { BEFORE_AFTER } from "@/lib/constants";
import { X, Check, ArrowRight, Frown, Smile } from "lucide-react";

export function BeforeAfter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-cream via-white to-brand-cream" />

      {/* Greek Key Border - Top */}
      <div className="absolute top-0 left-0 right-0 h-10 overflow-hidden z-10">
        <GreekKeyBorder className="w-full h-full" id="beforeAfterMeander" />
      </div>

      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/3 -left-32 w-[400px] h-[400px] bg-brand-slate/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-1/3 -right-32 w-[500px] h-[500px] bg-brand-terracotta/15 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-brand-terracotta/10 text-brand-terracotta font-medium text-sm tracking-[0.15em] uppercase px-4 py-2 rounded-full mb-6">
            The Transformation
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-brand-black leading-tight mb-6">
            {BEFORE_AFTER.title}
          </h2>
        </motion.div>

        {/* Comparison grid - modern card design */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Before column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group"
          >
            <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-brand-slate/10 h-full overflow-hidden">
              {/* Header with icon */}
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-14 h-14 rounded-2xl bg-brand-slate/10 flex items-center justify-center"
                >
                  <Frown className="w-7 h-7 text-brand-slate" strokeWidth={1.5} />
                </motion.div>
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-brand-black">
                    Before
                  </h3>
                  <p className="text-brand-slate text-sm">Without The Forum</p>
                </div>
              </div>

              <ul className="space-y-4">
                {BEFORE_AFTER.before.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                    className="flex items-start gap-3 group/item"
                  >
                    <div className="w-6 h-6 rounded-full bg-brand-slate/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 text-brand-slate" />
                    </div>
                    <span className="text-brand-slate leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Subtle background gradient */}
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-brand-slate/5 rounded-full" />
            </div>
          </motion.div>

          {/* After column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group"
          >
            <div className="relative bg-gradient-to-br from-brand-terracotta/5 via-white to-brand-terracotta/10 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-brand-terracotta/20 hover:border-brand-terracotta/40 h-full overflow-hidden">
              {/* Header with icon */}
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-terracotta to-brand-terracotta-dark flex items-center justify-center shadow-lg"
                >
                  <Smile className="w-7 h-7 text-white" strokeWidth={1.5} />
                </motion.div>
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-brand-black">
                    After
                  </h3>
                  <p className="text-brand-terracotta text-sm font-medium">With The Forum</p>
                </div>
              </div>

              <ul className="space-y-4">
                {BEFORE_AFTER.after.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                    className="flex items-start gap-3 group/item"
                  >
                    <div className="w-6 h-6 rounded-full bg-brand-terracotta/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-brand-terracotta/30 transition-colors">
                      <Check className="w-3.5 h-3.5 text-brand-terracotta" />
                    </div>
                    <span className="text-brand-black font-medium leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Decorative corner orb */}
              <div className="absolute -bottom-20 -right-20 w-56 h-56 bg-brand-terracotta/10 rounded-full group-hover:scale-125 transition-transform duration-700" />
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
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
      <div className="absolute bottom-0 left-0 right-0 h-10 overflow-hidden z-10">
        <GreekKeyBorder className="w-full h-full" id="beforeAfterMeander" />
      </div>
    </section>
  );
}
