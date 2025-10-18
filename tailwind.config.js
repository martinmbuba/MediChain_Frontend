/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // 👈 Added custom font
      },
      colors: {
        primary: '#2563eb', // e.g. blue-600
        secondary: '#64748b', // grayish tone
        accent: '#16a34a', // green
        background: '#f9fafb',
      },
    },
  },
  plugins: [],
}
