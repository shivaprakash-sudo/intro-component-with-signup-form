/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./*.{html, js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          red: "hsl(0, 100%, 74%)",
        },
        accent: {
          blue: "hsl(248, 32%, 49%)",
        },
        neutral: {
          100: "hsl(246, 25%, 77%)",
          200: "hsl(249, 10%, 26%)",
        },
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        mobile: "url('../images/bg-intro-mobile.png')",
        desktop: "url('../images/bg-intro-desktop.png')",
      },
      boxShadow: {
        theme: "0 0.5rem 0.1rem rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
