module.exports = {
  content: [
    './pages/**/*.{res,tsx}',
    './components/**/*.res',
    './components/**/*.tsx',
  ],
  darkMode: 'class',
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
};
