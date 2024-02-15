/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // screens: {
      //   sm: "640px",
      //   md: "768px",
      //   lg: "1024px",
      //   xl: "1280px",
      //   "2xl": "1536px",
      //   "3xl": "1900px",
      // },
      screens: {
        sm: "640px",
        md: "1024px",
        lg: "1280px",
        xl: "1536px",
        "2xl": "1900px",
      },
    },
  },
  plugins: [],
};
