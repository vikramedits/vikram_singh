"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { FadeIn } from "@/components/animations/FadeIn";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Let&apos;s <span className="text-violet-500">Connect</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Have a project in mind or just want to say hi? I&apos;m always open to discussing new opportunities and creative ideas.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <FadeIn direction="left" delay={0.2}>
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-violet-500/10 flex items-center justify-center shrink-0 border border-violet-500/20">
                      <Mail className="w-6 h-6 text-violet-500" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email Me</p>
                      <a href={`mailto:${personalInfo.email}`} className="text-lg font-medium hover:text-violet-500 transition">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center shrink-0 border border-indigo-500/20">
                      <MapPin className="w-6 h-6 text-indigo-500" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Location</p>
                      <p className="text-lg font-medium">{personalInfo.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-fuchsia-500/10 flex items-center justify-center shrink-0 border border-fuchsia-500/20">
                      <MessageSquare className="w-6 h-6 text-fuchsia-500" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Socials</p>
                      <div className="flex gap-4 mt-2">
                        <a href={personalInfo.github} className="text-muted-foreground hover:text-violet-500 transition">GitHub</a>
                        <a href={personalInfo.linkedin} className="text-muted-foreground hover:text-violet-500 transition">LinkedIn</a>
                        <a href={personalInfo.twitter} className="text-muted-foreground hover:text-violet-500 transition">Twitter</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-8 rounded-3xl bg-linear-to-br from-violet-600 to-indigo-700 text-white overflow-hidden relative group">
                  <div className="relative z-10">
                    <h4 className="text-xl font-bold mb-2">Ready to start?</h4>
                    <p className="text-white/80 mb-6">Let&apos;s build something amazing together. Reach out for a free consultation.</p>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-violet-600 rounded-full font-semibold hover:bg-opacity-90 transition shadow-lg"
                    >
                      Book a Call
                      <Send className="w-4 h-4" />
                    </a>
                  </div>
                  {/* Decorative circles */}
                  <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute -left-4 -top-4 w-24 h-24 bg-white/5 rounded-full blur-2xl" />
                </div>
              </FadeIn>
            </div>

            {/* Contact Form */}
            <FadeIn direction="right" delay={0.4}>
              <form className="space-y-6 p-8 rounded-3xl bg-card border border-border shadow-sm">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <input 
                    type="text" 
                    placeholder="Project Inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea 
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition resize-none"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 rounded-xl bg-violet-600 text-white font-bold hover:bg-violet-700 transition-all shadow-lg hover:shadow-violet-500/25 flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
