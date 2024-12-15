/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        greenHue: {
          light: '#a7f3d0', // light green
          DEFAULT: '#34d399', // base green
          dark: '#065f46', // dark green
        },
      },
      transitionDuration: { 
        400: '400ms' 
      },
    },
  },
  plugins: [],
};
