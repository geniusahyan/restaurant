/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "green": "#39d84a",
        "red": "#ff6868",
        "secondary": "#555",
        "primary": "#fcfcfc"
      },
    },
  },
  plugins: [require("daisyui")],
}

