"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { ADD_ONS } from "@/lib/constants";
import { Camera, Palette, Share2, Radio, GraduationCap } from "lucide-react";

const iconMap = {
  Camera,
  Palette,
  Share2,
  Radio,
  GraduationCap,
};

export function AddOns() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-brand-bronze font-medium text-sm tracking-wider uppercase mb-4 block">
            Extras
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-brand-black mb-4">
            Enhance Your Membership
          </h2>
          <p className="text-lg text-brand-slate">
            Available add-ons for all tiers.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {ADD_ONS.map((addon, index) => {
            const Icon = iconMap[addon.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={addon.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-peach flex items-center justify-center flex-shrink-0">
                        {Icon && <Icon className="w-6 h-6 text-brand-bronze" />}
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-semibold text-brand-black mb-1">
                          {addon.title}
                        </h3>
                        <p className="text-brand-bronze font-medium text-sm mb-2">
                          {addon.price}
                        </p>
                        <p className="text-sm text-brand-slate">
                          {addon.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
