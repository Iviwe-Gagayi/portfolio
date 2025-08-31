/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark1: "#0d0d0d", 
        dark2: "#121212", 
        dark3: "#181818", 
      },
    },
  },
  plugins: [],
}
