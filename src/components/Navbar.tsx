"use client";

import { useState, useEffect } from "react";
import { Terminal, Code2, Sun, Moon } from "lucide-react";


type Props = {
  terminalMode: boolean;
  setTerminalMode: (v: boolean) => void;
  uiType?: "landing" | "modular";
  setUiType?: (v: "landing" | "modular") => void;
  theme?: string;
  setTheme?: (v: string) => void;
};

const Navbar = ({ terminalMode, setTerminalMode, theme = "dark", setTheme }: Props) => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${terminalMode ? "py-0" : scrolled ? "py-1 sm:py-1.5" : "py-2 sm:py-2.5"
        }`}
    >
      {/* Scroll Progress Bar */}
      {!terminalMode && (
        <div
          className="absolute bottom-0 left-0 h-[2.5px] bg-gradient-to-r from-blue-500 via-[#00C8FF] to-blue-500 transition-all duration-75 z-50"
          style={{ width: `${scrollProgress}%` }}
        />
      )}
      <div className={`mx-auto transition-all duration-300 ${terminalMode ? "max-w-full px-0 mt-2" : "max-w-7xl px-2 sm:px-4 lg:px-6"
        }`}>
        <div
          className={`relative flex items-center justify-between px-2 sm:px-4 transition-all duration-300 ${terminalMode
            ? "bg-black text-green-400 border-b border-green-500/30 rounded-none py-2"
            : `py-2 rounded-2xl border ${scrolled
              ? "bg-black/80 backdrop-blur-xl border-white/10 shadow-2xl"
              : "bg-transparent border-transparent"
            }`
            }`}
        >
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              if (terminalMode) {
                e.preventDefault();
              }
            }}
            className="flex items-center gap-1.5 sm:gap-2 group animate-duration-300"
          >
            <div className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl border transition-all duration-300 ${terminalMode ? "border-green-500/50 bg-green-500/10" : "border-white/10 bg-white/5 group-hover:border-blue-500/50"
              }`}>
              {terminalMode ? (
                <Terminal className="text-green-500 w-[18px] h-[18px] sm:w-[22px] sm:h-[22px]" />
              ) : (
                <Code2 className="text-blue-500 group-hover:text-blue-400 transition-colors duration-300 w-[18px] h-[18px] sm:w-[22px] sm:h-[22px]" />
              )}
            </div>
            <div className="relative">
              <span className="font-black text-lg sm:text-2xl tracking-tighter text-white flex items-baseline select-none">
                Akhil<span className="text-[13px] sm:text-[17px] ml-0.5 transition-colors duration-300 text-zinc-500 group-hover:text-blue-500">.Dev</span>
              </span>
              <div className={`absolute -bottom-0.5 left-0 h-[2.5px] rounded-full transition-all duration-300 w-0 group-hover:w-full ${terminalMode ? "bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" : "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"}`} />
            </div>
          </a>

          {/* Controls */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            {/* 1. Theme Toggle */}
            {!terminalMode && setTheme && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-1.5 sm:p-2 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all cursor-pointer flex items-center justify-center"
                title="Toggle Light/Dark Theme"
              >
                {theme === "dark" ? <Sun size={16} className="sm:w-[18px] sm:h-[18px]" /> : <Moon size={16} className="sm:w-[18px] sm:h-[18px]" />}
              </button>
            )}

            {/* 2. Resume Button */}
            {!terminalMode && (
              <a
                href="https://drive.google.com/file/d/17JCGXhkabSrHT3FGyEkwBVneEPjC-u6T/view"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black transition-all duration-300 shadow-lg shadow-blue-500/20 text-[10px] sm:text-xs md:text-sm uppercase tracking-wider cursor-pointer"
              >
                Resume
              </a>
            )}

            {/* 3. Terminal Button */}
            <button
              onClick={() => setTerminalMode(!terminalMode)}
              className={`flex items-center gap-1 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-xl border transition-all duration-300 text-[10px] sm:text-xs font-black uppercase tracking-wider cursor-pointer ${terminalMode
                ? "border-green-500/50 bg-green-500/20 text-green-400"
                : "border-white/5 bg-white/5 text-zinc-400 hover:text-white hover:border-white/20"
                }`}
              title="Toggle Terminal"
            >
              <span>&gt;_</span>
            </button>
          </div>
        </div>
      </div>
    </nav >
  );
};

export default Navbar;
