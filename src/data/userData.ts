import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/Icons";

export const personalInfo = {
  name: "Akhil Saklani",
  alias: "Akhil",
  shortAlias: "AS",
  location: "India",
  role: "Full Stack Developer",
  roles: [
    "Full Stack Developer",
    "Software Engineer",
    "AI Enthusiast",
    "Problem Solver",
  ],
  college: "Computer Science Undergraduate",
  collegeUrl: "https://github.com",
  avatarUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=akhil", // Dynamic clean avatar SVG
  status: "Available for Work",
  aboutText: "Building AI-powered applications, scalable web experiences, and practical solutions that solve real-world problems. Currently exploring Full-Stack Development, Machine Learning, and Generative AI.",
  aboutText1: "I'm Akhil Saklani, a Computer Science undergraduate and aspiring Software Engineer passionate about Full Stack Development and Artificial Intelligence. ",
  aboutText2: "I enjoy building scalable applications, solving complex problems clearly, and continuously learning modern technologies. When I'm away from my laptop, you'll find me playing sports, working on fitness, or sketching.",
  phone: "+91 7818876311",
  fullLocation: "Dehradun, Uttarakhand, India",
  socials: {
    github: "https://github.com/akhilsaklani7coder",
    linkedin: "https://www.linkedin.com/in/iamakhilsaklani/",
    instagram: "https://www.instagram.com/akhil.saklani.7/?hl=en",
    email: "akhilsaklani4@gmail.com",
    twitter: "https://x.com/XSaklani",
  }
};

export const fetchData = [
  { label: "User", value: "akhil@command-deck" },
  { label: "OS", value: "Windows 11 Home x86_64" },
  { label: "Host", value: "ASUS ROG Strix G15" },
  { label: "Kernel", value: "NT 10.0.22631" },
  { label: "Shell", value: "PowerShell 7.4" },
  { label: "CPU", value: "AMD Ryzen 7 5800H @ 3.20GHz" },
  { label: "GPU", value: "AMD Radeon + Nvidia RTX 3060" },
  { label: "Memory", value: "16384MiB" },
  { label: "System Status", value: "ACTIVE // CALIBRATED" },
];

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: "https://cdn.simpleicons.org/react" },
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs", invertDark: true },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
      { name: "Vite", icon: "https://cdn.simpleicons.org/vite" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
      { name: "HTML5", icon: "https://cdn.simpleicons.org/html5" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/css3.svg", invertDark: true },
    ],
  },
  {
    category: "Backend & Databases",
    items: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
      { name: "Express.js", icon: "https://cdn.simpleicons.org/express", invertDark: true },
      { name: "REST APIs", icon: "https://cdn.simpleicons.org/postman" },
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
      { name: "SQL", icon: "https://cdn.simpleicons.org/postgresql" },
      { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase" },
    ],
  },
  {
    category: "Programming Languages",
    items: [
      { name: "Python", icon: "https://cdn.simpleicons.org/python" },
      { name: "C/C++", icon: "https://cdn.simpleicons.org/cplusplus" },
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/java.svg", invertDark: true },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git", icon: "https://cdn.simpleicons.org/git" },
      { name: "GitHub", icon: "https://cdn.simpleicons.org/github", invertDark: true },
      { name: "Vercel", icon: "https://assets.vercel.com/image/upload/v1588805858/front/assets/design/vercel-triangle-white.svg" },
      { name: "Figma", icon: "https://cdn.simpleicons.org/figma" },
      { name: "Photoshop", icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/adobephotoshop.svg", invertDark: true },
    ],
  },
];

export const facts = [
  "Computer Science Student",
  "Full Stack Web Developer",
  "AI Enthusiast",
  "Sports & Fitness Devotee",
  "Problem Solver",
];

export const timeline = [
  {
    year: "2026",
    detail: "Growing as a Developer & Open for Opportunities.",
    more: "Actively building projects, sharpening problem-solving skills, exploring System Design and AI technologies, continuously learning, creating, and preparing for impactful opportunities in software engineering.",
  },
  {
    year: "2025",
    detail: "Diving Into Full Stack & AI.",
    more: "Building scalable web applications using Next.js, Node.js, MongoDB, and PostgreSQL. Exploring Artificial Intelligence, LLMs, and AI-Tools.",
  },
  {
    year: "2024",
    detail: "Started My Programming Journey & explored Web Development.",
    more: "Discovered a passion for software development, learned C, C++, Python, and fundamental programming concepts, built a strong foundation in problem-solving and software development. Then, learned HTML, CSS, JavaScript, React, and modern frontend development. Built my first Project.",
  },
];

export const contactItems = [
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "akhilsaklani7coder",
    href: "https://github.com/akhilsaklani7coder",
    color: "text-foreground",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "iamAkhilSaklani",
    href: "https://www.linkedin.com/in/iamakhilsaklani/",
    color: "text-blue-600",
  },
  {
    icon: Mail,
    label: "Email",
    value: "akhilsaklani4@gmail.com",
    href: "mailto:akhilsaklani4@gmail.com",
    color: "text-red-500",
  },
];

export const projectData = [
  {
    name: "Personalized Portfolio",
    description: "A personal portfolio website showcasing projects, skills, and developer identity. Features a fully functional custom terminal deck, real-time command suggestions, and a smooth fluid visual theme.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    live: "https://akhilsaklani.dev",
    github: "https://github.com/akhilsaklani7coder/Portfolio--akhilsaklani.dev",
    category: "Web",
  },
  {
    name: "BingeBuddy AI",
    description: "An AI-powered movie and series discovery platform that helps users find what to watch next through personalized recommendations, ratings, reviews, and community discussions. It combines content discovery, OTT availability tracking, and a social community with machine learning algorithms that learn user preferences.",
    tech: ["React", "Node.js", "Python", "Machine Learning", "TensorFlow", "Tailwind CSS"],
    category: "AI",
    status: "In Production",
  },
  {
    name: "LogicMint",
    description: "An AI-powered coding interview practice and automated evaluation system. Includes a built-in code editor, real-time compiler, test case-based validation, and rule-based AI performance insights.",
    tech: ["Java", "JavaScript", "HTML", "CSS", "ProcessBuilder"],
    github: "https://github.com/akhilsaklani7coder/LogicMint",
    category: "Web",
  },
  {
    name: "SplitSmart",
    description: "A high-performance expense-splitting app leveraging Graph Theory (DFS) for circular debt elimination and Greedy Algorithms for cash flow minimization. Features a Knapsack-based wishlist optimizer and a Gemini-powered AI financial advisor.",
    tech: ["Python", "Flask", "SQLite", "JavaScript", "Tailwind CSS", "Gemini API"],
    github: "https://github.com/akhilsaklani7coder/SplitSmart",
    category: "Web",
  },
];


export const resume = {
  "full-stack-developer": "https://rxresu.me/akhil/full-stack-developer",
};

export const education = [
  {
    degree: "B.Tech in Computer Science & Engineering (CSE)",
    institution: "Graphic Era Hill University, Dehradun",
    duration: "2024 – 2028",
    info: "Current CGPA: 7.76"
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "D.A.V. Public School, Dehradun",
    duration: "2022 – 2024",
    info: "80%"
  },
  {
    degree: "Secondary (10th)",
    institution: "D.A.V. Public School, Dehradun",
    duration: "2021 – 2022",
    info: "95%"
  }
];
