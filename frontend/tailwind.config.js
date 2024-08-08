/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        brownColor:"#5B1600",
        textColor:"#212925",

      },
      
    },
  },
  plugins: [],
}

