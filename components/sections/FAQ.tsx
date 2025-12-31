"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { FAQ_HOME } from "@/lib/constants";

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8" ref={ref}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-brand-bronze font-medium text-sm tracking-wider uppercase mb-4 block">
              FAQ
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-brand-black mb-4">
              Common Questions
            </h2>
            <p className="text-xl text-brand-slate italic">
              &ldquo;But What If...&rdquo;
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion items={FAQ_HOME} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg" asChild>
              <Link href="/pricing">Learn More</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
