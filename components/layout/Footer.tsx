"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG, NAV_LINKS, CONTACT_INFO } from "@/lib/constants";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { toast } from "@/components/ui/Toaster";
import * as React from "react";

// Greek ornament component
function GreekOrnament() {
  return (
    <svg className="w-24 h-6 text-brand-terracotta/60" viewBox="0 0 96 24" fill="none">
      <path d="M0 12h36" stroke="currentColor" strokeWidth="1" />
      <path d="M60 12h36" stroke="currentColor" strokeWidth="1" />
      <circle cx="48" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="48" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}

export function Footer() {
  const [email, setEmail] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setEmail("");
    toast("Thanks for subscribing! Check your inbox soon.", "success");
  };

  return (
    <footer className="bg-brand-black text-white relative">
      {/* Greek key border top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-terracotta/60 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
        {/* Greek ornament at top */}
        <div className="flex justify-center mb-12">
          <GreekOrnament />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <Logo variant="light" />
            <p className="text-brand-slate text-sm leading-relaxed mt-0 w-44">
              {SITE_CONFIG.tagline}
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href={`https://instagram.com/${CONTACT_INFO.instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-brand-terracotta/40 flex items-center justify-center text-brand-slate hover:text-brand-terracotta hover:border-brand-terracotta transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-brand-terracotta">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-slate hover:text-brand-terracotta transition-colors text-sm tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#blueprint"
                  className="text-brand-slate hover:text-brand-terracotta transition-colors text-sm tracking-wide"
                >
                  Get The Blueprint
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-brand-terracotta">Contact</h4>
            <ul className="space-y-3 text-sm text-brand-slate">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 border border-brand-terracotta/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="h-3 w-3 text-brand-terracotta" />
                </div>
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 border border-brand-terracotta/40 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-3 w-3 text-brand-terracotta" />
                </div>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-brand-terracotta transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 border border-brand-terracotta/40 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-3 w-3 text-brand-terracotta" />
                </div>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="hover:text-brand-terracotta transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-brand-terracotta">
              Stay Updated
            </h4>

            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/5 border-brand-terracotta/30 text-white placeholder:text-brand-slate focus:border-brand-terracotta"
              />
              <Button
                type="submit"
                size="sm"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-brand-terracotta/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-slate">
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
