"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";
import { FadeIn } from "@/components/animations/FadeIn";
import { Briefcase, Code2, Palette } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  code: Code2,
  briefcase: Briefcase,
  palette: Palette,
};

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-violet-500 tracking-wider uppercase">Experience</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                journey
              </span>
            </h2>
          </div>
        </FadeIn>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          {experience.map((item, i) => {
            const Icon = iconMap[item.icon] || Code2;
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex items-start gap-6 mb-12 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                {/* Icon dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-background border-2 border-violet-500/30 flex items-center justify-center z-10">
                  <Icon className="w-5 h-5 text-violet-500" />
                </div>

                {/* Card */}
                <div className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-0" : "md:pl-0"}`}>
                  <div className="group p-5 rounded-2xl bg-card border border-border hover:border-violet-500/30 transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 text-[10px] font-medium rounded-full bg-violet-500/10 text-violet-500">
                        {item.type}
                      </span>
                      <span className="text-xs text-muted-foreground">{item.period}</span>
                    </div>
                    <h3 className="text-base font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-violet-500/80 mb-2">{item.company}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.skills.map((skill) => (
                        <span key={skill} className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-secondary text-muted-foreground border border-border">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
