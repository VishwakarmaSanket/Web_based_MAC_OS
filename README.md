# 🍎 Web-based MAC OS 

A pixel-perfect, interactive macOS desktop environment built with **React**, **SCSS**, and **Vite**. This project focuses on high-fidelity UI/UX replication, featuring functional windows, a dynamic dock, and integrated third-party widgets like Spotify.

---

## 🚀 Live Demo
**Check it out here:** [vishwakarmasanket.github.io/Web_based_MAC_OS/](https://vishwakarmasanket.github.io/Web_based_MAC_OS/)

## ✨ Features
* **Dynamic Dock**: Interactive app launcher with magnification effects and smart tooltips.
* **Window Management**: Functional windows (GitHub, Spotify, Notes) with Mac-style "traffic light" controls.
* **Responsive Layout**: Designed to scale across different screen sizes using `rem` and flexible CSS units.
* **Third-Party Integration**: Live Spotify player integration using the Spotify Embed API.
* **Theming**: Sleek aesthetics with backdrop-filter blurs and glassmorphism.

---

## 📦 Dependencies & Packages

This project leverages a modern JavaScript ecosystem to ensure high performance and maintainability.

| Package | Purpose |
| :--- | :--- |
| **react** | The core library for building the component-based UI and managing state. |
| **react-dom** | Handles the rendering of React components into the browser's DOM. |
| **sass** | SCSS extension used for advanced styling, nesting, and design variables. |
| **vite** | Build tool providing instant HMR and optimized production bundles. |
| **gh-pages** | Automates the deployment process to host the project on GitHub Pages. |

---

## 🛠️ Technical Bug Fixes & Lessons Learned

During development, I encountered and resolved several UI/UX challenges through deep debugging and AI collaboration:

### 1. Dock Icon Geometry (Box Model)
* **Problem**: Icons lost their perfect 1:1 square shape when the root font size changed, appearing rectangular on some screens.
* **The "Why"**: The icons defaulted to `content-box`, causing padding to be added *outside* the width. This created rounding errors in the aspect ratio.
* **Solution**: Implemented `box-sizing: border-box` to force padding *inside* the width and defined explicit `rem` dimensions to lock the geometry.



### 2. Spotify Player Layout (Iframe Breakpoints)
* **Problem**: The Spotify window displayed a full playlist locally but collapsed into a "Compact" bar in production.
* **The "Why"**: The Spotify Embed API uses a **400px height threshold** to switch layouts. Production environments often introduce subtle layout shifts that pushed the height below this limit.
* **Solution**: Applied a `min-height: 450px` constraint on the container and ensured the parent `Window` component utilized `flex: 1` to prevent collapsing.



---

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/VishwakarmaSanket/Web_based_MAC_OS.git](https://github.com/VishwakarmaSanket/Web_based_MAC_OS.git)

```

```
2. **Install dependencies:**
```bash
npm install

```


3. **Run the development server:**
```bash
npm run dev

```


4. **Build for production:**
```bash
npm run build

```



---

## 🎨 About the Designer

Developed by **Sanket Vishwakarma**, a UI/UX and Product Designer bridging the gap between design and front-end development.

* **LinkedIn**: [Sanket Vishwakarma](https://www.linkedin.com/in/sanket-vishwakarma-361224338/)

```
