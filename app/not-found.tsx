"use client";

import { motion } from "framer-motion";
import { Home, ArrowLeft, Search } from "lucide-react";
import Link from "next/link";
import ThemeProvider from "@/components/layout/ThemeProvider";
import BackgroundEffects from "@/components/animations/BackgroundEffects";
import CustomCursor from "@/components/animations/CustomCursor";

export default function NotFound() {
  return (
    <ThemeProvider>
      <BackgroundEffects />
      <CustomCursor />
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-6">
        <div className="max-w-md w-full text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <h1 className="text-9xl font-black text-violet-500/10 select-none">404</h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <Search className="w-20 h-20 text-violet-500 animate-bounce" />
            </div>
          </motion.div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Page Not Found</h2>
            <p className="text-muted-foreground leading-relaxed">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link 
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-violet-600 text-white rounded-full font-bold hover:bg-violet-700 transition shadow-lg shadow-violet-500/20 group"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-secondary text-foreground rounded-full font-bold hover:bg-accent transition border border-border"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </div>
          
          <div className="pt-12">
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Vikram Singh Portfolio</p>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
