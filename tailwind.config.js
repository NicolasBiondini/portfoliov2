const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Assistant", ...defaultTheme.fontFamily.sans],
        mono: ["Roboto Mono"],
      },
    },
    colors: {
      black: "#212529",
      lessBlack: "#343a40",
      mainWithe: "#f8f9fa",
      lessWithe: "#dee2e6",
      orange: colors.orange,
      white: colors.white,
      transparent: colors.transparent,
    },
    screens: {
      small: { max: "379px" },
      smaller: { min: "380px", max: "639px" },
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
