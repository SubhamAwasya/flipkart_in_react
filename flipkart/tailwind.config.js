/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      "light",
      "dark",
      "cyberpunk",
      "halloween",
      "forest",
      "fantasy",
      "luxury",
      "dracula",
      "business",
      "lemonade",
      "night",
      "coffee",
      "nord",
      "sunset",
    ],
  },
  plugins: [require("daisyui")],
};
