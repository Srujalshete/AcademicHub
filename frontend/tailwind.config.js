const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'reddit-sans': ['"Reddit Sans ExtraLight 200 Italic"', 'sans-serif'],
        'calsan': ['Calsan', 'sans-serif'],
      },
      boxShadow: {
        'top-heavy': '0 -5px 10px -5px rgba(0, 0, 0, 0.3)',
        'all-sides': '0 5px 10px rgba(0, 0, 0, 0.3), 0 -5px 10px rgba(0, 0, 0, 0.3), 5px 0 10px rgba(0, 0, 0, 0.3), -5px 0 10px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        animation: {
          'bounce-custom': 'bounce-custom 1s infinite',
        },
        keyframes: {
          'bounce-custom': {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
          },
        },
      },
      colors: {
        ...colors,
        // Add custom colors here if needed
      },
    },
  },
  plugins: [
    require('daisyui'),
    function ({ addBase, theme }) {
      let allColors = flattenColorPalette(theme("colors"));
      let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
      );

      addBase({
        ":root": newVars,
      });
    },
  ],
};
