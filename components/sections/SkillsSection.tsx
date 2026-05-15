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

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<"frontend" | "backend" | "tools">("frontend");

  return (
    <section id="skills" className="py-20 sm:py-28 overflow-hidden">
      <div className="md:max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-violet-500 tracking-wider uppercase">Skills</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              Technologies I{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                work with
              </span>
            </h2>
          </div>
        </FadeIn>

        {/* Category tabs */}
        <FadeIn delay={0.1}>
          <div className="flex justify-center gap-2 mb-12">
            {categories.map(({ key, label, icon: Icon, color, bg }) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`relative flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full transition-all ${activeCategory === key
                    ? "text-white"
                    : `text-muted-foreground hover:text-foreground ${bg}`
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
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" key={activeCategory}>
          {skills[activeCategory].map((skill) => (
            <StaggerItem key={skill.name}>
              <motion.div
                className="group relative p-5 rounded-2xl bg-card border border-border hover:border-violet-500/30 transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold">{skill.name}</h3>
                  <span className="text-xs text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="relative h-1.5 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
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
