"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, FolderCode } from "lucide-react";
import { GithubIcon } from "../components/Icons";
import clsx from "clsx";
import { projectData } from "../data/userData";

const categories = Array.from(new Set(projectData.map((p) => p.category)));

const Projects = ({ limit }: { limit?: number }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = projectData.filter(
    (p) => activeCategory === "all" || p.category === activeCategory
  );

  const displayProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <section id="projects" className="w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-24 min-h-screen text-foreground relative z-10 scroll-mt-32">
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
              <FolderCode size={24} />
            </div>
            <motion.h2
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[32px] md:text-[50px] lg:text-[62px] font-black text-white tracking-tighter whitespace-nowrap"
            >
              Featured Projects
            </motion.h2>
            <div className="h-px flex-grow bg-gradient-to-r from-white/20 via-white/5 to-transparent ml-4" />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base md:text-lg lg:text-xl text-zinc-500 max-w-2xl font-medium pl-16"
          >
            A collection of my most impactful work, from web applications to creative experiments.
          </motion.p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 relative z-20">
          <button
            onClick={() => setActiveCategory("all")}
            className={clsx(
              "px-6 py-2.5 rounded-full text-xs sm:text-sm font-black transition-all duration-300 uppercase tracking-widest border",
              activeCategory === "all"
                ? "bg-white text-black border-white"
                : "text-zinc-500 border-white/10 hover:border-white/30 hover:text-white"
            )}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={clsx(
                "px-6 py-2.5 rounded-full text-xs sm:text-sm font-black transition-all duration-300 uppercase tracking-widest border",
                activeCategory === cat
                  ? "bg-white text-black border-white"
                  : "text-zinc-500 border-white/10 hover:border-white/30 hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-4 md:grid-cols-2 max-w-6xl mx-auto sm:px-0">
          {displayProjects.map((project) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="rounded-3xl p-5 border border-white/5 bg-white/[0.02] hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-300 text-left flex flex-col h-full group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(59,130,246,0.05)]"
            >
              <div className="flex items-center justify-between gap-4 mb-3">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-500 transition-colors">{project.name}</h3>
                {project.status && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-[#00C8FF] text-[10px] font-black uppercase tracking-wider shrink-0 shadow-[0_0_12px_rgba(59,130,246,0.1)]">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                    </span>
                    {project.status}
                  </span>
                )}
              </div>
              <p className="text-base text-zinc-400 mb-6 flex-grow leading-relaxed">
                {project.description || "Building the future of digital experiences."}
              </p>
              <div className="flex flex-wrap gap-1 text-xs mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-zinc-300 font-semibold tracking-tight"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-base text-zinc-500 hover:text-white transition-colors font-bold"
                  >
                    <GithubIcon className="w-[18px] h-[18px]" /> Source
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-black text-blue-500 hover:text-blue-400 transition-colors uppercase tracking-widest"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {limit && filteredProjects.length > limit && (
          <div className="mt-16 flex justify-center">
            <a
              href="/projects"
              className="px-8 py-3.5 rounded-full border border-white/10 text-white font-black text-base transition-all duration-300 hover:bg-white/5 hover:border-white/30 flex items-center gap-2 group"
            >
              View More Projects
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Projects;
