"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG, NAV_LINKS, CONTACT_INFO } from "@/lib/constants";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { toast } from "@/components/ui/Toaster";
import * as React from "react";

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
    <footer className="bg-brand-black text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
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
                className="text-brand-slate hover:text-brand-bronze transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-slate hover:text-brand-bronze transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#blueprint"
                  className="text-brand-slate hover:text-brand-bronze transition-colors text-sm"
                >
                  Get The Blueprint
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-brand-slate">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-brand-bronze transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="hover:text-brand-bronze transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">
              Stay Updated
            </h4>
           
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-brand-slate"
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
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-slate">
            <p>© {new Date().getFullYear()} The Forum. All rights reserved.</p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="hover:text-brand-bronze transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-brand-bronze transition-colors"
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
