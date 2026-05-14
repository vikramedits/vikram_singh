"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/layout/ThemeProvider";

import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BackgroundEffects from "@/components/animations/BackgroundEffects";
import CustomCursor from "@/components/animations/CustomCursor";

export default function Home() {
  return (
    <ThemeProvider>
      <BackgroundEffects />
      <CustomCursor />
      <div className="flex min-h-screen flex-col bg-background text-foreground font-sans">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <AboutSection />
          <StatsSection />
          <ServicesSection />
          <ProjectsSection />
          <SkillsSection />
          <ExperienceTimeline />
          <TestimonialsSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
