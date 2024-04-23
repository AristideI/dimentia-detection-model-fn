/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#F9F5FF",
          200: "#EEEDFD",
          300: "#E2B0FE",
          400: "#4E0FAB",
        },
        dark: "1d1d1d",
        secondary: {
          orange: "#fd9e28",
          red: "#f38484",
          green: "1dc359",
        },
      },
    },
  },
  plugins: [],
};
