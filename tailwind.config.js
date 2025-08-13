/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Geist Variable"', 'sans-serif'],
        mono: ['"Geist Mono Variable"', 'monospace'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        primary: '#FFA500',
      },
      animation: {
        flicker: "flicker 5s infinite ease-in-out",
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '0.1', filter: 'brightness(1)' },
          '50%': { opacity: '0.25', filter: 'brightness(1.2)' },
        },
      },
    },
  },
  plugins: [],
};
