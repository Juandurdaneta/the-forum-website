"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

export function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: AccordionItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={cn(
        "bg-white rounded-2xl border border-brand-terracotta/10 mb-4 overflow-hidden transition-all duration-300",
        isOpen ? "shadow-lg border-brand-terracotta/30" : "shadow-sm hover:shadow-md hover:border-brand-terracotta/20"
      )}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between p-6 text-left transition-colors group"
        aria-expanded={isOpen}
      >
        <span className={cn(
          "font-heading text-lg md:text-xl font-medium pr-6 transition-colors",
          isOpen ? "text-brand-terracotta" : "text-brand-black group-hover:text-brand-terracotta"
        )}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0",
            isOpen
              ? "bg-brand-terracotta shadow-lg"
              : "bg-brand-terracotta/10 group-hover:bg-brand-terracotta/20"
          )}
        >
          <ChevronDown
            className={cn(
              "h-5 w-5 transition-colors duration-300",
              isOpen ? "text-white" : "text-brand-terracotta"
            )}
          />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <div className="w-full h-px bg-brand-terracotta/10 mb-4" />
              <p className="text-brand-slate leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

interface AccordionProps {
  items: { question: string; answer: string }[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div className={cn("", className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          index={index}
        />
      ))}
    </div>
  );
}
