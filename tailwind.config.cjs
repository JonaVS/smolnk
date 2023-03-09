/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { height: {
      shortenerSectionH: 'calc(100vh - 120px)',
    },},
  },
  plugins: [],
}
