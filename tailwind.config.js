/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("app/daisyui")],
};
