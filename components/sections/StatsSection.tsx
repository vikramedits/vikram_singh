"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/data/portfolio";

/* -------------------- COUNTER -------------------- */
function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 1200;
    const start = performance.now();

    const animate = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);

      setCount(Math.floor(eased * value));

      if (p < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

/* -------------------- CLEAN BACKGROUND -------------------- */
function Background() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* soft grid */}
      <div className="absolute inset-0 bg-[radial-linear(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] bg-size-[40px_40px]" />

      {/* linear orbs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-violet-500/20 blur-[120px] rounded-full" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-indigo-500/20 blur-[140px] rounded-full" />
    </div>
  );
}

/* -------------------- MAIN SECTION -------------------- */
export default function StatsSection() {
  const [featured, ...rest] = stats;

  return (
    <section className="relative py-28 overflow-hidden">
      <Background />

      <div className="md:max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm text-white/60">
            Built for production scale
          </p>

          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mt-3">
            Performance that scales with confidence
          </h2>

          <p className="mt-4 text-white/50 max-w-2xl mx-auto text-sm sm:text-base">
            Modern systems designed for reliability, speed, and real-world workloads.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT — KPI GRID */}
          <div className="grid grid-cols-2 gap-4">

            {/* FEATURE CARD */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-2 rounded-3xl p-8 bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <p className="text-sm text-white/60">
                Production milestone
              </p>

              <h3 className="text-5xl font-semibold mt-3">
                <Counter value={3} suffix="" /> <span className="text-violet-400">Live Apps</span>
              </h3>

              <p className="mt-4 text-white/50 text-sm max-w-md">
                Production-grade systems deployed with scalable architecture and real traffic handling.
              </p>
            </motion.div>

            {/* SMALL STATS */}
            {rest.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl p-5 bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition"
              >
                <div className="text-2xl font-semibold">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs text-white/50 mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT — VISUAL (MINIMAL IMPACT CARD) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-10 bg-white/5 border border-white/10 backdrop-blur-xl relative overflow-hidden"
          >
            {/* subtle glow accent */}
            <div className="absolute inset-0">
              <div className="absolute w-[300px] h-[300px] bg-violet-500/20 blur-[100px] rounded-full top-10 left-10" />
              <div className="absolute w-[300px] h-[300px] bg-cyan-500/20 blur-[120px] rounded-full bottom-10 right-10" />
            </div>

            <div className="relative z-10">
              <p className="text-sm text-white/60 mb-6">
                System overview
              </p>

              {/* simple visual blocks instead of SVG */}
              <div className="space-y-4">

                <div className="h-14 rounded-xl bg-white/5 border border-white/10 flex items-center px-4">
                  <div className="w-2 h-2 rounded-full bg-violet-400 mr-3" />
                  <div className="text-sm text-white/70">API Layer</div>
                </div>

                <div className="h-14 rounded-xl bg-white/5 border border-white/10 flex items-center px-4">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mr-3" />
                  <div className="text-sm text-white/70">Processing Engine</div>
                </div>

                <div className="h-14 rounded-xl bg-white/5 border border-white/10 flex items-center px-4">
                  <div className="w-2 h-2 rounded-full bg-indigo-400 mr-3" />
                  <div className="text-sm text-white/70">Database Cluster</div>
                </div>

                <div className="h-14 rounded-xl bg-white/5 border border-white/10 flex items-center px-4">
                  <div className="w-2 h-2 rounded-full bg-pink-400 mr-3" />
                  <div className="text-sm text-white/70">Realtime Sync</div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}