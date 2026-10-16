# Web-based macOS

An interactive, macOS-inspired portfolio built with **React, Vite, and SCSS**. Explore projects, read profile notes, view a résumé, open a Spotify playlist, and try a simulated terminal—all inside a desktop-style web interface.

**Live demo:** https://vishwakarmasanket.github.io/Web_based_MAC_OS/

---

## Overview

This project presents a personal portfolio as a browser-based desktop environment. A top menu bar, wallpaper, dock, and movable windows bring familiar desktop interactions to a web UI. Each window hosts a different portfolio feature.

> This is a frontend simulation, not an operating system or a real command-line shell. It does not use a backend or database; portfolio content is supplied by local project files and static assets.

## Features

- **Desktop-style interface** — wallpaper, menu bar, dock, and macOS-inspired window styling.
- **Movable and resizable windows** — windows can be dragged by their title bar and resized.
- **Project browser** — project cards and technology tags are populated from a JSON file.
- **Notes viewer** — loads profile and skills text from a public asset and displays it with syntax highlighting.
- **Résumé viewer** — embeds the résumé PDF inside a window.
- **Spotify embed** — displays a playlist from Spotify in an embedded player.
- **Terminal simulator** — interactive commands for browsing profile information and opening the GitHub profile.
- **Live date and time** — the menu bar displays the browser's local date and time, refreshed every second.
- **External shortcuts** — dock icons open Calendar, email, LinkedIn, and GitHub destinations.

## Built with

| Technology | Role |
|---|---|
| React | Component-based interface and UI state |
| Vite | Development server and production build |
| SCSS / Sass | Layout, styling, and desktop visual effects |
| react-rnd | Dragging and resizing desktop windows |
| react-console-emulator | Terminal-style command interface |
| react-syntax-highlighter | Syntax-highlighted Notes content |
| react-markdown | Installed dependency; imported but not currently used for rendering |
| GitHub Pages / gh-pages | Static hosting and deployment workflow |

## Getting started

### Prerequisites

- Node.js and npm installed. Use a Node.js version supported by the Vite version in this project.
- Git, to clone the repository.

### Install and run locally

1. Clone the repository:

       git clone https://github.com/VishwakarmaSanket/Web_based_MAC_OS.git
       cd Web_based_MAC_OS

2. Install dependencies:

       npm install

3. Start the development server:

       npm run dev

4. Open the local URL printed by Vite in your terminal.

### Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Builds the production site into `dist/` |
| `npm run preview` | Serves the production build locally for preview |
| `npm run lint` | Runs ESLint |
| `npm run predeploy` | Runs the production build before deployment |
| `npm run deploy` | Publishes the contents of `dist/` using `gh-pages` |

## Exploring the desktop

Use the dock along the bottom of the desktop to open a feature:

| Dock item | What it opens |
|---|---|
| GitHub | Project cards from the repository's local JSON data |
| Note | Profile, skills, project, and learning notes from `public/note.txt` |
| PDF | The PDF in `public/MyResume.pdf` |
| Calendar | Google Calendar in a new browser tab |
| Spotify | A fixed Spotify playlist embed |
| Mail | A `mailto:` link |
| Link | The configured LinkedIn profile |
| CLI | A local terminal-style command simulator |

The red window control closes its window. The yellow and green controls are visual elements and do not currently implement minimize or maximize behavior.

### Terminal commands

The terminal is powered by a browser component and executes local JavaScript handlers; it does not invoke a real operating-system shell.

| Command | Behavior |
|---|---|
| `about` | Displays a short profile |
| `skills` | Lists skills and tools |
| `projects` | Displays a text list of projects |
| `experience` | Displays the sample experience text |
| `contact` | Displays contact information |
| `social` | Displays social-profile text |
| `github` | Opens the GitHub profile in a new tab |
| `resume` | Prints a message; it does not start a download |
| `neofetch` | Prints the simulated system banner |
| `matrix` | Prints a static response |
| `echo <text>` | Prints the supplied text |

The welcome banner also mentions `help` and `clear`, but those commands are not defined in the project's custom command map.

## Project structure

