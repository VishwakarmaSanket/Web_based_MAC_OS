# 🍎 Web-based MAC OS 

A pixel-perfect, interactive macOS desktop environment built with **React**, **SCSS**, and **Vite**. This project focuses on high-fidelity UI/UX replication, featuring functional windows, a dynamic dock, and integrated third-party widgets like Spotify.



## 🚀 Live Demo
**Check it out here:** [vishwakarmasanket.github.io/Web_based_MAC_OS/](https://vishwakarmasanket.github.io/Web_based_MAC_OS/)

---

## ✨ Features
* **Dynamic Dock**: Interactive app launcher with magnification effects and smart tooltips.
* **Window Management**: Multiple functional windows (GitHub, Spotify, Notes) with Mac-style "traffic light" controls.
* **Responsive Layout**: Designed to scale across different screen sizes using `rem` and flexible CSS units.
* **Third-Party Integration**: Live Spotify player integration using the Spotify Embed API.
* **Theming**: Sleek dark mode aesthetics with backdrop-filter blurs and glassmorphism.

---

## 🛠️ Tech Stack
* **Frontend**: React.js 18
* **Styling**: SCSS (Sass) utilizing BEM methodology
* **Icons**: Custom SVG icons and FontAwesome
* **Build Tool**: Vite for fast HMR (Hot Module Replacement)
* **Deployment**: GitHub Pages

---

## 🔧 Technical Bug Fixes & Lessons Learned

During development, I encountered and resolved several UI/UX challenges through deep debugging and AI collaboration:

### 1. Dock Icon Geometry (Box Model)
* **Problem**: Icons lost their perfect 1:1 square shape when the root font size changed, appearing rectangular on some screens.
* **Solution**: Switched from `content-box` to `box-sizing: border-box` to ensure padding exists *inside* the defined dimensions. This eliminated sub-pixel rounding errors that were breaking the aspect ratio.

### 2. Spotify Player Layout (Iframe Breakpoints)
* **Problem**: The Spotify window displayed the full playlist locally but collapsed into a "Compact" bar when hosted on GitHub Pages.
* **Solution**: Identified that the Spotify Embed API uses a **400px height threshold** to switch layouts. I implemented a `min-height: 450px` constraint on the container to force the "List" view in production.



---

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/VishwakarmaSanket/Web_based_MAC_OS.git](https://github.com/VishwakarmaSanket/Web_based_MAC_OS.git)

```

```
2.**Install dependencies:**
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

Developed by **Sanket Vishwakarma**, a UI/UX and Product Designer passionate about bridging the gap between design and front-end development.

* **Portfolio**: [Your Portfolio Link Here]
* **LinkedIn**: [Sanket Vishwakarma](https://www.linkedin.com/in/sanket-vishwakarma-361224338/)

```
