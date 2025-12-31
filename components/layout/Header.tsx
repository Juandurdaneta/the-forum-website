"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/constants";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            <Logo variant={isScrolled ? "dark" : "dark"} />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-brand-bronze",
                    pathname === link.href
                      ? "text-brand-bronze"
                      : "text-brand-black"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button size="sm" asChild>
                <Link href="#blueprint">Get The Blueprint</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-brand-black hover:text-brand-bronze transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-24 md:hidden"
          >
            <nav className="flex flex-col items-center gap-6 p-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-xl font-heading font-medium transition-colors hover:text-brand-bronze",
                    pathname === link.href
                      ? "text-brand-bronze"
                      : "text-brand-black"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button size="lg" className="mt-4 w-full max-w-xs" asChild>
                <Link href="#blueprint">Get The Blueprint</Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
