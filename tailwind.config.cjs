/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'blue': '#382AE1',
        'light': '#E0E8FF',
        'light-500': '#E0E8FF55',
        'dark': '#202C54',
      },
      boxShadow: {
        'shadow-button': '0 2px 15px #382AE150',
      },
    },
  },
  plugins: [],
};
