"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  ExternalLink, 
  Code2, 
  Calendar, 
  Tag, 
  CheckCircle2, 
  ChevronRight,
  Globe,
  Cpu,
  Trophy
} from "lucide-react";
import { projects } from "@/data/portfolio";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/layout/ThemeProvider";
import BackgroundEffects from "@/components/animations/BackgroundEffects";
import CustomCursor from "@/components/animations/CustomCursor";
import Link from "next/link";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

export default function ProjectDetailClient({ slug }: { slug: string }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    return (
      <ThemeProvider>
        <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <Link 
              href="/"
              className="px-6 py-2 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </ThemeProvider>
    );
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <ThemeProvider>
      <BackgroundEffects />
      <CustomCursor />
      <div className="flex min-h-screen flex-col bg-background text-foreground font-sans">
        <Navbar />
        
        <main className="flex-1 pt-24 pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            
            {/* Back Button */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8"
            >
              <Link 
                href="/#projects"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-violet-500 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Projects
              </Link>
            </motion.div>

            {/* Hero Header */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-violet-500/10 text-violet-500 border border-violet-500/20">
                    {project.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5" />
                    {project.year}
                  </span>
                  <span className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full ${
                    project.status === "Live" 
                    ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20" 
                    : "bg-amber-500/10 text-amber-500 border border-amber-500/20"
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 leading-tight">
                  {project.title}
                </h1>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {project.longDescription || project.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 text-white rounded-xl font-medium hover:bg-violet-700 transition shadow-lg shadow-violet-500/20"
                    >
                      <Globe className="w-4 h-4" />
                      Live Preview
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-foreground border border-border rounded-xl font-medium hover:bg-accent transition"
                    >
                      <Code2 className="w-4 h-4" />
                      View Source
                    </a>
                  )}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative aspect-video rounded-3xl overflow-hidden border border-border shadow-2xl group"
              >
                <div className="absolute inset-0 bg-linear-to-br from-violet-500/5 to-indigo-500/10 z-0" />
                {/* Fallback pattern if no thumbnail */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity">
                  <div className="grid grid-cols-6 gap-4">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-violet-500" />
                    ))}
                  </div>
                </div>
                {/* Browser frame decoration */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-muted/50 border-b border-border flex items-center px-4 gap-1.5 z-10 backdrop-blur-sm">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center pt-8">
                   <span className="text-6xl font-black text-violet-500/20 select-none">
                     {project.title.split(' ').map(w => w[0]).join('')}
                   </span>
                </div>

                {project.thumbnail && (
                  <div className="absolute inset-0 pt-8">
                    <div className="w-full h-full bg-violet-500/5 flex items-center justify-center text-muted-foreground italic">
                      Project Showcase Image
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Project Details Grid */}
            <div className="grid md:grid-cols-3 gap-12 mb-20">
              <div className="md:col-span-2 space-y-12">
                
                {/* Core Narrative */}
                <section className="space-y-6">
                  {project.problem && (
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center">
                          <Cpu className="w-4 h-4" />
                        </span>
                        The Problem
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                  )}
                  
                  {project.solution && (
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                          <Trophy className="w-4 h-4" />
                        </span>
                        The Solution
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  )}
                </section>

                {/* Challenges & Performance */}
                <div className="grid sm:grid-cols-2 gap-8">
                  {project.challenges && (
                    <div className="p-6 rounded-2xl bg-card border border-border">
                      <h4 className="font-bold mb-3 flex items-center gap-2 text-violet-500">
                        <Code2 className="w-4 h-4" />
                        Key Challenges
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.challenges}
                      </p>
                    </div>
                  )}
                  {project.performance && (
                    <div className="p-6 rounded-2xl bg-card border border-border">
                      <h4 className="font-bold mb-3 flex items-center gap-2 text-violet-500">
                        <CheckCircle2 className="w-4 h-4" />
                        Performance & Results
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.performance}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Sidebar Info */}
              <div className="space-y-8">
                <div className="p-6 rounded-3xl bg-violet-600/5 border border-violet-500/10 space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Tag className="w-4 h-4" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-3 py-1 text-xs font-medium rounded-lg bg-background border border-border text-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border/50">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      Project Status
                    </h4>
                    <p className="text-sm font-medium">
                      {project.status === "Live" ? "Production Ready" : "Actively Developing"}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-border/50">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      Role
                    </h4>
                    <p className="text-sm font-medium">
                      Lead Full Stack Developer
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Gallery */}
            {project.images && project.images.length > 0 && (
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-24"
              >
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold">Project Gallery</h3>
                  <div className="h-px flex-1 bg-border mx-6 hidden sm:block" />
                  <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">{project.images.length} Shots</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.images.map((img, i) => (
                    <motion.div 
                      key={img}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      onClick={() => setSelectedImage(img)}
                      className="group relative aspect-video rounded-3xl overflow-hidden border border-border bg-card shadow-lg hover:shadow-violet-500/10 transition-all duration-500 cursor-zoom-in"
                    >
                      <div className="absolute inset-0 bg-linear-to-br from-violet-500/10 to-indigo-500/10 group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px] z-20">
                         <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-xs font-bold uppercase tracking-widest translate-y-2 group-hover:translate-y-0 transition-transform">
                           <ZoomIn className="w-4 h-4" />
                           View Image
                         </div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground italic text-xs pointer-events-none z-10">
                        Screenshot {i + 1}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Next Project Teaser */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-t border-border pt-20"
            >
              <Link 
                href={`/projects/${nextProject.slug}`}
                className="group block p-8 rounded-3xl bg-linear-to-r from-violet-600/5 to-indigo-600/5 border border-violet-500/10 hover:border-violet-500/30 transition-all text-center sm:text-left"
              >
                <span className="text-sm font-medium text-violet-500 uppercase tracking-widest mb-2 block">Next Project</span>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <h2 className="text-2xl sm:text-3xl font-bold group-hover:text-violet-500 transition-colors">
                    {nextProject.title}
                  </h2>
                  <div className="flex items-center gap-2 text-violet-500 font-medium">
                    View Project
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>

          </div>
        </main>
        
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-10 cursor-zoom-out"
              onClick={() => setSelectedImage(null)}
            >
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <X className="w-6 h-6" />
              </motion.button>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative max-w-7xl w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute inset-0 bg-linear-to-br from-violet-500/20 to-indigo-500/20" />
                <div className="absolute inset-0 flex items-center justify-center text-white/20 font-bold text-4xl uppercase tracking-[1em] select-none">
                  Screenshot
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
