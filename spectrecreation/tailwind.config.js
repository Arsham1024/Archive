/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.{mjs,js}", // do not change this!
  ],
  plugins: [require("flowbite/plugin"), require("daisyui")],
  theme: {
    extend: {
      colors: {
        "iphone-blue": "#2F4452",
        "iphone-natural": "#A3A29C",
        black: "#000000",
        white: "#FFFFFF",
      },
    },
  },
};
