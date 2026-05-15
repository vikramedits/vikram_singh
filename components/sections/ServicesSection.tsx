"use client";

import { motion } from "framer-motion";
import { services } from "@/data/portfolio";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { Layers, Layout, Monitor, Zap, Gauge, Smartphone, ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  layers: Layers,
  layout: Layout,
  monitor: Monitor,
  zap: Zap,
  gauge: Gauge,
  smartphone: Smartphone,
};

export default function ServicesSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-violet-500 tracking-wider uppercase">Services</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              What I{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                offer
              </span>
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Layers;
            return (
              <StaggerItem key={service.title}>
                <motion.div
                  className="group relative p-6 rounded-2xl bg-card border border-border hover:border-violet-500/30 transition-all duration-300 h-full"
                  whileHover={{ y: -4 }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-base font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeIn delay={0.4}>
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">Need a custom solution for your unique business requirements?</p>
            <a 
              href="#contact" 
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-violet-600 text-white font-bold hover:bg-violet-700 transition shadow-lg hover:shadow-violet-500/25"
            >
              Get a Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
