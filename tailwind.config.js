/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Add this line to ensure Tailwind scans your files
  ],
  theme: {
    extend: {
      minHeight: {
        '40': '10rem',
        '48': '12rem',
        '56': '14rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
};
