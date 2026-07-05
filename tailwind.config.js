/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1C1F2A",
        paper: "#EEF0F3",
        panel: "#FFFFFF",
        indigo: {
          DEFAULT: "#2A3363",
          deep: "#1B2148",
        },
        celadon: {
          DEFAULT: "#4F9E93",
          light: "#DCEEEA",
        },
        amber: {
          DEFAULT: "#E0A23C",
          light: "#FBEBCF",
        },
        line: "#D8DCE2",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Source Serif 4'", "serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
