"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { skills } from "@/data/portfolio";
import { Monitor, Server, Wrench } from "lucide-react";

const categories = [
  { key: "frontend" as const, label: "Frontend", icon: Monitor, color: "text-blue-500", bg: "bg-blue-500/10" },
  { key: "backend" as const, label: "Backend", icon: Server, color: "text-violet-500", bg: "bg-violet-500/10" },
  { key: "tools" as const, label: "Tools", icon: Wrench, color: "text-emerald-500", bg: "bg-emerald-500/10" },
];

const getIconSlug = (icon: string) => {
  const map: Record<string, string> = {
    nextjs: "nextdotjs",
    tailwind: "tailwindcss",
    nodejs: "nodedotjs",
  };
  return map[icon] || icon;
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<"frontend" | "backend" | "tools">("frontend");

  return (
    <section id="skills" className="py-20 sm:py-28 overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-40 w-[400px] h-[400px] bg-violet-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 md:max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-violet-500 tracking-[0.2em] uppercase">Core Stack</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
              Technologies I{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                work with
              </span>
            </h2>
            <p className="mt-4 text-white/50 max-w-2xl mx-auto text-sm sm:text-base">
              I specialize in building full-stack applications using these modern technologies, focusing on performance, scalability, and user experience.
            </p>
          </div>
        </FadeIn>

        {/* Category tabs */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map(({ key, label, icon: Icon, color, bg }) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`relative flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300 ${activeCategory === key
                    ? "text-white"
                    : `text-white/50 hover:text-white bg-white/5 border border-white/10 hover:bg-white/10`
                  }`}
              >
                {activeCategory === key && (
                  <motion.span
                    layoutId="skills-tab"
                    className={`absolute inset-0 rounded-full -z-10 ${activeCategory === 'frontend' ? 'bg-blue-600' : activeCategory === 'backend' ? 'bg-violet-600' : 'bg-emerald-600'}`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className={`w-4 h-4 ${activeCategory === key ? 'text-white' : color}`} />
                {label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Skills grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" key={activeCategory}>
          {skills[activeCategory].map((skill) => (
            <StaggerItem key={skill.name}>
              <motion.div
                className="group relative p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-violet-500/30 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden shadow-lg"
                whileHover={{ y: -4 }}
              >
                {/* Internal Glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-violet-500/10 blur-[50px] rounded-full group-hover:bg-violet-500/30 transition-colors duration-500" />
                
                <div className="relative flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-inner">
                    <img 
                      src={`https://cdn.simpleicons.org/${getIconSlug(skill.icon)}/white`}
                      alt={skill.name}
                      className="w-7 h-7 opacity-70 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white/90">{skill.name}</h3>
                    <span className="text-[10px] text-white/40 uppercase tracking-widest font-semibold">
                      {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : 'Intermediate'}
                    </span>
                  </div>
                  <span className="ml-auto text-lg font-bold text-violet-400 group-hover:text-violet-300 transition-colors">{skill.level}%</span>
                </div>

                <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.6)]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
