"use client";

import { motion } from "framer-motion";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/FadeIn";
import {
  Code2,
  Zap,
  Layers,
  Sparkles,
  Phone,
  Mail,
  // Github,
  // Linkedin,
} from "lucide-react";

const highlights = [
  { icon: Code2, title: "Full Stack Engineer", desc: "Next.js + Backend Systems" },
  { icon: Sparkles, title: "AI Integration", desc: "OpenAI / LLM Apps" },
  { icon: Layers, title: "Scalable Systems", desc: "Production Architectures" },
  { icon: Zap, title: "Performance Focused", desc: "SEO + Speed Optimized" },
];

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
  "Prisma",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 overflow-hidden">
      <div className="md:max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs tracking-widest text-violet-500 uppercase">
              About Me
            </span>

            <h2 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight">
              Building{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-500 to-indigo-500">
                scalable digital products
              </span>{" "}
              with modern web tech
            </h2>

            <p className="mt-5 text-muted-foreground leading-relaxed">
              I’m Vikram Singh Deora — a frontend-focused full stack developer
              specializing in building high-performance web applications using
              Next.js, React, and AI-powered systems.
            </p>
          </div>
        </FadeIn>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT — PROFILE CARD */}
          <FadeIn direction="left">
            <div className="relative">

              {/* Glow Background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/10 to-indigo-500/10 blur-2xl rounded-3xl" />

              <div className="relative rounded-3xl border border-border bg-card p-8">

                {/* Avatar */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                    VS
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">
                      Vikram Singh Deora
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Full Stack Developer • AI Systems Builder
                    </p>
                  </div>
                </div>

                {/* Contact */}
                <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                  <p>📞 +91 9001069033</p>
                  <p>📧 deora.vikramsingh75@gmail.com</p>
                  <p>🔗 linkedin.com/in/vikramsingh</p>
                  <p>💻 github.com/vikramedits</p>
                </div>

                {/* Highlights */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {highlights.map((item) => (
                    <div
                      key={item.title}
                      className="p-3 rounded-xl border border-border bg-secondary/40 hover:bg-secondary transition"
                    >
                      <item.icon className="w-4 h-4 text-violet-500 mb-2" />
                      <p className="text-sm font-medium">{item.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* RIGHT — CONTENT */}
          <div>

            <FadeIn delay={0.1}>
              <p className="text-muted-foreground leading-relaxed mb-5">
                I specialize in building production-grade web applications across
                <span className="text-foreground font-medium"> EdTech, Sports, and Hospitality domains</span>,
                with a strong focus on scalability, performance, and clean architecture.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Currently working at <span className="text-foreground font-medium">WoodenStreet</span>,
                contributing to AI-powered internal tools and frontend systems that support real production workflows.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I enjoy turning complex problems into simple, intuitive UI systems
                using modern frameworks like Next.js and React.
              </p>
            </FadeIn>

            {/* Tech Stack */}
            <StaggerContainer className="flex flex-wrap gap-2 mb-10" delay={0.3} staggerDelay={0.04}>
              {techStack.map((tech) => (
                <StaggerItem key={tech}>
                  <span className="px-3 py-1 text-xs rounded-full border border-border bg-secondary/40 hover:border-violet-500/40 transition">
                    {tech}
                  </span>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* CTA strip */}
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:deora.vikramsingh75@gmail.com"
                className="px-4 py-2 rounded-xl bg-violet-600 text-white text-sm hover:bg-violet-500 transition"
              >
                Contact Me
              </a>

              <a
                href="https://github.com/vikramedits"
                target="_blank"
                className="px-4 py-2 rounded-xl border border-border text-sm hover:border-violet-500/40 transition"
              >
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}