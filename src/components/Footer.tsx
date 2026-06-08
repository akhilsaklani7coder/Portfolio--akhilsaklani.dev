import { contactItems } from "../data/userData";

type Props = {
  uiType?: "landing" | "modular";
  onTabChange?: (tab: string) => void;
};

const Footer = ({ uiType, onTabChange }: Props) => {
  const emailItem = contactItems.find((i) => i.label === "Email");
  const githubItem = contactItems.find((i) => i.label === "GitHub");
  const linkedinItem = contactItems.find((i) => i.label === "LinkedIn");

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (uiType === "modular" && onTabChange) {
      e.preventDefault();
      // Map navigation IDs to active modular tabs
      const tabMap: Record<string, string> = {
        home: "home",
        about: "about",
        work: "projects",
        projects: "projects",
        skills: "skills",
        contact: "contact",
      };
      onTabChange(tabMap[id] || id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // In landing mode, use standard anchor scroll
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="w-full bg-[#08080A] border-t border-white/10 mt-6 sm:mt-12 relative z-10 footer-container">
      <footer className="max-w-7xl mx-auto pt-6 pb-6 sm:pt-10 sm:pb-10 px-4 sm:px-6 lg:px-8 flex flex-row flex-wrap justify-between gap-x-4 gap-y-6 sm:gap-10 md:gap-12 text-left">
        {/* Column 1 - Bio & Availability */}
        <div className="w-full md:w-[45%] lg:w-auto flex flex-col items-start gap-4">
          <div>
            <div className="relative mb-2.5">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, "home")}
                className="font-sans text-3xl font-black tracking-tighter text-white flex items-baseline hover:opacity-80 transition-all duration-300"
              >
                &lt;Akhil<span className="text-zinc-500">.DEV</span>&gt;
              </a>
            </div>
            <p className="text-sm sm:text-base text-zinc-400 max-w-xs font-semibold leading-relaxed">
              Full Stack Development | AI
            </p>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-xs sm:text-sm tracking-widest uppercase font-mono select-none rounded-full shadow-[0_0_15px_rgba(59,130,246,0.08)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            ACTIVE & AVAILABLE
          </div>
        </div>

        {/* Column 2 - Navigation Links */}
        <div className="w-[45%] sm:w-auto md:w-[45%] lg:w-auto">
          <h4 className="text-zinc-500 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
            NAVIGATION
          </h4>
          <div className="space-y-2 font-bold">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
              className="block text-zinc-400 hover:text-white text-sm sm:text-base py-0.5 transition-all duration-300 hover:translate-x-1"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "about")}
              className="block text-zinc-400 hover:text-white text-sm sm:text-base py-0.5 transition-all duration-300 hover:translate-x-1"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, "projects")}
              className="block text-zinc-400 hover:text-white text-sm sm:text-base py-0.5 transition-all duration-300 hover:translate-x-1"
            >
              Work
            </a>
            <a
              href="#skills"
              onClick={(e) => handleNavClick(e, "skills")}
              className="block text-zinc-400 hover:text-white text-sm sm:text-base py-0.5 transition-all duration-300 hover:translate-x-1"
            >
              Skills
            </a>
            <a
              href="https://drive.google.com/file/d/17JCGXhkabSrHT3FGyEkwBVneEPjC-u6T/view"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-zinc-400 hover:text-white text-sm sm:text-base py-0.5 transition-all duration-300 hover:translate-x-1"
            >
              Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="block text-zinc-400 hover:text-white text-sm sm:text-base py-0.5 transition-all duration-300 hover:translate-x-1"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Column 3 - Social Connect */}
        <div className="w-[45%] sm:w-auto md:w-[45%] lg:w-auto">
          <h4 className="text-zinc-500 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
            CONNECT
          </h4>
          <div className="space-y-2 font-bold">
            {githubItem && (
              <a
                href={githubItem.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-zinc-400 hover:text-white text-sm sm:text-base py-0.5 transition-all duration-300 hover:translate-x-1"
              >
                GitHub
              </a>
            )}
            {linkedinItem && (
              <a
                href={linkedinItem.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-zinc-400 hover:text-white text-sm sm:text-base py-0.5 transition-all duration-300 hover:translate-x-1"
              >
                LinkedIn
              </a>
            )}
            {emailItem && (
              <a
                href={emailItem.href}
                className="block text-zinc-400 hover:text-white text-sm sm:text-base py-0.5 transition-all duration-300 hover:translate-x-1"
              >
                Email
              </a>
            )}
          </div>
        </div>

        {/* Column 4 - Code Snippet */}
        <div className="w-full md:w-[45%] lg:w-auto">
          <h4 className="text-zinc-500 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
            QUICK SNIPPET
          </h4>
          <pre className="bg-[#09090b] p-4 border border-white/10 font-mono text-xs sm:text-sm text-left text-zinc-400 rounded-2xl leading-relaxed overflow-x-auto select-all shadow-inner relative before:absolute before:top-2 before:right-2.5 before:text-[9px] before:text-zinc-600 before:font-sans before:content-['JSON']">
            <span className="text-blue-400">const</span> developer = &#123;{"\n"}
            &nbsp;&nbsp;name: <span className="text-emerald-400">"Akhil Saklani"</span>,{"\n"}
            &nbsp;&nbsp;role: <span className="text-emerald-400">"Full Stack Dev | AI"</span>,{"\n"}
            &nbsp;&nbsp;stack: [<span className="text-emerald-400">"React"</span>, <span className="text-emerald-400">"Javascript"</span>, <span className="text-emerald-400">"Python"</span>, <span className="text-emerald-400">"AI"</span>],{"\n"}
            &nbsp;&nbsp;status: <span className="text-emerald-400">"Available ✓"</span>{"\n"}
            &nbsp;&nbsp;caffeine: <span className="text-emerald-400">"Infinity"</span>{"\n"}
            &#125;;
          </pre>
        </div>
      </footer>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto border-t border-white/5 py-4 sm:py-6 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-xs sm:text-sm text-zinc-500 font-medium pb-4 sm:pb-6">
        <div>
          © 2026 · Made with intent.
        </div>
        <div>
          Designed & Developed 💛 by Akhil Saklani.
        </div>
      </div>
    </div>
  );
};

export default Footer;
