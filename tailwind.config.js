/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#feaf00",
        navbarColor: "#f2eae1",
        labelColor: "#6c6c6c",
        white: "#fff",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans - serif"],
      },
      fontSize: {
        label: [
          "14px",
          {
            lineHeight: "normal",
            fontWeight: "500",
          },
        ],
      },
      boxShadow: {
        login: "2px 5px 10px 0px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
