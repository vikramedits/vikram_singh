"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileDown } from "lucide-react";
import { navLinks, personalInfo } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
          }`}
      >
        <div className="md:max-w-7xl mx-auto px-4 sm:px-6">
          <div className="h-16 flex items-center justify-between">

            {/* Logo */}
            <a
              href="#home"
              className="text-xl font-bold tracking-tight hover:opacity-80 transition"
            >
              <span className="text-violet-500">V</span>ikram.
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm rounded-full transition-all ${isActive
                      ? "text-white bg-violet-600 shadow-md"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                      }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-2">
              <ThemeToggle />

              <a
                href={personalInfo.resumeUrl}
                className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-violet-600 text-white hover:bg-violet-700 transition shadow-sm"
              >
                <FileDown className="w-4 h-4" />
                Resume
              </a>

              {/* Mobile Button */}
              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-accent transition"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU - RIGHT SLIDE */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="absolute right-0 top-0 h-full w-[280px] bg-background border-l border-border shadow-xl p-6"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <span className="font-semibold text-lg">Menu</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-accent transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 rounded-lg text-base font-medium text-foreground hover:bg-accent transition"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Resume */}
              <a
                href={personalInfo.resumeUrl}
                className="mt-6 block text-center px-4 py-3 rounded-lg bg-violet-600 text-white font-medium hover:bg-violet-700 transition"
              >
                <div className="flex items-center justify-center gap-2">
                  <FileDown className="w-4 h-4" />
                  Download Resume
                </div>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}