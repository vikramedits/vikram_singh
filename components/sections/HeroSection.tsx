"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { FadeIn } from "@/components/animations/FadeIn";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Hero glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/10 dark:bg-violet-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div className="order-2 md:order-1">
            <FadeIn delay={0.1}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20 mb-6">
                <Sparkles className="w-3 h-3" />
                {personalInfo.availability}
              </span>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-4">
                Hi, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                  {personalInfo.name}
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-lg sm:text-xl text-muted-foreground font-medium mb-2">
                {personalInfo.title}
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-lg">
                {personalInfo.tagline}
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full bg-violet-600 text-white hover:bg-violet-700 transition-all"
                >
                  View Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full bg-secondary hover:bg-accent text-foreground transition-all border border-border"
                >
                  Contact Me
                </a>
                <a
                  href={personalInfo.resumeUrl}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full hover:bg-accent text-muted-foreground hover:text-foreground transition-all"
                >
                  <Download className="w-4 h-4" />
                  Resume
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right — Visual */}
          <div className="order-1 md:order-2 flex justify-center">
            <FadeIn delay={0.3} direction="right">
              <div className="relative">
                {/* Profile circle */}
                <motion.div
                  className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center relative"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white/90">VS</span>

                  {/* Floating tech badges */}
                  <motion.div
                    className="absolute -top-3 -right-3 px-3 py-1.5 bg-background rounded-full border border-border shadow-lg text-xs font-medium"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    Next.js
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-2 -left-4 px-3 py-1.5 bg-background rounded-full border border-border shadow-lg text-xs font-medium"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    TypeScript
                  </motion.div>
                  <motion.div
                    className="absolute top-1/2 -right-8 px-3 py-1.5 bg-background rounded-full border border-border shadow-lg text-xs font-medium"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  >
                    React
                  </motion.div>
                </motion.div>

                {/* Outer ring */}
                <div className="absolute inset-0 -m-4 rounded-full border border-violet-500/20 animate-spin" style={{ animationDuration: "20s" }} />
                <div className="absolute inset-0 -m-10 rounded-full border border-violet-500/10 animate-spin" style={{ animationDuration: "30s", animationDirection: "reverse" }} />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
