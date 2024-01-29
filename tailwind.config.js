/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        sm : "600px",
        l: "960px",
        xl: "1200px",
      },
      colors :{
        "nav-gray":"#f5f5f5",
        "search-text": "#ccc9ca",
        "search-text-hover" : "#757575",
        "search-bar" : "#f5f5f5"
      },
      fontSize: {
        "custom-large": "1.2rem",
        "promo-size": "3rem"
      },
      fontFamily: {
        "fira-sans" : ['Fira Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

