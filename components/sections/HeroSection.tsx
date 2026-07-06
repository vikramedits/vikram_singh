"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { FadeIn } from "@/components/animations/FadeIn";
import ParticlesBackground from "@/components/sections/ParticlesBackground"

const skills = [
  { name: "Next.js", icon: "nextdotjs", color: "white" },
  { name: "React", icon: "react", color: "61DAFB" },
  { name: "TypeScript", icon: "typescript", color: "3178C6" },
  { name: "Node.js", icon: "nodedotjs", color: "339933" },
  { name: "Tailwind", icon: "tailwindcss", color: "06B6D4" },
  { name: "MongoDB", icon: "mongodb", color: "47A248" },
  { name: "PostgreSQL", icon: "postgresql", color: "4169E1" },
  { name: "Prisma", icon: "prisma", color: "white" },
  { name: "Framer", icon: "framer", color: "white" },
  { name: "Figma", icon: "figma", color: "F24E1E" },
  { name: "OpenAI", icon: "openai", color: "white" },
  { name: "Python", icon: "python", color: "3776AB" }
];

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-12 overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        {/* Aurora blobs */}
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-violet-500/30 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[150px]" />

        {/* Particles */}
        <ParticlesBackground />
      </div>
      
      {/* Hero glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-violet-500/10 dark:bg-violet-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        
        {/* Main Text Content */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <FadeIn delay={0.1}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20 mb-6">
              <Sparkles className="w-3 h-3" />
              {personalInfo.availability}
            </span>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-500 to-indigo-500">
                {personalInfo.name}
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-xl sm:text-2xl text-muted-foreground font-medium mb-4">
              {personalInfo.title}
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
              {personalInfo.tagline}
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-medium rounded-full bg-violet-600 text-white hover:bg-violet-700 transition-all"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium rounded-full bg-secondary hover:bg-accent text-foreground transition-all border border-border"
              >
                Contact Me
              </a>
              <a
                href={personalInfo.resumeUrl}
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium rounded-full hover:bg-accent text-muted-foreground hover:text-foreground transition-all"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Core Stack Section */}
        <FadeIn delay={0.6} className="w-full mt-24 md:mt-32">
          <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-8 border-t border-white/5 pt-10">
            
            {/* Left: Title & Pagination */}
            <div className="md:w-[250px] shrink-0 flex flex-col items-center md:items-start gap-4 text-center md:text-left">
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-white/50 font-bold mb-1">Core Stack</h3>
                <p className="text-xs text-white/30">Technologies I work with</p>
              </div>
              
              {/* Pagination Dashes */}
              <div className="flex gap-2">
                <motion.div 
                  className="w-8 h-1 rounded-full bg-violet-500" 
                  animate={{ opacity: [1, 0.5, 1] }} 
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="w-2 h-1 rounded-full bg-white/10" />
                <div className="w-2 h-1 rounded-full bg-white/10" />
              </div>
            </div>

            {/* Right: Skills Marquee */}
            <div className="flex-1 w-full overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <motion.div 
                className="flex w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              >
                {[...skills, ...skills].map((skill, i) => (
                  <div 
                    key={i} 
                    className="group mr-4 sm:mr-6 shrink-0 flex items-center gap-3 h-14 sm:h-16 px-6 sm:px-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md whitespace-nowrap hover:bg-white/10 hover:border-violet-500/30 transition-all cursor-default shadow-sm"
                  >
                    <img 
                      src={`https://cdn.simpleicons.org/${skill.icon}/${skill.color}`}
                      alt={skill.name}
                      className="w-5 h-5 sm:w-6 sm:h-6 opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 drop-shadow-md"
                      loading="lazy"
                    />
                    <span className="text-white/60 group-hover:text-white/90 font-medium text-sm sm:text-base transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}
