"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { skills } from "../data/userData";
import { Cpu, Terminal, GitBranch, Brain, ArrowUpRight } from "lucide-react";

// Premium dynamic count-up component using requestAnimationFrame
const CountUp = ({ end, duration = 1200, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const rate = Math.min(progress / duration, 1);
      // easeOutQuad curve
      const easeProgress = rate * (2 - rate);
      setCount(Math.floor(easeProgress * end));

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animateCount);
      }
    };

    animationFrameId = requestAnimationFrame(animateCount);
    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

const Skills = () => {
  const [gitStats, setGitStats] = useState({ repos: 7, loading: true });

  useEffect(() => {
    // Realtime GitHub API fetch
    fetch("https://api.github.com/users/Akhildev7")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.public_repos !== undefined) {
          setGitStats({
            repos: data.public_repos,
            loading: false,
          });
        } else {
          setGitStats((prev) => ({ ...prev, loading: false }));
        }
      })
      .catch(() => {
        setGitStats((prev) => ({ ...prev, loading: false }));
      });
  }, []);

  // Staggered reveal animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="skills" className="w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-24 min-h-screen text-foreground relative z-10 scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-6xl"
      >
        <div className="flex flex-col items-start mb-12 text-left w-full">
          <div className="flex items-center gap-4 mb-4 w-full">
            <div className="w-12 h-12 rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.2)] flex-shrink-0">
              <Cpu size={24} />
            </div>
            <motion.h2
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[32px] md:text-[50px] lg:text-[62px] font-black text-zinc-950 dark:text-white tracking-tighter whitespace-nowrap"
            >
              My Stack
            </motion.h2>
            <div className="h-px flex-grow bg-gradient-to-r from-zinc-200 via-zinc-100 to-transparent dark:from-white/20 dark:via-white/5 dark:to-transparent ml-4" />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base md:text-lg lg:text-xl text-zinc-500 max-w-2xl font-medium pl-16"
          >
            A curated selection of technologies I use to build high-performance products.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {skills.map((categoryGroup, categoryIndex) => (
            <motion.div
              key={categoryGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              className="p-4 rounded-3xl border border-zinc-200/80 dark:border-white/5 bg-white/70 dark:bg-white/[0.02] flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-sm font-black text-blue-600 uppercase tracking-widest pl-3 border-l-2 border-blue-600">
                  {categoryGroup.category}
                </h3>
              </div>

              <div className="grid grid-cols-2 min-[375px]:grid-cols-3 sm:grid-cols-4 gap-2.5">
                {categoryGroup.items.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="group flex flex-col items-center gap-2 p-2 rounded-2xl border border-zinc-200/80 dark:border-white/5 bg-white/60 dark:bg-white/[0.02] hover:bg-zinc-100/80 dark:hover:bg-white/[0.05] transition-all duration-300"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                      <img
                        src={item.icon}
                        alt={item.name}
                        className={`w-full h-full object-contain ${item.invertDark ? 'dark:invert' : ''}`}
                      />
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold text-zinc-500 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors text-center uppercase tracking-tighter">
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Premium Developer Dashboard Section */}
        <div className="mt-16 md:mt-24 border-t border-zinc-200/70 dark:border-white/10 pt-10 md:pt-16 text-left w-full">
          <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-10 w-full">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.12)] dark:shadow-[0_0_15px_rgba(59,130,246,0.2)] flex-shrink-0">
              <Terminal size={20} className="animate-pulse md:hidden" />
              <Terminal size={24} className="animate-pulse hidden md:block" />
            </div>
            <motion.h3
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[20px] sm:text-[26px] md:text-[42px] lg:text-[50px] font-black text-zinc-950 dark:text-white tracking-tighter whitespace-nowrap"
            >
              Developer Dashboard
            </motion.h3>
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-600 dark:text-[#00C8FF] text-[8px] md:text-[10px] font-black uppercase tracking-wider shrink-0 shadow-[0_0_12px_rgba(59,130,246,0.1)] self-center">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-400"></span>
              </span>
              Live
            </span>
            <div className="h-px flex-grow bg-gradient-to-r from-zinc-200 via-zinc-100 to-transparent dark:from-white/20 dark:via-white/5 dark:to-transparent ml-2 hidden md:block" />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10"
          >
            {/* Card 1: Projects & Code */}
            <motion.div
              variants={cardVariants}
              className="p-[1px] rounded-[2rem] border border-zinc-200/70 dark:border-white/10 bg-gradient-to-br from-zinc-200/80 to-zinc-100/50 dark:from-white/10 dark:to-white/5 hover:from-blue-500/30 hover:to-indigo-500/30 transition-all duration-500 group shadow-lg hover:shadow-[0_10px_30px_rgba(59,130,246,0.12)] dark:hover:shadow-[0_10px_30px_rgba(59,130,246,0.08)] hover:-translate-y-1.5 flex flex-col"
            >
              <div className="bg-white/90 dark:bg-[#0b0c10]/95 rounded-[31px] p-5 md:p-8 flex-grow flex flex-col justify-between backdrop-blur-xl relative overflow-hidden min-h-[180px] md:min-h-[220px]">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/[0.01] rounded-full blur-2xl group-hover:bg-blue-500/[0.03] transition-all duration-700 opacity-50 dark:opacity-100" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.18)] dark:group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-500">
                      <Terminal size={18} />
                    </div>

                    <span className="text-[10px] font-black text-blue-600 dark:text-blue-500 bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      <CountUp end={125} />K+ Lines of Code
                    </span>
                  </div>

                  <h4 className="text-zinc-600 dark:text-zinc-500 text-xs font-black uppercase tracking-widest mb-1.5">Projects & Code</h4>

                  <div className="text-2xl md:text-3xl font-black text-zinc-950 dark:text-white tracking-tight font-mono mb-3 md:mb-4">
                    <CountUp end={5} />+ Projects
                  </div>

                  <p className="text-sm text-zinc-700 dark:text-zinc-400 leading-relaxed font-medium">
                    125K+ lines of code crafted across full-stack applications, AI experiments, and personal projects.
                  </p>
                </div>

                {/* Accent underline */}
                <div className="h-0.5 w-12 bg-blue-500 rounded mt-6 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>

            {/* Card 2: Current Focus */}
            <motion.div
              variants={cardVariants}
              className="p-[1px] rounded-[2rem] border border-zinc-200/70 dark:border-white/10 bg-gradient-to-br from-zinc-200/80 to-zinc-100/50 dark:from-white/10 dark:to-white/5 hover:from-blue-500/30 hover:to-indigo-500/30 transition-all duration-500 group shadow-lg hover:shadow-[0_10px_30px_rgba(59,130,246,0.12)] dark:hover:shadow-[0_10px_30px_rgba(59,130,246,0.08)] hover:-translate-y-1.5 flex flex-col"
            >
              <div className="bg-white/90 dark:bg-[#0b0c10]/95 rounded-[31px] p-5 md:p-8 flex-grow flex flex-col justify-between backdrop-blur-xl relative overflow-hidden min-h-[180px] md:min-h-[220px]">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/[0.01] rounded-full blur-2xl group-hover:bg-blue-500/[0.03] transition-all duration-700 opacity-50 dark:opacity-100" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.18)] dark:group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-500">
                      <Brain size={18} />
                    </div>

                    <span className="text-[10px] font-black text-amber-800 dark:text-yellow-400 bg-amber-500/10 dark:bg-yellow-500/10 border border-amber-500/20 dark:border-yellow-500/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
                      Learning Daily
                    </span>
                  </div>

                  <h4 className="text-zinc-600 dark:text-zinc-500 text-xs font-black uppercase tracking-widest mb-1.5">Current Focus</h4>

                  <div className="text-2xl md:text-3xl font-black tracking-tight mb-3 md:mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 dark:from-blue-400 dark:via-indigo-400 dark:to-blue-500 bg-clip-text text-transparent animate-gradient-sweep">
                    Full Stack + AI
                  </div>

                  <p className="text-sm text-zinc-700 dark:text-zinc-400 leading-relaxed font-medium">
                    Exploring modern web technologies, AI applications, System Design, and scalable software systems.
                  </p>
                </div>

                {/* Accent underline */}
                <div className="h-0.5 w-12 bg-indigo-500 rounded mt-6 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>

            {/* Card 3: GitHub Realtime */}
            <motion.div
              variants={cardVariants}
              onClick={() => window.open("https://github.com/Akhildev7", "_blank")}
              className="p-[1px] rounded-[2rem] border border-zinc-200/70 dark:border-white/10 bg-gradient-to-br from-zinc-200/80 to-zinc-100/50 dark:from-white/10 dark:to-white/5 hover:from-blue-500/30 hover:to-indigo-500/30 transition-all duration-500 group shadow-lg hover:shadow-[0_10px_30px_rgba(59,130,246,0.12)] dark:hover:shadow-[0_10px_30px_rgba(59,130,246,0.08)] hover:-translate-y-1.5 flex flex-col cursor-pointer"
            >
              <div className="bg-white/90 dark:bg-[#0b0c10]/95 rounded-[31px] p-5 md:p-8 flex-grow flex flex-col justify-between backdrop-blur-xl relative overflow-hidden min-h-[180px] md:min-h-[220px]">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/[0.01] rounded-full blur-2xl group-hover:bg-blue-500/[0.03] transition-all duration-700 opacity-50 dark:opacity-100" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.18)] dark:group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:rotate-12 transition-all duration-500">
                      <GitBranch size={18} />
                    </div>

                    <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-white flex items-center gap-1 transition-colors font-mono">
                      Visit Profile <ArrowUpRight size={12} />
                    </span>
                  </div>

                  <h4 className="text-zinc-600 dark:text-zinc-500 text-xs font-black uppercase tracking-widest mb-1.5">GitHub Realtime</h4>

                  <div className="text-2xl md:text-3xl font-black text-zinc-950 dark:text-white tracking-tight font-mono mb-3 md:mb-4">
                    {gitStats.loading ? (
                      <span className="text-xl text-zinc-600 animate-pulse">Syncing...</span>
                    ) : (
                      <CountUp end={gitStats.repos} />
                    )}+ Repositories
                  </div>

                  <p className="text-sm text-zinc-700 dark:text-zinc-400 leading-relaxed font-medium">
                    Building in public, shipping projects, and documenting my development journey.
                  </p>
                </div>

                {/* Accent underline */}
                <div className="h-0.5 w-12 bg-blue-500 rounded mt-6 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          </motion.div>

          {/* Continuous scrolling status band ticker */}
          <div className="w-full overflow-hidden border border-zinc-200 dark:border-white/5 bg-black/[0.03] dark:bg-white/[0.01] rounded-2xl py-2.5 relative">
            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#fbfbfc] dark:from-[#050505] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#fbfbfc] dark:from-[#050505] to-transparent z-10 pointer-events-none" />

            <div className="flex whitespace-nowrap animate-marquee font-mono text-[11px] tracking-wider select-none">
              {/* Track 1 */}
              <div className="flex items-center gap-16 shrink-0 pr-16">
                {Array(3).fill(null).map((_, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="text-blue-600 dark:text-[#00C8FF] font-black uppercase tracking-wider text-[10px]">Currently Learning</span>
                    <span className="text-zinc-500 dark:text-zinc-600">→</span>
                    <span className="text-zinc-800 dark:text-zinc-300 font-semibold">Next.js</span>
                    <span className="text-blue-500/40">•</span>
                    <span className="text-zinc-800 dark:text-zinc-300 font-semibold">PostgreSQL</span>
                    <span className="text-blue-500/40">•</span>
                    <span className="text-zinc-800 dark:text-zinc-300 font-semibold">AI Applications</span>
                    <span className="text-blue-500/40">•</span>
                    <span className="text-zinc-800 dark:text-zinc-300 font-semibold">System Design</span>
                    <span className="text-blue-500/40">•</span>
                    <span className="text-zinc-800 dark:text-zinc-300 font-semibold">Machine Learning</span>
                  </div>
                ))}
              </div>

              {/* Track 2 (duplicate for seamless loop) */}
              <div className="flex items-center gap-16 shrink-0 pr-16">
                {Array(3).fill(null).map((_, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="text-blue-600 dark:text-[#00C8FF] font-black uppercase tracking-wider text-[10px]">Currently Learning</span>
                    <span className="text-zinc-500 dark:text-zinc-600">→</span>
                    <span className="text-zinc-800 dark:text-zinc-300 font-semibold">Next.js</span>
                    <span className="text-blue-500/40">•</span>
                    <span className="text-zinc-800 dark:text-zinc-300 font-semibold">PostgreSQL</span>
                    <span className="text-blue-500/40">•</span>
                    <span className="text-zinc-800 dark:text-zinc-300 font-semibold">AI Applications</span>
                    <span className="text-blue-500/40">•</span>
                    <span className="text-zinc-800 dark:text-zinc-300 font-semibold">System Design</span>
                    <span className="text-blue-500/40">•</span>
                    <span className="text-zinc-800 dark:text-zinc-300 font-semibold">Machine Learning</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
