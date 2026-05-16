"use client";

import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Tag, 
  Share2, 
  MessageSquare,
  Bookmark,
  ChevronRight,
  User,
  Heart
} from "lucide-react";
import { blogPosts, personalInfo } from "@/data/portfolio";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/layout/ThemeProvider";
import BackgroundEffects from "@/components/animations/BackgroundEffects";
import CustomCursor from "@/components/animations/CustomCursor";
import Link from "next/link";
import { useState } from "react";

export default function BlogDetailClient({ slug }: { slug: string }) {
  const [liked, setLiked] = useState(false);
  
  const postIndex = blogPosts.findIndex((p) => p.slug === slug);
  const post = blogPosts[postIndex];

  if (!post) {
    return (
      <ThemeProvider>
        <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <Link 
              href="/#blog"
              className="px-6 py-2 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </ThemeProvider>
    );
  }

  const nextPost = blogPosts[(postIndex + 1) % blogPosts.length];

  return (
    <ThemeProvider>
      <BackgroundEffects />
      <CustomCursor />
      <div className="flex min-h-screen flex-col bg-background text-foreground font-sans">
        <Navbar />
        
        <main className="flex-1 pt-28 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            
            {/* Back Button */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-10"
            >
              <Link 
                href="/#blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-violet-500 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Link>
            </motion.div>

            {/* Header */}
            <header className="mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-violet-500/10 text-violet-500 border border-violet-500/20">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {post.readingTime}
                    </span>
                  </div>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
                  {post.title}
                </h1>

                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-white font-bold text-xs">
                      VS
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{personalInfo.name}</p>
                      <p className="text-xs text-muted-foreground">Author & Developer</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => setLiked(!liked)}
                      className={`w-10 h-10 flex items-center justify-center rounded-full border transition-colors ${liked ? "bg-rose-500/10 border-rose-500/20 text-rose-500" : "bg-secondary/50 border-border text-muted-foreground hover:text-foreground"}`}
                    >
                      <Heart className={`w-5 h-5 ${liked ? "fill-current" : ""}`} />
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full border border-border bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full border border-border bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors">
                      <Bookmark className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </header>

            {/* Featured Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative aspect-video rounded-3xl overflow-hidden border border-border shadow-2xl mb-16"
            >
              <div className="absolute inset-0 bg-linear-to-br from-violet-500/20 to-indigo-500/20" />
              <div className="absolute inset-0 flex items-center justify-center bg-muted/30">
                <span className="text-6xl opacity-5 font-black uppercase tracking-widest">{post.category}</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-muted-foreground italic text-sm">Post Illustration / Cover Image</p>
              </div>
            </motion.div>

            {/* Content Section */}
            <article className="prose prose-invert prose-violet max-w-none mb-20">
              <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
                <p className="text-foreground font-medium text-xl leading-relaxed">
                  {post.excerpt}
                </p>
                
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <div className="p-8 rounded-2xl bg-secondary/30 border border-border my-12">
                  <h3 className="text-xl font-bold text-foreground mb-4">Key Takeaways</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-violet-500 shrink-0 mt-0.5" />
                      Understanding the core principles of modern architecture.
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-violet-500 shrink-0 mt-0.5" />
                      Implementing high-performance patterns in Next.js.
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-violet-500 shrink-0 mt-0.5" />
                      Optimizing for user experience and accessibility.
                    </li>
                  </ul>
                </div>

                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Deep Dive into Implementation</h2>
                
                <p>
                  Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                  <div className="p-6 rounded-2xl border border-border bg-card">
                    <h4 className="font-bold text-foreground mb-2">Strategy A</h4>
                    <p className="text-sm">Focused on rapid development and prototyping with existing tools.</p>
                  </div>
                  <div className="p-6 rounded-2xl border border-border bg-card">
                    <h4 className="font-bold text-foreground mb-2">Strategy B</h4>
                    <p className="text-sm">Scalable production-grade approach with custom infrastructure.</p>
                  </div>
                </div>

                <p>
                  Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id sem consectetuer libero luctus adipiscing.
                </p>
              </div>
            </article>

            {/* Footer / Tags */}
            <div className="pt-10 border-t border-border mb-20">
              <div className="flex flex-wrap gap-2 mb-10">
                {post.tags.map(tag => (
                  <span key={tag} className="px-4 py-2 rounded-xl bg-secondary text-sm font-medium border border-border text-muted-foreground hover:text-foreground transition-colors cursor-default">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Author Bio */}
              <div className="p-8 rounded-3xl bg-linear-to-br from-violet-600/5 to-indigo-600/5 border border-violet-500/10 flex flex-col sm:flex-row items-center gap-6">
                <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-white font-bold text-2xl shrink-0">
                  VS
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-xl font-bold mb-2">{personalInfo.name}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A passionate Full Stack Developer and technical writer sharing experiences and lessons learned from building modern web applications and AI systems.
                  </p>
                  <div className="flex justify-center sm:justify-start gap-4 mt-4">
                    <Link href="/#contact" className="text-sm font-bold text-violet-500 hover:underline">Get in Touch</Link>
                    <Link href="/" className="text-sm font-bold text-violet-500 hover:underline">View Portfolio</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Post Teaser */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-10"
            >
              <Link 
                href={`/blog/${nextPost.slug}`}
                className="group block p-8 rounded-3xl bg-linear-to-r from-violet-600/5 to-indigo-600/5 border border-violet-500/10 hover:border-violet-500/30 transition-all"
              >
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <span className="text-xs font-bold text-violet-500 uppercase tracking-widest mb-2 block">Read Next</span>
                    <h2 className="text-2xl font-bold group-hover:text-violet-500 transition-colors">
                      {nextPost.title}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2 text-violet-500 font-bold shrink-0">
                    Next Story
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>

          </div>
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}
