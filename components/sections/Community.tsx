"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { COMMUNITY } from "@/lib/constants";
import { Users, Repeat, MessageSquare, Star, Quote } from "lucide-react";

const iconList = [Users, Repeat, MessageSquare, Star];

export function Community() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <span className="text-brand-bronze font-medium text-sm tracking-wider uppercase mb-4 block">
            Community
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-brand-black mb-4">
            {COMMUNITY.title}
          </h2>
          <p className="text-xl text-brand-slate">{COMMUNITY.subtitle}</p>
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

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {COMMUNITY.benefits.map((benefit, index) => {
            const Icon = iconList[index];
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-4 p-6 rounded-2xl bg-brand-peach/10 border border-brand-peach/30 hover:border-brand-bronze/30 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-bronze/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-brand-bronze" />
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

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="relative bg-brand-black rounded-2xl p-8 md:p-12">
            <Quote className="absolute top-6 left-6 w-8 h-8 text-brand-bronze/30" />
            <blockquote className="relative">
              <p className="font-heading text-xl md:text-2xl text-white italic leading-relaxed mb-4">
                &ldquo;{COMMUNITY.testimonial.quote}&rdquo;
              </p>
              <cite className="text-brand-slate text-sm not-italic">
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
          <Button size="lg" asChild>
            <Link href="#blueprint">Get The Free Content Blueprint →</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
