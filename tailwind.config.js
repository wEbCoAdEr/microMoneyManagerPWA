/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "brand-primary": "#6200ee",
        "brand-primary-deep": "#3700b3",
        "brand-secondary": "#252525",
        "brand-action": "#bb86fc",
        "brand-action-deep": "#7f39fb",
        "brand-btn": "#7c3aed",
        "brand-btn-hover": "#5b21b6",
        "brand-error": "#b00020",
      },
    },
    fontFamily: {
      Rubik: ["Rubik, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwindcss-dark-mode")(),
  ],
};
