/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { min: "300px", max: "428px" },
      md: { min: "429px", max: "799px" },
      lg: { min: "800px", max: "1279px" },
      xl: { min: "1280px", max: "1919px" },
    },
    extend: {
      backgroundImage: {
        mechanic: "url('/images/HeadBg.svg')",
        garage: "url('/images/garage.png')",
      },
    },
    colors: {
      black: "#1e1e1e",
      darkGrey: "#9C9C9C",
      transGrey: "rgba(72, 72, 72, 0.50)",
      transLightGrey: "rgba(186, 186, 186, 0.20)",
      transLightGreyActive: "rgba(186, 186, 186, 0.50)",
      lightGrey: "#D9D9D9",
      white: "#FFFFFF",
      green: "#40BF2B",
      red: "#ff0000",
    },
  },
  plugins: [],
};
