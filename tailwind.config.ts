/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media', // ✅ Enable dark mode using a class
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
