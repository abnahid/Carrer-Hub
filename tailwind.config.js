/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#7E90FE",
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
        "ping-slow": "ping 3s infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};
