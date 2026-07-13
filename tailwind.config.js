/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Exact palette from the original powersmithsolar.com site
        night: '#181C28', // slate-navy — main page background
        panel: '#02274A', // rich navy blue — feature sections / cards
        accent: '#EA622D', // brand orange
        'accent-dim': '#c4501f',
      },
      fontFamily: {
        // Match the fonts used on the original powersmithsolar.com site
        sans: ['"Nunito Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        wrap: '76rem',
      },
    },
  },
  plugins: [],
}
