/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: "#f7efe9",
          100: "#eedfd3",
          200: "#ddbfaa",
          300: "#cc9f80",
          400: "#b27a54", // text-coffee-400
          500: "#8b5e3c",
          600: "#6f4b2e",
          700: "#8B5E3C",
          800: "#392615",
          900: "#21170a",
          950: "#C8A97E",
        },
        but: {
          50: "#6F4321",
        },
        cream: {
          light: "#FFF7E6",
          DEFAULT: "#F5EBDC",
        },
        accent: {
          gold: "#D4A373",
          beige: "#E6CCB2",
        },
      },
      fontFamily: {
        IRANSans: ["IRANSans", "sans-serif"],
        iransans: ["IRANSans", "sans-serif"],
      },
      boxShadow: {
        coffee: "0 4px 20px rgba(75, 42, 27, 0.15)",
      },
    },
  },
  plugins: [],
};
