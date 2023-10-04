/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      basicColor: "#D72050",
      bgAll: "var(--Dark-07, #F3F3F3)",
      bgBtn: "58A7DE",
    },
    fontFamily: {
      basicFont: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
