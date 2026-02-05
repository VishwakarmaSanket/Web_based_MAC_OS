import React from "react";
import MacWindow from "./MacWindow";
import Terminal from "react-console-emulator";
import "./cli.scss";

const Cli = ({ windowName, setWindowsState }) => {
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
  • Java
  • JavaScript
  • Python

Web Development:
  • HTML, CSS
  • React
  • Node.js, Express

UI/UX:
  • Figma
  • Wireframing & Prototyping
  • Design Systems
  • User-centered Design

Databases:
  • MySQL
  • MongoDB

Core Concepts:
  • OOP
  • JDBC
  • Exception Handling
  • CRUD Operations
  • Basic API Authentication

Tools:
  • Git & GitHub
  • VS Code
`,
    },

    projects: {
      description: "View my projects",
      usage: "projects",
      fn: () => `
1. Book Bazaar
   - Platform to Buy, Sell & Rent Books
   - UI/UX focused project for readers and offline vendors

2. Little Lemon Restaurant App
   - Online food ordering & table booking system
   - Clean, modern UI with user-friendly flow

3. AYUSH Startup Portal
   - Professional web portal design
   - Focus on usability, structure, and visual clarity

4. Core Java CRUD Project
   - JDBC integration
   - Layered architecture
   - Exception handling & database connectivity

5. Personal Portfolio Website
   - Hosted using GitHub
   - Showcases projects, skills, and design work
`,
    },

    experience: {
      description: "Display experience",
      usage: "experience",
      fn: () => `
Academic & Project Experience

• UI/UX Designer & Developer
  - Designed multiple application interfaces using Figma
  - Focused on accessibility, consistency, and clean layouts

• Team Project Contributor
  - Collaborated using Git & GitHub
  - Worked on frontend structure and backend logic

• Research Work
  - Research paper on the role of body language in non-verbal communication
  - Project documentation & analysis for Book Bazaar
`,
    },

    contact: {
      description: "Get contact information",
      usage: "contact",
      fn: () => `
Name: Sanket Vishwakarma
Location: India
GitHub: https://github.com/VishwakarmaSanket
Email: (add your email here)
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
LinkedIn: (add your LinkedIn URL)
Portfolio: (add your hosted portfolio link)
`,
    },

    echo: {
      description: "Echo a passed string",
      usage: "echo <string>",
      fn: (...args) => args.join(" "),
    },
  };

  const welcomeMessage = `
╔════════════════════════════════════════╗
║     Welcome to My Portfolio CLI!       ║
╚════════════════════════════════════════╝

Hello! 👋 Welcome to my interactive portfolio. You can navigate through my work experience, skills, and projects using terminal commands.

Type 'help' to see all available commands, or try:
  • about     - Learn about me
  • skills    - View my technical skills
  • projects  - Check out my work
  • experience - See my career history
  • contact   - Get in touch

Happy exploring! 🚀
`;

  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel={"sanketvishwakarma:~$"}
          promptLabelStyle={{ color: "#00ff00" }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
