"use client";

import { useState, useEffect } from "react";
import { Terminal, Code2, Sun, Moon, Bot, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";


type Props = {
  terminalMode: boolean;
  setTerminalMode: (v: boolean) => void;
  uiType?: "landing" | "modular";
  setUiType?: (v: "landing" | "modular") => void;
  theme?: string;
  setTheme?: (v: string) => void;
  isAiOpen: boolean;
  setIsAiOpen: (v: boolean) => void;
};

const Navbar = ({ terminalMode, setTerminalMode, uiType = "landing", setUiType, theme = "dark", setTheme, isAiOpen, setIsAiOpen }: Props) => {
  const isLight = theme === "light";
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const [logoClicked, setLogoClicked] = useState(false);

  useEffect(() => {
    const hasSeenTooltip = localStorage.getItem("seen-navbar-ai-tooltip");
    if (!hasSeenTooltip && !isAiOpen) {
      const timer = setTimeout(() => {
        setShowTooltip(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isAiOpen]);

  const handleCloseTooltip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowTooltip(false);
    localStorage.setItem("seen-navbar-ai-tooltip", "true");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${terminalMode ? "py-0" : scrolled ? "py-1.5 sm:py-1" : "py-3 sm:py-2.5"
        }`}
    >
      {/* Scroll Progress Bar */}
      {!terminalMode && (
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-[#00C8FF] to-blue-500 transition-all duration-75 z-50"
          style={{ width: `${scrollProgress}%` }}
        />
      )}
      <div className={`mx-auto transition-all duration-300 ${terminalMode ? "max-w-full px-0 mt-2" : "max-w-7xl px-3 sm:px-4 lg:px-6"
        }`}>
        <div
          className={`relative flex items-center justify-between transition-all duration-300 ${terminalMode
            ? "bg-black text-green-400 border-b border-green-500/30 rounded-none py-2 px-3 sm:px-4"
            : `rounded-2xl border transition-all duration-300 ${scrolled
              ? `py-2.5 sm:py-2 px-4 sm:px-5 backdrop-blur-2xl ${isLight
                ? "bg-white/70 shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.5)] border-black/[0.06]"
                : "bg-[#0a0a12]/60 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.03)] border-white/[0.06]"
              }`
              : "py-3 sm:py-2.5 px-4 sm:px-5 bg-transparent border-transparent"
            }`
            }`}
        >
          {/* Subtle blue-tinted inner glow when scrolled */}
          {!terminalMode && scrolled && (
            <div className={`absolute inset-0 rounded-2xl pointer-events-none ${isLight ? "bg-gradient-to-b from-blue-500/[0.03] to-transparent" : "bg-gradient-to-b from-blue-500/[0.02] to-transparent"}`} />
          )}

          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              if (terminalMode) {
                e.preventDefault();
              }
              setLogoClicked(true);
              setTimeout(() => setLogoClicked(false), 600);
            }}
            className="flex items-center gap-1.5 sm:gap-2.5 group relative z-10"
          >
            {/* Logo icon with blue glow */}
            <div className="relative">
              {/* Subtle blue glow behind icon */}
              {!terminalMode && (
                <div className="absolute inset-0 rounded-xl bg-blue-500/10 blur-[8px] group-hover:bg-blue-500/20 transition-all duration-300" />
              )}
              <div className={`relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl border transition-all duration-300 ${terminalMode
                ? "border-green-500/50 bg-green-500/10"
                : isLight
                  ? "border-black/[0.08] bg-black/[0.03] group-hover:border-blue-500/30 group-hover:bg-blue-500/[0.08]"
                  : "border-white/[0.08] bg-white/[0.04] group-hover:border-blue-500/30 group-hover:bg-blue-500/[0.08]"
                } ${logoClicked && !terminalMode ? "border-blue-500/40 bg-blue-500/10" : ""}`}>
                {terminalMode ? (
                  <Terminal className="text-green-500 w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]" />
                ) : (
                  <Code2 className={`text-blue-500 group-hover:text-blue-400 transition-all duration-300 w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] group-hover:rotate-12 ${logoClicked ? "rotate-12" : ""}`} />
                )}
              </div>
            </div>
            <div className="relative">
              <span className={`font-black text-lg sm:text-2xl tracking-tighter flex items-baseline select-none ${isLight ? "text-zinc-900" : "text-white/95"}`}>
                Akhil<span className={`text-[12px] sm:text-[15px] ml-0.5 transition-colors duration-300 font-bold ${isLight ? "text-zinc-400 group-hover:text-blue-500" : "text-zinc-600 group-hover:text-blue-400/80"}`}>.DEV</span>
              </span>
              <div className={`absolute -bottom-0.5 left-0 h-[2px] rounded-full transition-all duration-300 w-0 group-hover:w-full ${logoClicked ? "w-full" : ""} ${terminalMode ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]" : "bg-gradient-to-r from-blue-500 to-indigo-500 shadow-[0_0_8px_rgba(59,130,246,0.4)]"}`} />
            </div>
          </a>

          {/* Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 relative z-10">
            {/* 1. Theme Toggle */}
            {!terminalMode && setTheme && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={`p-2 sm:p-2.5 rounded-xl border transition-all duration-300 active:scale-95 flex items-center justify-center cursor-pointer group ${isLight
                  ? "border-black/[0.08] bg-black/[0.03] hover:bg-black/[0.06] hover:border-black/[0.12] text-zinc-500 hover:text-zinc-700"
                  : "border-white/[0.06] bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/[0.12] text-zinc-500 hover:text-zinc-300"
                }`}
                title="Toggle Light/Dark Theme"
              >
                {theme === "dark" ? (
                  <Sun size={14} className="sm:w-[18px] sm:h-[18px] transition-transform duration-500 group-hover:rotate-45" />
                ) : (
                  <Moon size={14} className="sm:w-[18px] sm:h-[18px] transition-transform duration-500 group-hover:-rotate-12" />
                )}
              </button>
            )}



            {/* 2. Resume Button */}
            {!terminalMode && (
              <a
                href="https://drive.google.com/file/d/17JCGXhkabSrHT3FGyEkwBVneEPjC-u6T/view"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-0.5 sm:gap-1 px-3 py-[7px] sm:px-5 sm:py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold transition-all duration-300 hover:shadow-[0_4px_20px_rgba(59,130,246,0.35)] hover:-translate-y-[1px] active:scale-[0.97] active:translate-y-0 text-[11px] sm:text-[13px] tracking-wide cursor-pointer border border-blue-400/20 hover:border-blue-400/30 group"
              >
                <span>Resume</span>
                <span className="text-white/70 group-hover:text-white transition-colors duration-300 text-xs sm:text-[15px]">↗</span>
              </a>
            )}

            {/* 3. AI Assistant Button (Only visible on mobile) */}
            {!terminalMode && (
              <div className="block sm:hidden relative">
                <button
                  onClick={() => {
                    setIsAiOpen(!isAiOpen);
                    setShowTooltip(false);
                    localStorage.setItem("seen-navbar-ai-tooltip", "true");
                  }}
                  className={`p-2 sm:p-2.5 rounded-xl border transition-all duration-300 flex items-center justify-center cursor-pointer relative group active:scale-95 ${isAiOpen
                    ? "border-blue-400/40 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_0_16px_rgba(59,130,246,0.3)]"
                    : "border-blue-500/20 bg-blue-600/[0.08] text-blue-400 hover:bg-blue-600/15 hover:border-blue-500/30 shadow-[0_0_12px_rgba(59,130,246,0.1)]"
                    }`}
                  title="Chat with Akhil's AI"
                >
                  {!isAiOpen && (
                    <span className="absolute -inset-0.5 rounded-xl bg-blue-500/15 blur-[6px] animate-pulse pointer-events-none group-hover:bg-blue-500/25" />
                  )}
                  <Bot size={14} className="sm:w-[16px] sm:h-[16px] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                </button>

                {/* Popover notification bubble */}
                <AnimatePresence>
                  {showTooltip && !isAiOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-12 right-0 z-[60] bg-blue-600 text-white font-bold text-[11px] sm:text-xs px-3 py-2 rounded-xl shadow-[0_10px_25px_rgba(59,130,246,0.3)] border border-blue-400/20 flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
                      onClick={() => {
                        setIsAiOpen(true);
                        setShowTooltip(false);
                        localStorage.setItem("seen-navbar-ai-tooltip", "true");
                      }}
                    >
                      {/* Arrow pointing up to the button */}
                      <div className="absolute top-[-5px] right-[14px] w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[5px] border-b-blue-600" />
                      <Bot size={12} className="animate-bounce" />
                      <span>Ask Akhil's AI!</span>
                      <button
                        onClick={handleCloseTooltip}
                        className="text-white/60 hover:text-white ml-1 p-0.5 rounded-full hover:bg-white/10"
                      >
                        <X size={10} />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* 4. Terminal Button (Only visible on desktop/tab) */}
            <button
              onClick={() => setTerminalMode(!terminalMode)}
              className={`hidden sm:flex p-2.5 rounded-xl border transition-all duration-300 items-center justify-center cursor-pointer active:scale-95 group ${terminalMode
                ? "border-green-500/30 bg-green-500/10 text-green-400 shadow-[0_0_12px_rgba(34,197,94,0.2)]"
                : isLight
                  ? "border-black/[0.08] bg-black/[0.03] hover:bg-black/[0.06] hover:border-blue-500/20 text-zinc-500 hover:text-blue-500 hover:shadow-[0_0_12px_rgba(59,130,246,0.1)]"
                  : "border-white/[0.06] bg-white/[0.03] hover:bg-white/[0.07] hover:border-blue-500/20 text-zinc-500 hover:text-blue-400 hover:shadow-[0_0_12px_rgba(59,130,246,0.1)]"
                }`}
              title="Toggle Terminal"
            >
              <Terminal size={16} className={`sm:w-[18px] sm:h-[18px] transition-all duration-300 group-hover:scale-110 ${terminalMode ? "animate-pulse text-green-400" : ""}`} />
            </button>


          </div>
        </div>
      </div>
    </nav >
  );
};

export default Navbar;
