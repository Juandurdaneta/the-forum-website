"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { FINAL_CTA } from "@/lib/constants";
import { ArrowRight, Eye } from "lucide-react";

export function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-brand-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-black to-brand-bronze/20" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-bronze to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative" ref={ref}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl font-semibold text-white mb-6"
          >
            {FINAL_CTA.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-brand-slate mb-12 leading-relaxed max-w-2xl mx-auto"
          >
            {FINAL_CTA.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <div className="text-center">
              <Button size="xl" asChild>
                <Link href="#blueprint">
                  Get The Free Content Blueprint
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <p className="text-brand-slate text-sm mt-2">
                Plan what to record before you record it
              </p>
            </div>

            <div className="text-center">
              <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-brand-black" asChild>
                <Link href="/pricing">
                  <Eye className="mr-2 h-5 w-5" />
                  Explore Studio Membership
                </Link>
              </Button>
              <p className="text-brand-slate text-sm mt-2">
                See packages, pricing & what&apos;s included
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