The following is the structure of the active application and its main assets:

    Web_based_MAC_OS/
    ├── public/
    │   ├── doc-icons/          # Dock icons
    │   ├── navbar-icons/       # Menu-bar icons
    │   ├── MyResume.pdf        # Embedded résumé
    │   ├── note.txt            # Notes/profile content
    │   ├── wallpaper.jpg
    │   └── wallpaper2.jpg
    ├── src/
    │   ├── assets/
    │   │   └── github.json     # Project-card data
    │   ├── components/
    │   │   ├── windows/
    │   │   │   ├── Cli.jsx
    │   │   │   ├── Github.jsx
    │   │   │   ├── MacWindow.jsx
    │   │   │   ├── Note.jsx
    │   │   │   ├── Resume.jsx
    │   │   │   └── Spotify.jsx
    │   │   ├── DateTime.jsx
    │   │   ├── Dock.jsx
    │   │   └── Nav.jsx
    │   ├── App.jsx
    │   ├── app.scss
    │   └── main.jsx
    ├── index.html
    ├── package.json
    ├── vite.config.js
    └── eslint.config.js

### How the app is organized

- **`src/main.jsx`** mounts the React application.
- **`src/App.jsx`** owns the `windowsState` object and conditionally renders open windows.
- **`src/components/Dock.jsx`** opens windows or launches external destinations.
- **`src/components/windows/MacWindow.jsx`** provides the shared draggable/resizable window shell.
- **`src/components/windows/`** contains the feature windows and their content.
- **`src/assets/github.json`** supplies project-card metadata.
- **`public/`** contains content and images served as static assets.
- **SCSS files** control the desktop, dock, navigation, windows, and individual window layouts.

## Customize the portfolio

### Update project cards

Edit `src/assets/github.json`. Each record contains:

| Field | Purpose |
|---|---|
| `id` | Project identifier and React list key |
| `image` | Image URL for the project card |
| `title` | Project name |
| `description` | Short summary |
| `tags` | Array of technology or topic labels |
| `repoLink` | Repository URL in the source data |
| `demoLink` | Demo URL in the source data |

**Current caveat:** the JSON defines `repoLink` and `demoLink`, while `src/components/windows/Github.jsx` currently reads `repolink` and `demolink`. Property names are case-sensitive, so project links will not receive the intended URLs until those names are aligned in the application code.

### Update the Notes window

Edit `public/note.txt`. The Notes component fetches the file as text when the window mounts. Despite the `.txt` extension, it is currently displayed using a TypeScript syntax-highlighting theme rather than rendered as rich Markdown.

### Replace the résumé

Replace `public/MyResume.pdf` with the desired PDF, retaining the same filename, or update the source path in `src/components/windows/Resume.jsx`.

### Change the Spotify playlist

Update the iframe URL in `src/components/windows/Spotify.jsx`. The current implementation uses a fixed Spotify playlist embed; it does not use Spotify OAuth or the Spotify Web API.

### Change styling and wallpaper

- Desktop background: `src/app.scss`
- Dock layout and hover effects: `src/components/dock.scss`
- Menu bar: `src/components/nav.scss`
- Shared window shell: `src/components/windows/window.scss`
- Feature-window styles: the corresponding SCSS files in `src/components/windows/`

## Build and deployment

The Vite base path is configured in `vite.config.js` as `/Web_based_MAC_OS/` for this repository's GitHub Pages deployment.

To create and preview a production build:

    npm run build
    npm run preview

To deploy with the configured `gh-pages` script:

    npm run deploy

The deploy script publishes the generated `dist/` directory. It may require appropriate repository permissions and a correctly configured GitHub Pages setup.

**Deployment note:** static asset references should respect Vite's configured base path when the site is hosted below a domain root. When changing the repository name or hosting path, review the base value in `vite.config.js` and the asset paths used by the components and styles.

## Implementation notes

- The application is a static frontend. There is no application API, server-side database, user account system, or backend persistence in this repository.
- Window-open state exists in React state and resets when the page is reloaded.
- Notes content is fetched from a static file; the fetch currently has no explicit error UI or retry behavior.
- Spotify and remote project images depend on third-party services and an internet connection.
- The date/time display uses the visitor's local browser clock.
- The terminal's profile output is hard-coded in `src/components/windows/Cli.jsx`.

## License

No license file was found in the repository at the time this README was written. Add a `LICENSE` file if you intend to grant others explicit permission to reuse, modify, or distribute the project.
