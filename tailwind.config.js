/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        noise: "url('./assets/noise.webp')",
        coding: "url('./assets/coding.webp')"
      },
      fontFamily:{
        montserrat:['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}

