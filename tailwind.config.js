/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neutrals (cool slate — reads as "engineered")
        ink: "#0F172A",      // headings / primary text
        body: "#475569",     // paragraph text (not pure black — easier on the eyes)
        muted: "#94A3B8",    // captions / metadata
        line: "#E2E8F0",     // hairline borders
        surface: "#F8FAFC",  // alternate section background
        // Brand accent — aligned with the existing site primary (#155bd5)
        brand: {
          DEFAULT: "#155BD5",
          dark: "#1C3AB6",
          light: "#E2F1FF",
        },
        accent: {
          DEFAULT: "#00D4D7",
          dark: "#00BAC1",
        },
      },
      fontFamily: {
        // Falls back to the site's existing font stack
        sans: ["Inter", "Montserrat", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "IBM Plex Mono", "ui-monospace", "monospace"],
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
      },
      boxShadow: {
        card: "0 16px 40px rgba(21, 91, 213, 0.12)",
      },
    },
  },
  plugins: [],
}
