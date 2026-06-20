"use client";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/userData";
import TextSwitcher from "../components/TextSwitcher";
import DeveloperCard from "../components/DeveloperCard";
import { GithubIcon, LinkedinIcon, InstagramIcon, MailFilledIcon, XIcon } from "../components/Icons";

type HeroProps = {
  onTabChange?: (tab: string) => void;
  uiType?: "landing" | "modular";
};

const roles = ["Full Stack Developer", "Software Developer", "AI Enthusiast"];

const Hero = ({ onTabChange, uiType }: HeroProps) => {
  const connections = [
    {
      icon: LinkedinIcon,
      href: "https://www.linkedin.com/in/iamakhilsaklani/",
      label: "LinkedIn",
    },
    {
      icon: GithubIcon,
      href: "https://github.com/akhilsaklani7coder",
      label: "GitHub",
    },
    {
      icon: MailFilledIcon,
      href: "mailto:akhilsaklani4@gmail.com",
      label: "Email",
    },
    {
      icon: InstagramIcon,
      href: "https://www.instagram.com/akhil.saklani.7/?hl=en",
      label: "Instagram",
    },
    {
      icon: XIcon,
      href: personalInfo.socials.twitter,
      label: "X",
    },
  ];

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-[90vh] w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-8 gap-12 lg:gap-16 relative z-10 pt-24 pb-20 scroll-mt-20"
    >
      {/* Background Branding */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 opacity-70">
        <span className="text-[18rem] md:text-[28rem] font-black text-white/[0.09] select-none tracking-[-0.07em]">
          {personalInfo.shortAlias}
        </span>
      </div>

      {/* Left Content */}
      <div className="flex-1 text-left max-w-2xl lg:max-w-xl xl:max-w-2xl space-y-4 relative z-10">
        <div className="space-y-5">
          {/* Status */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold uppercase tracking-widest"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            {personalInfo.status}
          </motion.div>

          {/* Name & Role */}
          <div className="space-y-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "circOut" }}
              className="text-4xl min-[375px]:text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-8xl font-black leading-[0.85] tracking-tighter text-white"
            >
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{personalInfo.name}</span>
            </motion.h1>

            {/* Premium Animated Role Switcher */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="flex items-center pt-0 -mt-1 sm:-mt-2"
            >
              <TextSwitcher
                texts={roles}
                className="text-2xl min-[375px]:text-3xl sm:text-4xl md:text-[40px] lg:text-[46px] xl:text-[52px] font-black tracking-tighter whitespace-nowrap"
              />
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-lg"
          >
            {personalInfo.aboutText}
          </motion.p>
        </div>

        {/* Actions & Connections */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col items-center lg:items-start gap-5 pt-4 w-full"
        >
          {/* Buttons Row */}
          <div className="grid grid-cols-2 sm:flex sm:flex-row items-center justify-center lg:justify-start gap-3 w-full max-w-[380px] sm:max-w-none mx-auto lg:mx-0 lg:w-auto">
            <a
              href="#projects"
              onClick={(e) => {
                if (uiType === "modular" && onTabChange) {
                  e.preventDefault();
                  onTabChange("projects");
                } else {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-4 py-3 sm:px-6 sm:py-3.5 rounded-3xl sm:rounded-full bg-white text-black font-black text-sm sm:text-base hover:bg-zinc-100 active:scale-95 transition-all duration-300 flex flex-col sm:flex-row items-center justify-center text-center leading-tight gap-0.5 sm:gap-2 shadow-xl shadow-white/10"
            >
              <span className="block sm:inline">Selected</span>
              <span className="block sm:inline">Works</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                if (uiType === "modular" && onTabChange) {
                  e.preventDefault();
                  onTabChange("contact");
                } else {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-4 py-3 sm:px-6 sm:py-3.5 rounded-3xl sm:rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-sm sm:text-base transition-all duration-300 flex flex-col sm:flex-row items-center justify-center text-center leading-tight gap-1 sm:gap-2 shadow-xl shadow-blue-500/20 active:scale-95 border border-blue-400/20 group"
            >
              <span className="flex items-center justify-center gap-1 sm:gap-2">
                <span className="flex flex-col sm:flex-row sm:gap-1">
                  <span>Get in</span>
                  <span>Touch</span>
                </span>
                <Send className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform w-4 h-4 sm:w-[18px] sm:h-[18px] flex-shrink-0" />
              </span>
            </a>
          </div>

          {/* Social Connections Row */}
          <div className="flex items-center justify-center lg:justify-start gap-6 pt-1.5 w-full lg:w-auto pl-0 lg:pl-1.5">
            {connections.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-white transition-all duration-300 hover:scale-110 active:scale-95"
                title={item.label}
              >
                <item.icon className="w-[26px] h-[26px]" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right: Developer Identity Card */}
      <div className="flex-shrink-0 relative z-10 flex items-center justify-center w-full lg:w-auto mt-2 sm:mt-4 lg:mt-0 -translate-y-[20px] lg:-translate-y-[5px]">
        <DeveloperCard />
      </div>
    </motion.section>
  );
};

export default Hero;