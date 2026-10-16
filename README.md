# Web-based macOS Portfolio

An interactive portfolio website that recreates the look and feel of a macOS desktop in the browser. The interface is built with React and Vite, styled with SCSS, and organized around movable desktop windows that expose the portfolio content as familiar macOS applications.

Live site: [vishwakarmasanket.github.io/Web_based_MAC_OS](https://vishwakarmasanket.github.io/Web_based_MAC_OS/)

**Developer documentation:** [Read the detailed Technical Reference](docs/TECHNICAL_REFERENCE.md) for architecture, window lifecycle, component flows, static data contracts, build/deployment details, and known implementation limitations.

## Overview

The application opens as a desktop-style portfolio rather than a traditional webpage. Visitors can use the dock to launch portfolio tools, drag and resize each window, and close windows with the red traffic-light control.

The available applications are:

| Application | Purpose |
| --- | --- |
| GitHub | Displays project cards loaded from `src/assets/github.json`. |
| Notes | Loads and displays the portfolio note stored in `public/note.txt`. |
| Resume | Embeds the PDF resume from `public/MyResume.pdf`. |
| Spotify | Embeds a Spotify playlist in an application window. |
| Terminal | Provides an interactive portfolio shell with commands such as `about`, `skills`, `projects`, and `contact`. |
| Calendar | Opens Google Calendar in a new browser tab. |
| Mail | Opens a pre-addressed email in the visitor’s mail client. |
| LinkedIn | Opens the portfolio owner’s LinkedIn profile in a new browser tab. |

## Features

- macOS-inspired top navigation bar and dock
- Dock icons with application launch actions
- Draggable and resizable windows powered by `react-rnd`
- macOS-style close control for every internal window
- Glassmorphism, dark-mode styling, blur effects, and responsive sizing
- Project cards with images, descriptions, technology tags, repository links, and optional demo links
- Embedded PDF resume viewer
- Embedded Spotify playlist
- Interactive terminal with portfolio-specific commands
- GitHub Pages deployment workflow through the `gh-pages` package

## Technology stack

- React 19
- Vite 7
- SCSS/Sass
- `react-rnd` for window movement and resizing
- `react-console-emulator` for the terminal interface
- `react-syntax-highlighter` for formatted note content
- `react-markdown` for markdown-related rendering support
- `gh-pages` for deployment

## Project structure

```text
.
├── public/
│   ├── doc-icons/          # Dock application icons
│   ├── navbar-icons/       # Top navigation icons
│   ├── MyResume.pdf        # Embedded resume
│   ├── note.txt            # Notes window content
│   └── wallpaper*.jpg      # Desktop wallpapers
├── src/
│   ├── assets/
│   │   └── github.json     # Portfolio project data
│   ├── components/
│   │   ├── Dock.jsx        # Dock and external link actions
│   │   ├── Nav.jsx         # Top navigation bar
│   │   ├── DateTime.jsx    # Live date/time display
│   │   └── windows/
│   │       ├── MacWindow.jsx  # Shared draggable/resizable window shell
│   │       ├── Github.jsx     # Project browser
│   │       ├── Note.jsx       # Notes viewer
│   │       ├── Resume.jsx     # Resume viewer
│   │       ├── Spotify.jsx    # Spotify embed
│   │       └── Cli.jsx        # Interactive terminal
│   ├── App.jsx              # Application state and window composition
│   ├── app.scss             # Global desktop styling
│   └── main.jsx             # React entry point
├── index.html
├── package.json
└── vite.config.js
```

## How the application works

`App.jsx` owns a `windowsState` object with one Boolean value per internal application:

```js
{
  github: false,
  note: false,
  resume: false,
  spotify: false,
  cli: false
}
```

The dock receives this state and its setter. Clicking an internal application changes the relevant value to `true`, which mounts that window. Each window receives the same setter and uses its red close control to set its own value back to `false`.

All internal applications use `MacWindow`, which provides:

- a consistent macOS-style title bar
- draggable behavior through the `.nav` drag handle
- resize handles through `react-rnd`
- a shared close action
- a scrollable content area for each application

External actions such as Calendar, Mail, and LinkedIn do not create an internal window. They open a new browser tab or hand off to the visitor’s configured mail client.

## Requirements

- Node.js 20.19+ or 22.12+ (required by the Vite 7 version declared in this repository)
- npm 9 or newer
- A modern browser with support for CSS backdrop filters and embedded content

## Local development

1. Clone the repository:

   ```bash
   git clone https://github.com/VishwakarmaSanket/Web_based_MAC_OS.git
   cd Web_based_MAC_OS
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local URL printed by Vite, usually `http://localhost:5173`.

Vite provides hot module replacement, so changes to React and SCSS files appear without a full manual refresh.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server. |
| `npm run build` | Creates the production build in `dist/`. |
| `npm run preview` | Serves the production build locally for verification. |
| `npm run lint` | Runs ESLint across the project. |
| `npm run deploy` | Builds and publishes `dist/` using `gh-pages`. |

Before deploying, it is recommended to run:

```bash
npm run lint
npm run build
npm run preview
```

## Customization guide

### Update portfolio projects

Edit [`src/assets/github.json`](src/assets/github.json). Each project should provide the fields consumed by `Github.jsx`:

```json
{
  "id": 1,
  "image": "https://example.com/project-image.jpg",
  "title": "Project title",
  "description": "Short project description.",
  "tags": ["React", "SCSS"],
  "repolink": "https://github.com/owner/repository",
  "demolink": "https://example.com/demo"
}
```

`demolink` is optional. The repository link is always displayed. The current JSON file uses `repoLink`/`demoLink`, while `Github.jsx` reads `repolink`/`demolink`; these names are case-sensitive, so align them in source for the intended links to render.

### Update personal content

- Edit `public/note.txt` to change the Notes application content.
- Replace `public/MyResume.pdf` to update the embedded resume.
- Update the links and labels in `src/components/Dock.jsx` and `src/components/Nav.jsx`.
- Update the terminal responses and available commands in `src/components/windows/Cli.jsx`.

### Update the visual theme

Global styles are in `src/app.scss`. Component-specific styles are colocated with their components, for example:

- `src/components/dock.scss`
- `src/components/nav.scss`
- `src/components/windows/window.scss`
- `src/components/windows/github.scss`
- `src/components/windows/cli.scss`

The desktop background assets are stored in `public/`. When adding assets, use the same public-path conventions as the existing components so they work in both development and GitHub Pages builds.

### Add another internal application

1. Create a component in `src/components/windows/`.
2. Wrap its content with `MacWindow`.
3. Add a Boolean for the application in `App.jsx`.
4. Render the window conditionally in `App.jsx`.
5. Add a dock icon and launch handler in `Dock.jsx`.
6. Add a colocated SCSS file for the application-specific layout.

## Deployment to GitHub Pages

The project uses the `gh-pages` package and the `deploy` script:

```bash
npm run deploy
```

The command builds the site and publishes the generated `dist/` directory. The repository must have GitHub Pages configured to serve the published branch. If the repository name or deployment location changes, review the public asset paths and Vite base-path configuration before publishing.

## Troubleshooting

### The Spotify player appears in compact mode

The Spotify embed changes its layout based on the available height. The project reserves a minimum height for the Spotify window, but resizing the window to a very small height can still cause the compact layout. Enlarge the window to restore the playlist view.

### A window opens off-screen

Default window dimensions and coordinates are configured in `src/components/windows/MacWindow.jsx`. Adjust the `default` `x`, `y`, `width`, or `height` values if the target screen size requires a different starting position.

### The resume does not display

Confirm that `public/MyResume.pdf` exists and that the browser allows embedded PDF documents. The Resume application uses an HTML `<embed>` element, so browser PDF support is required.

### External links do not open

Check browser popup and mail-client permissions. Calendar, LinkedIn, GitHub, and email actions intentionally open outside the React application.

### Assets work locally but not after deployment

GitHub Pages serves the application from a repository subpath. Internal asset references should use `import.meta.env.BASE_URL` where appropriate. Also confirm that filenames and letter casing exactly match the files in `public/`.

## Known limitations

- The Calendar, Mail, LinkedIn, and some terminal commands depend on external services or the visitor’s local browser configuration.
- The Spotify player depends on Spotify’s iframe availability and embed behavior.
- Window positions are initialized from defaults and are not persisted between page loads.
- The current Notes viewer displays the fetched text with syntax highlighting rather than providing an editable note-taking experience.
- The project is primarily a visual portfolio experience; it is not intended to be a full operating-system simulation.

## Author

Developed by **Sanket Vishwakarma**, a UI/UX and product designer interested in front-end development and data-driven applications.

- GitHub: [VishwakarmaSanket](https://github.com/VishwakarmaSanket)
- LinkedIn: [Sanket Vishwakarma](https://www.linkedin.com/in/sanket-vishwakarma-361224338/)

## License

No license file is currently included in the repository. If this project is intended for reuse or redistribution, add a license that reflects the author’s preferred terms.
