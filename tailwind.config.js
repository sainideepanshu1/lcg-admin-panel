/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
            "2xl": { max: "1535px" },
      
            xl: { max: "1279px" },
      
            md: { max: "1035px" },
      
            sm: { max: "767px" },
          },
    extend: {
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
    },
  },
  plugins: [],
}



// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/*/.{js,ts,jsx,tsx}"],
//   theme: {
//     screens: {
//       "2xl": { max: "1535px" },

//       xl: { max: "1279px" },

//       md: { max: "1035px" },

//       sm: { max: "767px" },
//     },
//     extend: {
//       fontFamily: {
//         sans: [
//           "Inter",
//           "-apple-system",
//           "BlinkMacSystemFont",
//           "San Francisco",
//           "Segoe UI",
//           "Roboto",
//           "Helvetica Neue",
//           "sans-serif",
//         ],
//       },
//       textColor: {
//         "heading-color": "#303030",
//       },
//       fontSize: {
//         heading: "0.8125rem",
//       },
//     },
//   },
//   plugins: [],
// };