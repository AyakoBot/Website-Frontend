/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: true, // 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        main: "0 0.1em 0.3em 0.1em rgba(23,23,23,0.75)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
