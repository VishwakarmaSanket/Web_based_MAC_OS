import React from "react";
import MacWindow from "./MacWindow";
import Terminal from "react-console-emulator";
import "./cli.scss";

const Cli = ({ windowName, setWindowsState }) => {
  // Define the Welcome Message first so it can be referenced in commands
  const welcomeMessage = `
   ███████╗ █████╗ ███╗   ██╗██╗  ██╗███████╗████████╗
   ██╔════╝██╔══██╗████╗  ██║██║ ██╔╝██╔════╝╚══██╔══╝
   ███████╗███████║██╔██╗ ██║█████╔╝ █████╗     ██║   
   ╚════██║██╔══██║██║╚██╗██║██╔═██╗ ██╔══╝     ██║   
   ███████║██║  ██║██║ ╚████║██║  ██╗███████╗   ██║   
   ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝   ╚═╝   

sanket@web-mac-os
────────────────────────────────────────────────────────
OS: SanketOS v2.0.0 (Sequoia Edition)
Host: Portfolio-Web-Terminal
Kernel: React 18.2.0 / Vite
Uptime: ${new Date().toLocaleTimeString()}
Shell: zsh 5.9 (x86_64-apple-darwin23.0)
UI/UX: Glassmorphism / SCSS

Welcome, explorer 👋
UI/UX Designer & Full-Stack Developer

Available Commands:
  about      - Learn about my background
  skills     - Technical stack & tools
  projects   - View my recent work
  experience - Career & academic history
  contact    - Get in touch with me
  social     - Social media links
  github     - Open profile in new tab
  resume     - Download latest CV
  help       - List all commands
  clear      - Reset terminal view

Type a command to begin exploring.
`;

  const commands = {
    about: {
      description: "About me",
      usage: "about",
      fn: () =>
        "Hi, I’m Sanket Vishwakarma 👋 A Computer Engineering student with a strong interest in full-stack development, UI/UX design, and data-driven applications. I enjoy turning ideas into clean, usable interfaces and building scalable backend logic using Java and modern web technologies.",
    },

    skills: {
      description: "List technical skills",
      usage: "skills",
      fn: () => `
Programming:
  • Java, JavaScript, Python

Web Development:
  • HTML, CSS, React, Node.js, Express

UI/UX:
  • Figma, Wireframing, Design Systems, User-centered Design

Databases:
  • MySQL, MongoDB

Core Concepts:
  • OOP, JDBC, CRUD, API Authentication

Tools:
  • Git & GitHub, VS Code
`,
    },

    projects: {
      description: "View my projects",
      usage: "projects",
      fn: () => `
1. Book Bazaar - Buy, Sell & Rent Books
2. Little Lemon Restaurant App - Online food ordering
3. AYUSH Startup Portal - Professional web portal
4. Core Java CRUD Project - JDBC layered architecture
5. Personal Portfolio Website - This Web-based OS
`,
    },

    experience: {
      description: "Display experience",
      usage: "experience",
      fn: () => `
Academic & Project Experience

• UI/UX Designer & Developer
  - Designed application interfaces using Figma
  - Focused on accessibility and clean layouts

• Team Project Contributor
  - Collaborated using Git & GitHub
  - Worked on frontend structure and backend logic
`,
    },

    contact: {
      description: "Get contact information",
      usage: "contact",
      fn: () => `
Name: Sanket Vishwakarma
Location: India
GitHub: https://github.com/VishwakarmaSanket
Email: [Your Email Here]
`,
    },

    github: {
      description: "Open GitHub profile",
      usage: "github",
      fn: () => {
        window.open("https://github.com/VishwakarmaSanket", "_blank");
        return "Opening GitHub profile...";
      },
    },

    resume: {
      description: "Download resume",
      usage: "resume",
      fn: () => "Resume download started...",
    },

    social: {
      description: "View social media links",
      usage: "social",
      fn: () => `
GitHub: https://github.com/VishwakarmaSanket
LinkedIn: [Your LinkedIn URL]
`,
    },

    neofetch: {
      description: "Display system information",
      usage: "neofetch",
      fn: () => welcomeMessage,
    },

    matrix: {
      description: "Enter the Matrix",
      usage: "matrix",
      fn: () => "Searching for Neo... [Connection Terminated]",
    },

    echo: {
      description: "Echo a passed string",
      usage: "echo <string>",
      fn: (...args) => args.join(" "),
    },
  };

  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMessage}
          autoFocus={true}
          scrollBehavior="smooth"
          // Modern ZSH Prompt style
          promptLabel={"@sanketVishwakarma:~$"}
          promptLabelStyle={{
            color: "#61afef",
            fontWeight: "bold",
            marginRight: "8px",
          }}
          inputTextStyle={{
            color: "#ffffff",
            caretColor: "#00ff00",
            fontFamily: "'Fira Code', monospace",
          }}
          style={{
            backgroundColor: "transparent",
            minHeight: "100%",
          }}
          contentStyle={{
            padding: "20px",
          }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
