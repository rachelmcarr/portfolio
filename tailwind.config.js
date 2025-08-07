/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000", // replace with Framer's background
        secondary: "#ffffff", // replace with Framer's secondary
        accent: "#ff3366" // replace with your accent color
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        interTight: ['var(--font-inter-tight)', 'sans-serif'],
      },
      animation: {
        scroll: "scroll 25s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
    },
  },
  plugins: [],
},
  }
}
