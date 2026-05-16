"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const codeSnippet = `const developer = {
  name: "Vikram Singh",
  mission: "Build Scalable Systems",
  focus: ["Next.js", "AI", "Performance"],
  motto: "Code is Poetry in Motion",
  ready: true
};`;

export default function TypewriterCode() {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(codeSnippet.slice(0, i));
      i++;
      if (i > codeSnippet.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full rounded-2xl bg-black/90 border border-white/10 p-6 font-mono text-sm leading-relaxed shadow-2xl relative overflow-hidden group">
      {/* Window Controls */}
      <div className="flex gap-1.5 mb-4">
        <div className="w-2.5 h-2.5 rounded-full bg-rose-500/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
      </div>

      <div className="text-violet-400">
        <pre className="whitespace-pre-wrap break-all">
          <code>
            {text}
            {isTyping && <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} className="inline-block w-2 h-4 bg-violet-500 ml-1 translate-y-0.5" />}
          </code>
        </pre>
      </div>

      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/5 blur-3xl pointer-events-none" />
    </div>
  );
}
