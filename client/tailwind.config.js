module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './modules/auth/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F2C641',
        secondary: '#48045C',
        red: '#FF0000',
        border: '#7E5D89',
        background: '#3A1B45',
        dark: '#230D29',
        white: '#ffffff',
      },
    },
    fontFamily: {
      'Baloo 2': ['Baloo 2', 'cursive'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
