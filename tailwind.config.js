/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        movie: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
        footer: "0 0 8px 0 rgba(43, 45, 103, 0.08)"
      },
      colors: {
        gold: "#ffc319",
        indigo: {
          dark: "#110E47",
          light: "#D6D6FD",
        },
        sea: {
          dark: "#88A4E8",
          light: "#DBE3FF",
        },
        sand: {
          dark: "#D8D8D8",
          mid: "#E5E4EA",
          light: "#F0EFFA",
        },
        grey: {
          dark: "#9C9C9C",
          mid: "#AAA9B1",
          light: "#BCBCCD",
        },
      }
    },
    fontFamily: {
      'sans': ['var(--font-mulish)' , ...defaultTheme.fontFamily.sans],
      'serif': ['var(--font-merriweather)', ...defaultTheme.fontFamily.serif],
    }
  },
  plugins: [],
};
