"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const codeLines = [
  { lineNum: 1, tokens: [{ text: "const ", color: "#c586c0" }, { text: "developer", color: "#9cdcfe" }, { text: " = {", color: "#d4d4d4" }] },
  { lineNum: 2, tokens: [{ text: "  name", color: "#9cdcfe" }, { text: ": ", color: "#d4d4d4" }, { text: '"Akhil Saklani"', color: "#ce9178" }, { text: ",", color: "#d4d4d4" }] },
  { lineNum: 3, tokens: [{ text: "  title", color: "#9cdcfe" }, { text: ": ", color: "#d4d4d4" }, { text: '"Full Stack Dev | AI"', color: "#ce9178" }, { text: ",", color: "#d4d4d4" }] },
  { lineNum: 4, tokens: [{ text: "  passion", color: "#9cdcfe" }, { text: ": ", color: "#d4d4d4" }, { text: '"Artificial Intelligence"', color: "#ce9178" }, { text: ",", color: "#d4d4d4" }] },
  { lineNum: 5, tokens: [{ text: "  status", color: "#9cdcfe" }, { text: ": ", color: "#d4d4d4" }, { text: '"Open for Opportunities"', color: "#ce9178" }, { text: ",", color: "#d4d4d4" }] },
  { lineNum: 6, tokens: [{ text: "  learning", color: "#9cdcfe" }, { text: ": ", color: "#d4d4d4" }, { text: '"Continuous"', color: "#ce9178" }, { text: ",", color: "#d4d4d4" }] },
  { lineNum: 7, tokens: [{ text: "  goal", color: "#9cdcfe" }, { text: ": ", color: "#d4d4d4" }, { text: '"Make an Impact"', color: "#ce9178" }, { text: ",", color: "#d4d4d4" }] },
  { lineNum: 8, tokens: [{ text: "};", color: "#d4d4d4" }] },
];

const DeveloperCard = () => {
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[280px] min-[360px]:w-[300px] sm:w-[340px] lg:w-[320px] xl:w-[380px] h-[250px] min-[360px]:h-[270px] sm:h-[340px] lg:h-[320px] xl:h-[380px] flex flex-col">
      {/* Corner bracket accents — matching the reference image (top-left & bottom-right) */}
      {/* Top-left bracket */}
      <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-blue-500/60 z-20 pointer-events-none" />
      {/* Bottom-right bracket */}
      <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-blue-500/60 z-20 pointer-events-none" />

      {/* Soft glow behind card */}
      <div className="absolute -inset-10 bg-blue-500/[0.04] blur-[70px] rounded-full -z-10 transition-all duration-700" />

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        className="group w-full h-full"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full h-full rounded-[2rem] border border-white/10 bg-[#0d1117]/90 backdrop-blur-2xl shadow-2xl group-hover:shadow-[0_0_50px_rgba(59,130,246,0.08)] group-hover:border-white/15 transition-all duration-700 overflow-hidden flex flex-col justify-between"
        >
          {/* Title Bar */}
          <div className="flex items-center justify-between px-4 py-2 sm:px-5 sm:py-3 border-b border-white/[0.06] bg-white/[0.02]">
            <div className="flex items-center gap-2">
              {/* macOS dots */}
              <div className="flex items-center gap-1.5">
                <span className="w-[10px] h-[10px] rounded-full bg-[#ff5f56]" />
                <span className="w-[10px] h-[10px] rounded-full bg-[#ffbd2e]" />
                <span className="w-[10px] h-[10px] rounded-full bg-[#27c93f]" />
              </div>
            </div>

            {/* Tab */}
            <div className="flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md bg-white/[0.04] border border-white/[0.06]">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-blue-400">
                <path d="M3 3L12 22L15 13L24 10L3 3Z" fill="currentColor" opacity="0.8" />
              </svg>
              <span className="text-[10px] sm:text-[11px] font-semibold text-zinc-400 tracking-wide">developer.ts</span>
            </div>

            <div className="w-[58px]" />
          </div>

          {/* Code Content */}
          <div className="flex-1 flex flex-col justify-center py-1.5 sm:py-4 font-mono text-[12px] sm:text-[12.5px] leading-[1.7] sm:leading-[1.85] select-none">
            {codeLines.map((line, i) => (
              <div
                key={i}
                className="flex items-center hover:bg-white/[0.02] transition-colors duration-200 px-3.5 sm:px-4"
              >
                {/* Line Number */}
                <span className="w-6 sm:w-8 text-right mr-3 sm:mr-4 text-zinc-600 text-[10px] sm:text-[11px] select-none flex-shrink-0">
                  {line.lineNum}
                </span>

                {/* Code */}
                <span className="flex-1">
                  {line.tokens.map((token, j) => (
                    <span key={j} style={{ color: token.color }}>
                      {token.text}
                    </span>
                  ))}
                  {/* Blinking cursor on line 7 */}
                  {line.lineNum === 7 && (
                    <span
                      className="inline-block w-[2px] h-[13px] sm:h-[14px] ml-0.5 align-middle transition-opacity duration-100"
                      style={{
                        backgroundColor: "#3b82f6",
                        opacity: cursorVisible ? 0.9 : 0,
                        boxShadow: cursorVisible ? "0 0 6px rgba(59,130,246,0.5)" : "none",
                      }}
                    />
                  )}
                </span>
              </div>
            ))}
          </div>

          {/* Status Bar */}
          <div className="flex items-center justify-between px-3 py-1 sm:px-4 sm:py-1.5 border-t border-white/[0.06] bg-[#007acc]/10">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-[9px] sm:text-[10px] font-semibold text-blue-400/80 uppercase tracking-wider">TypeScript</span>
              <span className="text-[9px] sm:text-[10px] text-zinc-600">•</span>
              <span className="text-[9px] sm:text-[10px] text-zinc-500 font-medium">UTF-8</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-[9px] sm:text-[10px] text-zinc-500 font-medium">Ln 7, Col 3</span>
              <span className="text-[9px] sm:text-[10px] text-zinc-600">•</span>
              <span className="text-[9px] sm:text-[10px] text-zinc-500 font-medium">Spaces: 2</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DeveloperCard;
