/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#cf9c50",
        secondary: "#EAEAEA"
      },
    },
  },
  plugins: [require("daisyui")],
}
