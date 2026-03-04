/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Isso garante que seus componentes em /src sejam lidos
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2E608C",
        secondary: "#F27127",
        accent: "#F28D35",
        navy: "#020873",
        "wm-primary": "#2E608C",
        "wm-secondary": "#F27127",
        "wm-accent": "#F28D35",
        "wm-navy": "#020873",
      },
    },
  },
  plugins: [],
};
