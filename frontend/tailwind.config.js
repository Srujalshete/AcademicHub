/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
    },keyframes: {
      marquee: {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(calc(-100% - var(--gap)))" },
      },
      "marquee-vertical": {
        from: { transform: "translateY(0)" },
        to: { transform: "translateY(calc(-100% - var(--gap)))" },
      },
    },
  },
  },
  plugins: [
    require('daisyui'),
     
  ],
}
 