"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { blogPosts } from "@/data/portfolio";
import { FadeIn } from "@/components/animations/FadeIn";
import Link from "next/link";
import Image from "next/image";

export default function BlogSection() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  
  return (
    <section id="blog" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Latest <span className="text-violet-500">Insights</span></h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Sharing my thoughts on web development, design patterns, and the future of AI.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <a href="#" className="inline-flex items-center gap-2 text-violet-500 font-semibold hover:text-violet-600 transition group">
              View All Posts
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post, idx) => (
            <FadeIn key={post.id} delay={idx * 0.1}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 border border-border/50">
                  {/* Placeholder for images since actual images might not exist */}
                  <div className="absolute inset-0 bg-linear-to-br from-violet-500/20 to-indigo-500/20 group-hover:scale-105 transition-transform duration-500" />
                  {post.thumbnail && (
                    <Image 
                      src={post.thumbnail} 
                      alt={post.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500" 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center bg-muted/10">
                    <span className="text-4xl opacity-10 font-bold uppercase tracking-widest">{post.category}</span>
                  </div>
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-violet-600 border border-violet-500/20">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readingTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold leading-tight group-hover:text-violet-500 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="pt-4 flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-secondary text-muted-foreground border border-border/50">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
