"use client";

import { motion, AnimatePresence } from "framer-motion";
import { timeline, education } from "../data/userData";
import { useState } from "react";
import { Plus, Minus, GraduationCap, Milestone, User } from "lucide-react";

const About = () => {
  const [expandedIds, setExpandedIds] = useState<Record<number, boolean>>({});

  const toggleExpand = (index: number) => {
    setExpandedIds((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section id="about" className="w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-24 min-h-screen text-foreground relative z-10 scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl"
      >
        <div className="flex flex-col items-start mb-12 text-left w-full">
          <div className="flex items-center gap-4 mb-4 w-full">
            <div className="w-12 h-12 rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.2)] flex-shrink-0">
              <User size={24} />
            </div>
            <motion.h2
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[32px] md:text-[50px] lg:text-[62px] font-black text-white tracking-tighter whitespace-nowrap"
            >
              Who Am I
            </motion.h2>
            <div className="h-px flex-grow bg-gradient-to-r from-white/20 via-white/5 to-transparent ml-4" />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base md:text-lg lg:text-xl text-zinc-400 max-w-none font-medium pl-0"
          >
            A glimpse into my journey, interests, and the
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base md:text-lg lg:text-xl text-zinc-400 max-w-none font-medium pl-0 -mt-[2px]"
          >
            mindset that drives me as a developer.
          </motion.p>
        </div>

        {/* Intro */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start mb-16">
          {/* Left Side: About Me text content */}
          <div className="lg:col-span-3 space-y-5 text-left max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-base md:text-lg text-zinc-400 leading-relaxed font-medium"
            >
              I'm <strong className="text-white font-extrabold">Akhil Saklani</strong>, a <strong className="text-white font-extrabold">Computer Science undergraduate</strong> driven by a passion for building technology that creates real impact. My interests span <span className="text-[#00C8FF] font-semibold border-b border-[#00C8FF]/20 pb-0.5 hover:border-[#00C8FF] transition-all">Full Stack Development</span>, <span className="text-[#00C8FF] font-semibold border-b border-[#00C8FF]/20 pb-0.5 hover:border-[#00C8FF] transition-all">Software Engineering</span>, and <span className="text-[#00C8FF] font-semibold border-b border-[#00C8FF]/20 pb-0.5 hover:border-[#00C8FF] transition-all">Artificial Intelligence</span>, where I enjoy transforming ideas into <span className="text-[#00C8FF] font-semibold border-b border-[#00C8FF]/20 pb-0.5 hover:border-[#00C8FF] transition-all">scalable applications</span> and meaningful digital experiences. Whether it's designing intuitive user interfaces or architecting backend systems, I love bringing products to life through code.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-base md:text-lg text-zinc-400 leading-relaxed font-medium"
            >
              Beyond development, I'm constantly exploring new technologies, strengthening my <strong className="text-white font-bold">problem-solving skills</strong>, and learning how modern software systems are built and scaled. When I'm away from my laptop, you'll usually find me playing <strong className="text-white font-bold">cricket</strong>, <strong className="text-white font-bold">football</strong>, training in the <strong className="text-white font-bold">gym</strong>, or <strong className="text-white font-bold">sketching</strong>—activities that keep me creative, disciplined, and motivated both in life and engineering.
            </motion.p>
          </div>

          {/* Right Side: Portrait and Information Card */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end w-full lg:pr-6 lg:-mt-3">
            <div className="relative w-[280px] h-[320px] sm:w-[290px] sm:h-[340px] flex-shrink-0">
              {/* Badge 1: Top Right - Full Stack Dev */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 20, y: -20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="absolute -top-4 -right-4 z-20 bg-black/60 backdrop-blur-xl border border-[#00C8FF]/20 hover:border-[#00C8FF]/50 px-4 py-2 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex items-center gap-2 transition-all duration-300 cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                <span className="text-[11px] font-black uppercase tracking-wider text-white">
                  Full Stack Dev
                </span>
              </motion.div>

              {/* Badge 2: Bottom Left - AI Enthusiast */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -20, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-4 -left-4 z-20 bg-black/60 backdrop-blur-xl border border-[#00C8FF]/20 hover:border-[#00C8FF]/50 px-4 py-2 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex items-center gap-2 transition-all duration-300 cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                <span className="text-[11px] font-black uppercase tracking-wider text-white">
                  AI Enthusiast
                </span>
              </motion.div>

              {/* Professional Portrait */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.04, rotate: 1 }}
                className="relative group w-full h-full rounded-[2rem] overflow-hidden border border-[#00C8FF]/20 shadow-[0_0_15px_rgba(0,200,255,0.1)] hover:shadow-[0_0_25px_rgba(0,200,255,0.25)] transition-all duration-500 cursor-pointer"
              >
                <img
                  src="/portrait.jpg"
                  alt="Akhil Saklani Portrait"
                  className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-700 hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Timeline Header */}
        <div className="max-w-3xl mx-auto flex items-center justify-center gap-3.5 mb-12">
          <div className="w-10 h-10 rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.2)] flex-shrink-0">
            <Milestone size={20} />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] leading-none text-center">
              The Road So Far
            </h3>
            <div className="h-px w-16 bg-blue-600/30 mt-1.5" />
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="max-w-3xl mx-auto text-left relative border-l border-white/10 ml-4 md:mx-auto pl-8">
          {timeline.map((item, i) => {
            const hasMore = "more" in item && typeof item.more === "string";

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="mb-10 relative group last:mb-0"
              >
                {/* Node Dot */}
                <span className="absolute flex h-4 w-4 rounded-full bg-black border-2 border-blue-600 -left-[41px] top-1.5 transition-all duration-500 group-hover:bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.3)]" />

                <div className="flex flex-col gap-2">
                  <span className="text-xs font-black text-zinc-500 uppercase tracking-widest">
                    {item.year}
                  </span>

                  <div className="p-4 rounded-3xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-500 relative overflow-hidden">
                    <p className="text-lg md:text-xl font-bold text-white leading-relaxed">
                      {item.detail}
                    </p>

                    <AnimatePresence>
                      {expandedIds[i] && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-zinc-400 mt-2 text-base leading-relaxed"
                        >
                          {item.more}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    {hasMore && (
                      <button
                        onClick={() => toggleExpand(i)}
                        className="mt-4 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-600 hover:text-blue-400 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none rounded-sm"
                      >
                        {expandedIds[i] ? (
                          <><Minus size={14} /> Show Less</>
                        ) : (
                          <><Plus size={14} /> Read Insight</>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Education Header */}
        <div className="max-w-3xl mx-auto flex items-center justify-center gap-3.5 mt-20 mb-12">
          <div className="w-10 h-10 rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.2)] flex-shrink-0">
            <GraduationCap size={20} />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] leading-none text-center">
              Education
            </h3>
            <div className="h-px w-16 bg-blue-600/30 mt-1.5" />
          </div>
        </div>

        {/* Education Cards */}
        <div className="max-w-3xl mx-auto space-y-6 text-left">
          {education.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 rounded-3xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-blue-500/20 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-px bg-gradient-to-r from-blue-500/10 via-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex flex-col gap-2 relative z-10">
                <h4 className="text-lg md:text-xl font-bold text-white group-hover:text-blue-500 transition-colors">
                  {item.degree}
                </h4>
                <p className="text-sm md:text-base text-zinc-400 font-medium">
                  {item.institution}
                </p>
                <div className="flex items-center gap-2 text-xs md:text-sm text-zinc-400 font-semibold mt-1">
                  <span>{item.duration}</span>
                  <span>•</span>
                  <span className="text-blue-400/80">{item.info}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
