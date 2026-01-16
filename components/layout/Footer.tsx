"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { MeanderBorder } from "@/components/ui/MeanderPattern";
import { SITE_CONFIG, NAV_LINKS, CONTACT_INFO } from "@/lib/constants";
import { Instagram, Mail, Phone, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { toast } from "@/components/ui/Toaster";
import * as React from "react";
import { motion } from "framer-motion";

export function Footer() {
  const [email, setEmail] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setEmail("");
    toast("Thanks for subscribing! Check your inbox soon.", "success");
  };

  return (
    <footer className="bg-brand-black text-white relative overflow-hidden">
      {/* Greek key border top */}
      <div className="absolute top-0 left-0 right-0 h-6 overflow-hidden z-10">
        <MeanderBorder className="w-full h-full" id="footerMeander" />
      </div>

      {/* Background orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-terracotta/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo & Tagline */}
          <div className="space-y-6">
            <Logo variant="light" />
            <p className="text-white/60 text-sm leading-relaxed max-w-[200px]">
              {SITE_CONFIG.tagline}
            </p>
            <div className="flex gap-3">
              <a
                href={`https://instagram.com/${CONTACT_INFO.instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-brand-terracotta hover:bg-brand-terracotta/10 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-terracotta" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-brand-terracotta transition-colors text-sm tracking-wide flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-terracotta/50 group-hover:bg-brand-terracotta transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#blueprint"
                  className="text-white/60 hover:text-brand-terracotta transition-colors text-sm tracking-wide flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-brand-terracotta/50 group-hover:bg-brand-terracotta transition-colors" />
                  Get The Blueprint
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-white flex items-center gap-2">
              <Mail className="w-4 h-4 text-brand-terracotta" />
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-terracotta/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-4 w-4 text-brand-terracotta" />
                </div>
                <span className="text-white/60 pt-1">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-terracotta/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-4 w-4 text-brand-terracotta" />
                </div>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-white/60 hover:text-brand-terracotta transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-terracotta/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-4 w-4 text-brand-terracotta" />
                </div>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-white/60 hover:text-brand-terracotta transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-white">
              Stay Updated
            </h4>
            <p className="text-white/60 text-sm mb-4">
              Get the latest updates and tips delivered to your inbox.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-brand-terracotta rounded-xl"
              />
              <Button
                type="submit"
                size="sm"
                className="w-full rounded-full"
                disabled={isLoading}
              >
                {isLoading ? "Subscribing..." : (
                  <>
                    Subscribe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p>© {new Date().getFullYear()} The Forum. All rights reserved.</p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="hover:text-brand-terracotta transition-colors tracking-wide"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-brand-terracotta transition-colors tracking-wide"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
