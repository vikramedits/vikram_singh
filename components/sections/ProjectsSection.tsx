"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight, Search } from "lucide-react";
import { projects } from "@/data/portfolio";
import { FadeIn } from "@/components/animations/FadeIn";

const allCategories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = projects.filter((p) => {
    const matchCategory = filter === "All" || p.category === filter;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchCategory && matchSearch;
  });

  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-violet-500 tracking-wider uppercase">Projects</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                work
              </span>
            </h2>
          </div>
        </FadeIn>

        {/* Filters & Search */}
        <FadeIn delay={0.1}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
            <div className="flex gap-2 flex-wrap justify-center">
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all ${filter === cat ? "text-white" : "text-muted-foreground hover:text-foreground bg-secondary"
                    }`}
                >
                  {filter === cat && (
                    <motion.span
                      layoutId="project-filter"
                      className="absolute inset-0 bg-violet-600 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 pr-4 py-2 text-sm rounded-full bg-secondary border border-border focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/20 w-64 transition-all"
              />
            </div>
          </div>
        </FadeIn>

        {/* Project cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter + search}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative rounded-2xl bg-card border border-border hover:border-violet-500/30 overflow-hidden transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                {/* Thumbnail / Preview */}
                <div className="relative h-48 bg-gradient-to-br from-violet-500/10 to-indigo-500/20 overflow-hidden">
                  {/* Browser frame */}
                  <div className="absolute top-3 left-3 flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold text-violet-500/20">{project.title[0]}</span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 gap-3">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-white text-black hover:bg-white/90 transition-colors">
                        <ExternalLink className="w-3 h-3" /> Live
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors backdrop-blur-sm">
                        {/* <Github className="w-3 h-3" /> Code */}
                      </a>
                    )}
                  </div>
                  {/* Status badge */}
                  <div className="absolute top-3 right-3">
                    <span className={`px-2.5 py-1 text-[10px] font-medium rounded-full ${project.status === "Live" ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-violet-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-secondary text-muted-foreground border border-border">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-secondary text-muted-foreground border border-border">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  <a
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-violet-500 hover:text-violet-400 transition-colors"
                  >
                    View Details
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No projects found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
}
