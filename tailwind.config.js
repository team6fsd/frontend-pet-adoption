/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
          mytheme: {

              "primary": "#facc15",

              "secondary": "#9ee283",

              "accent": "#f3f4f6",

              "neutral": "#131320",

              "base-100": "#f3f4f6",

              "info": "#7197d6",

              "success": "#46ddbf",

              "warning": "#e08906",

              "error": "#ec4b73",
          },
      },
    ],
  },
  
  plugins: [require("daisyui")],
};
