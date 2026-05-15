"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket, ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";

const steps = [
  {
    title: "Discovery & Planning",
    desc: "Understanding the problem, defining goals, and mapping out the user journey to ensure a solid foundation.",
    icon: Search,
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  },
  {
    title: "UI/UX Design",
    desc: "Creating intuitive, aesthetic, and functional designs that prioritize user experience and brand identity.",
    icon: PenTool,
    color: "bg-violet-500/10 text-violet-500 border-violet-500/20",
  },
  {
    title: "Development",
    desc: "Building scalable, high-performance applications using modern tech stacks like Next.js and TypeScript.",
    icon: Code2,
    color: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20",
  },
  {
    title: "Deployment & Growth",
    desc: "Launching the product with optimized SEO and performance, and providing continuous support for scaling.",
    icon: Rocket,
    color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-violet-500 tracking-wider uppercase">Workflow</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
              My Creative <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-500 to-indigo-500">Process</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg max-w-2xl mx-auto">
              How I transform your ideas into production-ready digital experiences.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <StaggerItem key={idx}>
              <div className="relative group p-8 rounded-3xl bg-card border border-border hover:border-violet-500/30 transition-all duration-300 h-full">
                {/* Step Number */}
                <div className="absolute top-6 right-8 text-5xl font-bold opacity-5 group-hover:opacity-10 transition-opacity">
                  0{idx + 1}
                </div>
                
                <div className={`w-14 h-14 rounded-2xl ${step.color} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <step.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.desc}
                </p>

                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-20">
                    <ArrowRight className="w-6 h-6 text-border group-hover:text-violet-500 transition-colors" />
                  </div>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
