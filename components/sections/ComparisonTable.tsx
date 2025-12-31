"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { COMPARISON_TABLE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function ComparisonTable() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-brand-peach/20" ref={ref}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-brand-black mb-4">
            Compare Plans
          </h2>
          <p className="text-lg text-brand-slate">
            See exactly what&apos;s included in each membership tier.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto overflow-x-auto"
        >
          <table className="w-full bg-white rounded-2xl shadow-sm overflow-hidden">
            <thead>
              <tr className="border-b border-border">
                {COMPARISON_TABLE.headers.map((header, index) => (
                  <th
                    key={header}
                    className={cn(
                      "px-6 py-4 text-left font-heading text-lg font-semibold text-brand-black",
                      index === 2 && "bg-brand-bronze/5"
                    )}
                  >
                    {header}
                    {index === 2 && (
                      <span className="ml-2 text-xs bg-brand-bronze text-white px-2 py-0.5 rounded-full">
                        Popular
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON_TABLE.rows.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={cn(
                    "border-b border-border last:border-0",
                    rowIndex % 2 === 0 && "bg-brand-peach/5"
                  )}
                >
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className={cn(
                        "px-6 py-4 text-sm",
                        cellIndex === 0 ? "font-medium text-brand-black" : "text-brand-slate",
                        cellIndex === 2 && "bg-brand-bronze/5"
                      )}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <Link
            href="#blueprint"
            className="text-brand-bronze hover:underline font-medium"
          >
            Not sure? Download The Blueprint to plan your content first →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
