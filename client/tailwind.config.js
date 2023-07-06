/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
      logo: 'Pacifico'
    },
    extend: {
      colors: {
        primary: '#ffcc00',
      },
    },
  },
  plugins: [],
}

