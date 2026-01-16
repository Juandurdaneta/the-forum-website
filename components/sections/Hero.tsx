"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { GreekKeyBorder } from "@/components/ui/MeanderPattern";
import { HERO_CONTENT } from "@/lib/constants";
import { ArrowRight, Play, Mic, Video, Users, Sparkles } from "lucide-react";

// Floating feature cards for visual interest
const floatingFeatures = [
  { icon: Mic, label: "Pro Audio", delay: 0.5 },
  { icon: Video, label: "4K Video", delay: 0.7 },
  { icon: Users, label: "Community", delay: 0.9 },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Split background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-brand-cream" />
        {/* Terracotta accent shape */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-terracotta hidden lg:block"
          style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)" }}
        />
      </div>

      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-gold/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-terracotta/10 rounded-full blur-3xl"
      />

      {/* Greek Key Border - Top */}
      <div className="absolute top-0 left-0 right-0 h-6 overflow-hidden z-20">
        <GreekKeyBorder className="w-full h-full" id="heroMeander" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column - Content */}
          <div className="max-w-2xl">
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <div className="flex items-center gap-2 bg-brand-terracotta text-white px-4 py-2 rounded-full shadow-lg">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium tracking-wide">Founding Members</span>
              </div>
              <span className="text-brand-slate text-sm">Limited spots available</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-brand-black leading-[1.05] mb-6"
            >
              Fort Lauderdale&apos;s{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Only</span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute bottom-2 left-0 h-3 bg-brand-terracotta/30 -z-10"
                />
              </span>{" "}
              Done-For-You Podcast & Content Studio
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-brand-slate mb-10 leading-relaxed"
            >
              {HERO_CONTENT.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start gap-4 mb-12"
            >
              <Button size="xl" asChild className="shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full">
                <Link href="#blueprint">
                  {HERO_CONTENT.primaryCta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                asChild
                className="group rounded-full border-2 border-brand-terracotta/30 hover:border-brand-terracotta hover:bg-brand-terracotta/5"
              >
                <Link href="#how-it-works">
                  <div className="w-10 h-10 rounded-full bg-brand-terracotta/10 flex items-center justify-center mr-3 group-hover:bg-brand-terracotta/20 transition-colors">
                    <Play className="w-4 h-4 text-brand-terracotta ml-0.5" fill="currentColor" />
                  </div>
                  {HERO_CONTENT.secondaryCta}
                </Link>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-6 text-sm text-brand-slate"
            >
              {[
                "Professional equipment",
                "Post-production included",
                "No contracts"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-brand-terracotta/10 flex items-center justify-center">
                    <svg className="w-3 h-3 text-brand-terracotta" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative hidden lg:block">
            {/* Main visual card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative z-10"
            >
              {/* Studio mockup card */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-brand-terracotta/10">
                {/* Logo/Brand */}
                <div className="text-center mb-8">
                  <div className="inline-flex flex-col items-center">
                    <span className="text-xs tracking-[0.4em] text-brand-terracotta mb-1">T H E</span>
                    <span className="font-heading text-4xl font-bold text-brand-black">FORUM</span>
                    <div className="w-16 h-0.5 bg-brand-terracotta/30 mt-2" />
                  </div>
                </div>

                {/* Feature grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { icon: Mic, label: "Record", color: "bg-brand-terracotta" },
                    { icon: Video, label: "Produce", color: "bg-brand-gold" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="bg-brand-cream rounded-2xl p-6 text-center"
                    >
                      <div className={`w-12 h-12 ${item.color} rounded-xl mx-auto mb-3 flex items-center justify-center`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-brand-black font-medium">{item.label}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom stat */}
                <div className="bg-gradient-to-r from-brand-terracotta to-brand-terracotta-dark rounded-2xl p-6 text-center text-white">
                  <div className="text-3xl font-heading font-bold mb-1">Show Up & Create</div>
                  <div className="text-white/80 text-sm">We handle everything else</div>
                </div>
              </div>
            </motion.div>

            {/* Floating feature badges */}
            {floatingFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: feature.delay,
                  type: "spring",
                  stiffness: 200
                }}
                className={`absolute ${
                  i === 0 ? "-left-4 top-1/4" :
                  i === 1 ? "-right-4 top-1/3" :
                  "-left-8 bottom-1/4"
                } z-20`}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                  className="bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-brand-terracotta/10"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-terracotta/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-brand-terracotta" />
                  </div>
                  <span className="font-medium text-brand-black text-sm">{feature.label}</span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Greek Key Border - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-6 overflow-hidden z-20">
        <GreekKeyBorder className="w-full h-full" id="heroMeander" />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-brand-slate"
        >
          <span className="text-xs tracking-wider uppercase">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-brand-terracotta/30 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1.5 h-1.5 bg-brand-terracotta rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
