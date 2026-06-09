import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import GlobalBackground from "./components/Background";
import BottomNavBar from "./components/BottomNavBar";
import TerminalMode from "./terminal/TerminalMode";
import Hero from "./sections/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import AiAssistant from "./components/AiAssistant";

import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const [terminalMode, setTerminalMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("terminal-mode") === "true";
    }
    return false;
  });

  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
      root.classList.remove("light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);
  
  const [uiType, setUiType] = useState<"landing" | "modular">(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("ui-type") as "landing" | "modular") || "landing";
    }
    return "landing";
  });

  const handleTerminalToggle = (value: boolean) => {
    setTerminalMode(value);
    localStorage.setItem("terminal-mode", String(value));
  };

  const [activeTab, setActiveTab] = useState("home");
  const [isAiOpen, setIsAiOpen] = useState(false);

  const handleUiToggle = (type: "landing" | "modular") => {
    setUiType(type);
    localStorage.setItem("ui-type", type);
  };

  const renderModularUI = () => {
    switch (activeTab) {
      case "home": return <Hero uiType={uiType} onTabChange={setActiveTab} />;
      case "about": return <About />;
      case "skills": return <Skills />;
      case "projects": return <Projects />;
      case "contact": return <Contact />;
      default: return <Hero uiType={uiType} onTabChange={setActiveTab} />;
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#050505] text-white relative">
      <GlobalBackground />
      <Navbar
        terminalMode={terminalMode}
        setTerminalMode={handleTerminalToggle}
        theme={theme}
        setTheme={setTheme}
        isAiOpen={isAiOpen}
        setIsAiOpen={setIsAiOpen}
      />

      {!terminalMode ? (
        <main className="w-full">
          {uiType === "landing" ? (
            <Routes>
              <Route path="/" element={
                <>
                  <section id="home"><Hero uiType={uiType} onTabChange={setActiveTab} /></section>
                  <section id="about"><About /></section>
                  <section id="projects"><Projects limit={4} /></section>
                  <section id="skills"><Skills /></section>
                  <section id="contact"><Contact /></section>
                  <Footer uiType={uiType} onTabChange={setActiveTab} />
                  <BottomNavBar />
                </>
              } />
              <Route path="/projects" element={
                <div>
                  <Projects />
                  <div className="flex justify-center pb-24">
                    <a href="/" className="px-8 py-4 rounded-full border border-white/10 text-zinc-400 font-bold hover:bg-white/5 hover:text-white transition-all">
                      ← Back to Home
                    </a>
                  </div>
                </div>
              } />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          ) : (
            <div className="flex flex-col min-h-screen">
              <div className="flex-1 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -15, scale: 0.98 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="w-full h-full"
                  >
                    {renderModularUI()}
                  </motion.div>
                </AnimatePresence>
              </div>
              <Footer uiType={uiType} onTabChange={setActiveTab} />
              <BottomNavBar forcedTab={activeTab} setForcedTab={setActiveTab} />
            </div>
          )}
        </main>
      ) : (
        <TerminalMode
          setTerminalMode={handleTerminalToggle}
          setUiType={handleUiToggle}
        />
      )}
      {!terminalMode && (
        <AiAssistant
          activeTab={uiType === "landing" ? undefined : activeTab}
          isOpen={isAiOpen}
          setIsOpen={setIsAiOpen}
        />
      )}
    </div>
  );
};

export default App;
