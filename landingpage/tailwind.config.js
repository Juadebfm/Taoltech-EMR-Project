/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        heading: "40px",
        subheading: "32px",
        cardheading: "20px",
      },
      colors: {
        primaryColor: "#175CD3",
      },
    },
  },
  plugins: [],
};
