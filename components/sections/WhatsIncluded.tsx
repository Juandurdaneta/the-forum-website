"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { WHATS_INCLUDED } from "@/lib/constants";
import { Mic, Wand2, Calendar, Target } from "lucide-react";

const iconMap = {
  Mic: Mic,
  Wand2: Wand2,
  Calendar: Calendar,
  Target: Target,
};

export function WhatsIncluded() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-brand-peach/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-brand-bronze/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-peach/50 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <span className="text-brand-bronze font-medium text-sm tracking-wider uppercase mb-4 block">
            Membership Benefits
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-brand-black mb-4">
            {WHATS_INCLUDED.title}
          </h2>
          <p className="text-xl text-brand-slate">{WHATS_INCLUDED.subtitle}</p>
        </motion.div>

        {/* Intro paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-brand-slate text-center max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          {WHATS_INCLUDED.intro}
        </motion.p>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {WHATS_INCLUDED.features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-white hover:shadow-lg hover:border-brand-bronze/20 transition-all duration-300 card-lift"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-peach flex items-center justify-center mb-5">
                  {Icon && <Icon className="w-7 h-7 text-brand-bronze" />}
                </div>
                <h3 className="font-heading text-xl font-semibold text-brand-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-brand-slate text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button size="lg" asChild>
            <Link href="#blueprint">
              Get The Free Content Blueprint →
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
