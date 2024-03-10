import type { Config } from "tailwindcss"
const defaultTheme = require("tailwindcss/defaultTheme")

const config: Config = {
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
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        calsans: ["var(--font-calsans)"],
      },
      animation: {
        "delayed-fade-in": "delayed-fade-in 3s ease-in-out forwards",
        title: "title 3s ease-out forwards",
        "delayed-fade-left": "delayed-fade-left 3s ease-in-out forwards",
        "delayed-fade-right": "delayed-fade-right 3s ease-in-out forwards",
      },
      keyframes: {
        "delayed-fade-in": {
          "0%": {
            opacity: "0%",
          },
          "75%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
          },
        },
        "delayed-fade-left": {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0%",
          },

          "30%": {
            transform: "translateX(0%)",
            opacity: "100%",
          },
          "100%": {
            opacity: "0%",
          },
        },
        "delayed-fade-right": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0%",
          },

          "30%": {
            transform: "translateX(0%)",
            opacity: "100%",
          },
          "100%": {
            opacity: "0%",
          },
        },
        title: {
          "0%": {
            "line-height": "0%",
            "letter-spacing": "0.25em",
            opacity: "0",
          },
          "25%": {
            "line-height": "0%",
            opacity: "0%",
          },
          "80%": {
            opacity: "100%",
          },

          "100%": {
            "line-height": "100%",
            opacity: "100%",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
}
export default config
