module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      colors: {
        'border': '#7E5D89',
        'background': '#3A1B45',
        'white': '#ffffff',
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
