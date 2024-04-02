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
      colors: {
        buttonBg:
          "linear-gradient(180deg, rgba(48, 48, 48, 0) 63.53%, rgba(255, 255, 255, .15) 100%) , rgba(48, 48, 48, 1)",
      },
      boxShadow: {
        common:
          "0rem -.0625rem 0rem 0rem #b5b5b5 inset, 0rem 0rem 0rem .0625rem rgba(0, 0, 0, .1) inset, 0rem .03125rem 0rem .09375rem #FFF inset",
        active:
          "-.0625rem 0rem .0625rem 0rem rgba(26, 26, 26, .122) inset, .0625rem 0rem .0625rem 0rem rgba(26, 26, 26, .122) inset, 0rem .125rem .0625rem 0rem rgba(26, 26, 26, .2) inset",
        blackCommon:
          "0rem -.0625rem 0rem .0625rem rgba(0, 0, 0, .8) inset, 0rem 0rem 0rem .0625rem rgba(48, 48, 48, 1) inset, 0rem .03125rem 0rem .09375rem rgba(255, 255, 255, .25) inset",
        blackActive: "0rem .1875rem 0rem 0rem rgb(0, 0, 0) inset",
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
