# 💼 Daniel Giovanni Sinaga — Developer Portfolio

<div align="center">
  <img src="src/assets/logo_dgs.png" alt="DGS Logo" width="160"/>

  [![React](https://img.shields.io/badge/React-19.x-blue.svg)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue.svg)](https://www.typescriptlang.org/)
  [![Bootstrap](https://img.shields.io/badge/Bootstrap-5.x-purple.svg)](https://getbootstrap.com/)
  [![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
</div>

## 📋 Table of Contents
- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Available Scripts](#-available-scripts)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [Contact](#-contact)
- [License](#-license)

## 🎯 About

A modern, responsive personal portfolio for **Daniel Giovanni Sinaga**, a Senior Software Developer and Full-Stack Engineer specializing in Java Spring Boot and React. The site presents his experience, featured projects, skills, and credentials, with a downloadable CV and an integrated contact form — built as a single-page application with React and TypeScript.

## ✨ Features

- 🎨 **Modern Design** — Clean, professional UI with a polished hero section
- 📱 **Fully Responsive** — Works seamlessly across desktop, tablet, and mobile
- 🧭 **Smooth Navigation** — Animated smooth-scroll between sections
- 🗂️ **Featured Projects** — Project cards with a detail modal
- 🏅 **Credentials & Stats** — Highlights of experience and achievements
- 📄 **CV Download** — One-click resume download from the hero
- 📧 **Contact Form** — Integrated EmailJS for direct messages
- 🎭 **Animations** — AOS (Animate On Scroll) effects
- 🔒 **Type Safe** — Built with TypeScript

## 🛠️ Tech Stack

**Frontend:**
- [React 19](https://reactjs.org/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — Type-safe JavaScript
- [React Router](https://reactrouter.com/) — Client-side routing
- [Bootstrap 5](https://getbootstrap.com/) & [Bootstrap Icons](https://icons.getbootstrap.com/) — Styling and icons
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first styling

**Services & Libraries:**
- [EmailJS](https://www.emailjs.com/) — Contact form email delivery
- [AOS](https://michalsnik.github.io/aos/) — Animate on scroll
- [Swiper](https://swiperjs.com/) / [GSAP](https://gsap.com/) — Carousels & animation

**Tooling:**
- [Create React App](https://create-react-app.dev/) — App setup
- [Yarn](https://yarnpkg.com/) — Package manager

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/danielsinaga1/portofolio-dgs.git
   cd portofolio-dgs
   ```

2. **Install dependencies**
   ```bash
   yarn install
   # or
   npm install
   ```

3. **Start the development server**
   ```bash
   yarn dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:5173](http://localhost:5173)

> The contact form uses EmailJS. The service, template, and public key are configured in [`src/ui/Home.tsx`](src/ui/Home.tsx).

## 📁 Project Structure

```
portofolio-dgs/
├── public/
│   ├── index.html
│   ├── cv-daniel.pdf          # Downloadable CV
│   └── favicon.ico
├── src/
│   ├── Components/
│   │   ├── Carousel.tsx        # Hero section
│   │   ├── ClientList.tsx      # Skills
│   │   ├── Facts.tsx           # Experience
│   │   ├── Credentials.tsx     # Credentials
│   │   ├── Revenue.tsx         # Featured projects
│   │   ├── ProjectModal.tsx    # Project detail modal
│   │   ├── InnerHeader.tsx     # Navigation
│   │   ├── Footer.tsx
│   │   └── Details.ts          # Single source of truth for all content
│   ├── ui/
│   │   ├── Home.tsx            # Page composition + contact form
│   │   └── ...                 # UI primitives (Button, Card, Badge)
│   ├── assets/                 # Images, logos, project & tech-stack art
│   ├── layout/
│   ├── App.tsx
│   ├── index.tsx
│   └── index.css               # Global styles
├── package.json
└── README.md
```

## 📜 Available Scripts

### `yarn dev`
Runs the app in development mode at [http://localhost:5173](http://localhost:5173). The page reloads on edits.

### `yarn build`
Builds the app for production into the `build` folder, minified and optimized.

### `yarn start`
Serves the production `build` folder locally on port 8080 (via `serve`).

### `yarn test`
Launches the test runner.

## 🎨 Customization

All personal content — name, tagline, bio, stats, social links, work experience, projects, skills, and contact details — lives in a single file: [`src/Components/Details.ts`](src/Components/Details.ts). Edit it to update the site without touching components.

To replace the CV, swap [`public/cv-daniel.pdf`](public/cv-daniel.pdf) with your own file of the same name.

## 🚀 Deployment

### Build for Production
```bash
yarn build
```

### Deploy to Netlify / Vercel
Drag and drop the `build` folder to [Netlify](https://netlify.com), or run `vercel --prod` with the [Vercel CLI](https://vercel.com/). A `_redirects` file is included for SPA routing on Netlify.

## 📧 Contact

**Daniel Giovanni Sinaga** — Senior Software Developer

- 📍 **Location:** Bontang, East Kalimantan, Indonesia
- 📞 **Phone:** +62 821-5235-0376
- 📧 **Email:** sinagadaniel012@gmail.com
- 💼 **LinkedIn:** [danielgiovannisinaga](https://www.linkedin.com/in/danielgiovannisinaga/)
- 🐙 **GitHub:** [danielsinaga1](https://github.com/danielsinaga1)

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>Made with ❤️ by Daniel Giovanni Sinaga</p>
</div>
