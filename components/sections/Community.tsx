"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { COMMUNITY } from "@/lib/constants";
import { Users, Repeat, MessageSquare, Star, Quote } from "lucide-react";

const iconList = [Users, Repeat, MessageSquare, Star];

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

export function Community() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-brand-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-terracotta/30 to-transparent" />
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-brand-terracotta/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <span className="text-brand-terracotta font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
            Community
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-brand-black mb-4">
            {COMMUNITY.title}
          </h2>
          <p className="text-xl text-brand-slate mb-6">{COMMUNITY.subtitle}</p>
          <GreekOrnament />
        </motion.div>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-brand-slate text-center max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          {COMMUNITY.intro}
        </motion.p>

        {/* Benefits grid with Greek styling */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {COMMUNITY.benefits.map((benefit, index) => {
            const Icon = iconList[index];
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex gap-4 p-6 bg-brand-cream-dark/50 border border-brand-terracotta/20 hover:border-brand-terracotta/40 transition-all duration-300"
              >
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-brand-terracotta/40" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-brand-terracotta/40" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-brand-terracotta/40" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-brand-terracotta/40" />

                {/* Medallion icon */}
                <div className="relative flex-shrink-0 w-14 h-14">
                  <div className="absolute inset-0 border-2 border-brand-terracotta/50 rounded-full" />
                  <div className="absolute inset-2 border border-brand-terracotta/30 rounded-full" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-brand-terracotta" />
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-lg font-semibold text-brand-black mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-brand-slate text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Testimonial with Greek styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="relative bg-brand-black p-8 md:p-12">
            {/* Greek border corners */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-brand-terracotta/60" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-brand-terracotta/60" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-brand-terracotta/60" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-brand-terracotta/60" />

            <Quote className="mx-auto w-10 h-10 text-brand-terracotta/50 mb-4" />
            <blockquote className="relative">
              <p className="font-heading text-xl md:text-2xl text-white italic leading-relaxed mb-4">
                &ldquo;{COMMUNITY.testimonial.quote}&rdquo;
              </p>
              <cite className="text-brand-terracotta text-sm not-italic tracking-wide">
                — {COMMUNITY.testimonial.author}
              </cite>
            </blockquote>
          </div>
        </motion.div>

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
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-terracotta/30 to-transparent" />
    </section>
  );
}
