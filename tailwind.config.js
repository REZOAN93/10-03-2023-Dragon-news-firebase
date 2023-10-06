/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        basicColor: "#D72050",
        bgAll: "var(--Dark-07, #F3F3F3)",
        bgBtn: "#58A7DE",
        bgCard: "#F3F3F3",
        readMore: "#FF8C47",
        backBtn: "#D72050",
      },
      fontFamily: {
        basicFont: "'Poppins', sans-serif",
      },
    },
  },
  plugins: [require("daisyui")],
};
