# 🏢 PT Teknik Nusantara Kaltim - Portfolio Website

<div align="center">
  <img src="src/img/logo-tera.png" alt="TNK Logo" width="200"/>
  
  [![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue.svg)](https://www.typescriptlang.org/)
  [![Bootstrap](https://img.shields.io/badge/Bootstrap-5.x-purple.svg)](https://getbootstrap.com/)
  [![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
</div>

## 📋 Table of Contents
- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Contact](#contact)
- [License](#license)

## 🎯 About

PT Teknik Nusantara Kaltim Portfolio Website is a modern, responsive corporate website built with React and TypeScript. This project showcases the company's services, expertise, and provides a platform for client engagement through a comprehensive contact system.

## ✨ Features

- 🎨 **Modern Design** - Clean, professional UI/UX design
- 📱 **Fully Responsive** - Works seamlessly on all devices
- ⚡ **Fast Performance** - Optimized for speed and performance
- 🔍 **SEO Friendly** - Structured for search engine optimization
- 📧 **Contact System** - Integrated EmailJS for contact form submissions
- 🧭 **Easy Navigation** - Smooth scrolling and intuitive navigation
- 🎭 **Animations** - AOS (Animate On Scroll) library integration
- 🔒 **Type Safe** - Built with TypeScript for better code quality

## 🛠️ Tech Stack

**Frontend:**
- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [React Router](https://reactrouter.com/) - Client-side routing
- [Bootstrap](https://getbootstrap.com/) - CSS framework
- [Bootstrap Icons](https://icons.getbootstrap.com/) - Icon library

**Services:**
- [EmailJS](https://www.emailjs.com/) - Email service integration
- [AOS Library](https://michalsnik.github.io/aos/) - Animate on scroll

**Tools:**
- [Create React App](https://create-react-app.dev/) - React application setup
- [Yarn](https://yarnpkg.com/) - Package manager

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portofolio-tnk.git
   cd portofolio-tnk
   ```

2. **Install dependencies**
   ```bash
   yarn install
   # or
   npm install
   ```

3. **Environment Setup**
   ```bash
   # Create .env file in root directory
   cp .env.example .env
   
   # Add your EmailJS credentials
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_USER_ID=your_user_id
   ```

4. **Start the development server**
   ```bash
   yarn start
   # or
   npm start
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portofolio-tnk/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── Components/
│   │   ├── InnerHeader.tsx
│   │   ├── Footer.tsx
│   │   └── InnerHeaderBanner.tsx
│   ├── ui/
│   │   ├── Contact.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   └── Careers.tsx
│   ├── img/
│   │   └── [image assets]
│   ├── styles/
│   │   └── [CSS files]
│   ├── App.tsx
│   └── index.tsx
├── package.json
└── README.md
```

## 📜 Available Scripts

In the project directory, you can run:

### `yarn start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits and you'll see lint errors in the console.

### `yarn test`
Launches the test runner in interactive watch mode.
See [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`
Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for best performance.
The build is minified and filenames include hashes.

### `yarn eject`
⚠️ **Note: This is a one-way operation. Once you `eject`, you can't go back!**

## 🚀 Deployment

### Build for Production
```bash
yarn build
```

### Deploy to Netlify
1. Build the project: `yarn build`
2. Drag and drop the `build` folder to [Netlify](https://netlify.com)

### Deploy to Vercel
```bash
npm i -g vercel
vercel --prod
```

### Deploy to GitHub Pages
```bash
yarn add --dev gh-pages
yarn build
yarn deploy
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

**PT Teknik Nusantara Kaltim**

- 📍 **Address:** Jl. Example Street, Kalimantan Timur, Indonesia
- 📞 **Phone:** +62-xxx-xxxx-xxxx
- 📧 **Email:** info@tekniknusantarakaltim.com
- 🌐 **Website:** [www.tekniknusantarakaltim.com](https://www.tekniknusantarakaltim.com)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>Made with ❤️ by PT Teknik Nusantara Kaltim Development Team</p>
  <p>© 2024 PT Teknik Nusantara Kaltim. All rights reserved.</p>
</div>
