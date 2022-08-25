/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roka: ["ROKAFSansBold", "sans-serif"],
        naba: ["NanumBarunGothic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
