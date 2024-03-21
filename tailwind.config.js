/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "3xl": { max: "1918px" },
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      md: { max: "1035px" },
      sm: { max: "767px" },
      xm: { max: "431px" },
    },
    extend: {
      boxShadow: {
        common:
          "0rem -.0625rem 0rem 0rem #b5b5b5 inset, 0rem 0rem 0rem .0625rem rgba(0, 0, 0, .1) inset, 0rem .03125rem 0rem .09375rem #FFF inset",
        active:
          "-.0625rem 0rem .0625rem 0rem rgba(26, 26, 26, .122) inset, .0625rem 0rem .0625rem 0rem rgba(26, 26, 26, .122) inset, 0rem .125rem .0625rem 0rem rgba(26, 26, 26, .2) inset",
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "San Francisco",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      textColor: {
        "heading-color": "#303030",
      },
      fontSize: {
        heading: "0.8125rem",
      },
    },
  },
  plugins: [],
};
