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
      },
      backgroundColor:{
        primario: "#7109b7f2",
        secundario:"#F72585f2",
        terciario:"#7209B7f2",
        cuarto:"#560BADf2",
        quinto:"#480CA8f2",
        sexto:"#3A0CA3f2",
        septimo:"#3F37C9f2",
        octavo:"#4361EEf2",
        noveno:"#4895EFf2",
        decimo:"#4CC9F0f2"

      }
    },
  },
  plugins: [],
}

