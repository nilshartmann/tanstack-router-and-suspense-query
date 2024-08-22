import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        karla: ["Karla", ...defaultTheme.fontFamily.sans],
        karma: ["Karma", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
