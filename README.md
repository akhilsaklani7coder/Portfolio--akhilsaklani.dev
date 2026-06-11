# Akhil Saklani — Interactive Developer Portfolio 🚀

A highly interactive, modern, and AI-powered developer portfolio website showcasing projects, skills, education, and professional experience. Built with **React 19**, **TypeScript**, **Vite 8**, **Tailwind CSS v4**, and **Framer Motion 12**.

---

## 🌟 Key Features

*   **🤖 Grounded AI Assistant Drawer**: A custom-built AI chatbot powered by Gemini (using the `gemini-2.5-flash` model). It is grounded on Akhil's actual portfolio data (skills, projects, timeline, and education) to answer recruiter questions accurately and professionally as his personal agent.
*   **💻 Interactive Terminal Mode**: A developer-centric command-line simulation. Recruiters and visitors can run commands like `help`, `about`, `skills`, `projects`, `contact`, `themes`, `clear`, and `neofetch`/`fetch` to explore the portfolio programmatically.
*   **🎭 Dual UI Modes**:
    *   **Landing Page Mode**: A modern, smooth-scrolling single-page showcase.
    *   **Modular Mode**: A clean, focused, tabbed dashboard UI.
*   **🎨 Premium Design System**: Curated dark & light modes, HSL color palettes, glassmorphism, responsive mobile layouts, and responsive micro-animations for an engaging user experience.
*   **⚡ Modern Performance Stack**: Migrated to Vite 8 with `@tailwindcss/vite` (Tailwind v4) for instantaneous HMR, optimized builds, and clean code separation.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Core** | React 19, TypeScript, HTML5, CSS3 |
| **Build Tool** | Vite 8 |
| **Styling** | Tailwind CSS v4 |
| **Animations** | Framer Motion 12 |
| **Icons** | Lucide React |
| **Routing** | React Router DOM 7 |
| **Interactivity** | React Type Animation |

---

## 📂 Project Structure

```text
src/
├── components/         # Shared visual components (Navbar, Footers, AI Assistant, etc.)
│   ├── AiAssistant.tsx # Gemini-powered grounded AI assistant
│   ├── Background.tsx  # Interactive particle background
│   ├── BottomNavBar.tsx# Responsive bottom navigation controller
│   └── ...
├── data/               # Centralized data model
│   └── userData.ts     # Skills, projects, timeline, and education ground truth
├── pages/              # Modular sub-pages (About, Contact, Projects, Skills)
├── sections/           # Landing page primary sections (Hero, etc.)
├── terminal/           # Terminal simulation engine
│   ├── data/           # Terminal-specific themes and custom configurations
│   ├── TerminalMode.tsx# Interactive terminal shell logic
│   └── CommandData.tsx # Command parser and help documentation
├── App.tsx             # Main application layout, routing, and UI mode toggling
└── main.tsx            # Application entrypoint
```

---

## 🚀 Getting Started

### 📋 Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended) along with `npm` or `yarn`.

### 1. Clone the Repository
```bash
git clone https://github.com/Akhildev7/Portfolio--akhilsaklani.dev.git
cd Portfolio--akhilsaklani.dev
```

### 2. Configure Environment Variables
Create a `.env` file in the root directory and add your Gemini API Key:
```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```
> [!NOTE]
> The `.env` file is excluded from Git tracking via `.gitignore` to protect API credentials.

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Locally
Start the development server:
```bash
npm run dev
```

### 5. Build for Production
Generate optimized static assets:
```bash
npm run build
```
Verify files locally using `npm run preview`.

---

## 🤝 Contact & Socials

*   **Email**: [akhilsaklani4@gmail.com](mailto:akhilsaklani4@gmail.com)
*   **LinkedIn**: [iamakhilsaklani](https://www.linkedin.com/in/iamakhilsaklani/)
*   **GitHub**: [Akhildev7](https://github.com/Akhildev7)
*   **Twitter**: [@XSaklani](https://x.com/XSaklani)
