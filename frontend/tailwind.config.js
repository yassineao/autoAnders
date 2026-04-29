/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#D90429",
          secondary: "#FFFFFF",
          accent: "#9D0208",
          text: "#111111",
          muted: "#6B7280",
          background: "#F5F5F5",
          border: "#E5E7EB",
        },
      },
    },
  },
  plugins: [],
};
