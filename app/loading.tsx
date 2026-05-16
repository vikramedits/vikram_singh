"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-md">
      <div className="relative flex flex-col items-center">
        {/* Animated logo/spinner */}
        <div className="relative w-20 h-20">
          <motion.div
            className="absolute inset-0 rounded-2xl border-4 border-violet-500/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-0 rounded-2xl border-4 border-t-violet-600 border-r-transparent border-b-transparent border-l-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold text-violet-600">V</span>
          </div>
        </div>
        
        {/* Loading text */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 flex flex-col items-center"
        >
          <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase animate-pulse">
            Loading Experience
          </span>
          {/* Progress bar line */}
          <div className="mt-4 w-32 h-1 bg-secondary rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-violet-600"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
