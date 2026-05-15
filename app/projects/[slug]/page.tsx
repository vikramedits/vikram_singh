"use client";

import { useParams, useRouter } from "next/navigation";
import { projects } from "@/data/portfolio";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/layout/ThemeProvider";
import { FadeIn } from "@/components/animations/FadeIn";
import { ArrowLeft, ExternalLink, Github, Calendar, Tag, ShieldCheck, Zap, Monitor } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button onClick={() => router.push("/")} className="text-violet-500 hover:underline">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col bg-background text-foreground font-sans">
        <Navbar />
        
        <main className="flex-1 pt-24 pb-20">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="mb-12">
              <button 
                onClick={() => router.back()}
                className="flex items-center gap-2 text-muted-foreground hover:text-violet-500 transition mb-8 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Projects
              </button>
              
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <FadeIn>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-500 text-xs font-bold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5" />
                      {project.year}
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                    {project.title}
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                    {project.description}
                  </p>
                </FadeIn>
                
                <FadeIn delay={0.2}>
                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-violet-600 text-white rounded-full font-bold hover:bg-violet-700 transition shadow-lg"
                      >
                        Live Demo
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 px-6 py-3 bg-secondary border border-border rounded-full font-bold hover:bg-accent transition"
                      >
                        Source Code
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </FadeIn>
              </div>
            </div>

            {/* Main Image / Showcase */}
            <FadeIn delay={0.3}>
              <div className="relative aspect-video w-full rounded-3xl overflow-hidden mb-16 bg-muted border border-border">
                {/* Fallback pattern if image is missing */}
                <div className="absolute inset-0 bg-linear-to-br from-violet-500/10 to-indigo-500/10 flex items-center justify-center">
                  <Monitor className="w-32 h-32 text-violet-500 opacity-20" />
                </div>
              </div>
            </FadeIn>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-12">
                <section>
                  <h2 className="text-2xl font-bold mb-4">Overview</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {project.longDescription}
                  </p>
                </section>

                <section className="grid sm:grid-cols-2 gap-8">
                  <div className="p-8 rounded-3xl bg-muted/30 border border-border">
                    <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-violet-500" />
                      The Problem
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div className="p-8 rounded-3xl bg-violet-500/5 border border-violet-500/20">
                    <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-violet-500" />
                      The Solution
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Challenges & Learnings</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.challenges}
                  </p>
                </section>
              </div>

              <div className="space-y-8">
                <div className="p-8 rounded-3xl border border-border bg-card sticky top-28">
                  <h3 className="font-bold mb-6">Project Details</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2 font-bold">Technologies</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 rounded-lg bg-secondary text-xs font-medium border border-border">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2 font-bold">Status</p>
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                        project.status === "Live" ? "bg-emerald-500/10 text-emerald-500" : "bg-amber-500/10 text-amber-500"
                      }`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${project.status === "Live" ? "bg-emerald-500" : "bg-amber-500"}`} />
                        {project.status}
                      </span>
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2 font-bold">Year</p>
                      <p className="text-sm font-medium">{project.year}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
