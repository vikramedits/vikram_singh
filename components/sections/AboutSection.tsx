"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { Code2, Palette, Layers, Zap } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Clean Code" },
  { icon: Palette, label: "UI/UX Focus" },
  { icon: Layers, label: "Full Stack" },
  { icon: Zap, label: "Performance" },
];

const techBadges = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Prisma", "MongoDB", "PostgreSQL"];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section heading */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-violet-500 tracking-wider uppercase">About Me</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              Passionate about building{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                exceptional
              </span>{" "}
              web experiences
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Visual */}
          <FadeIn direction="left">
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br from-violet-500/10 to-indigo-500/10 border border-border p-8 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <motion.div
                    className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-3xl font-bold text-white">VS</span>
                  </motion.div>
                  <p className="text-lg font-semibold">Vikram Singh</p>
                  <p className="text-sm text-muted-foreground">Full Stack Developer</p>

                  {/* Highlights grid */}
                  <div className="grid grid-cols-2 gap-3 pt-4">
                    {highlights.map(({ icon: Icon, label }) => (
                      <div key={label} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon className="w-4 h-4 text-violet-500" />
                        {label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right — Text */}
          <div>
            <FadeIn delay={0.1}>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                I&apos;m a passionate Full Stack Developer specializing in building modern, scalable web applications
                with <span className="text-foreground font-medium">Next.js</span>,{" "}
                <span className="text-foreground font-medium">TypeScript</span>, and cutting-edge technologies.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                My development philosophy centers on writing clean, maintainable code that delivers exceptional
                user experiences. I believe great software is at the intersection of solid engineering
                and intuitive design.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                From responsive landing pages to complex full-stack platforms, I focus on performance,
                accessibility, and modern UI/UX patterns that make applications feel premium and professional.
              </p>
            </FadeIn>

            {/* Tech badges */}
            <StaggerContainer className="flex flex-wrap gap-2" delay={0.3} staggerDelay={0.05}>
              {techBadges.map((tech) => (
                <StaggerItem key={tech}>
                  <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-secondary text-foreground border border-border hover:border-violet-500/30 transition-colors cursor-default">
                    {tech}
                  </span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
