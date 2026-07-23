/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // --- Fixed brand colors (identical in light + dark) ----------------
        navy: '#02274A', // PowerSmith Navy — anchor bands, brand surfaces
        'navy-700': '#0A3A63', // lighter navy for gradients
        panel: '#02274A', // alias kept for navy feature sections
        sky: '#56C9F5', // Energy Blue — secondary accent
        accent: '#EA622D', // Solar Orange — primary CTA
        'accent-dim': '#c4501f',
        'accent-glow': '#F5842A', // brighter orange for the gradient CTA
        carbon: '#0B0D12', // Brand Black — high-impact fills
        night: '#181C28', // legacy dark (retained for the hero video scrim)

        // --- Themed tokens (flip between light/dark via CSS vars) ----------
        // Defined in index.css on :root and :root.dark. Using the
        // rgb(var(--x) / <alpha-value>) form keeps opacity modifiers working
        // (e.g. text-ink/70, border-line/10).
        paper: 'rgb(var(--c-paper) / <alpha-value>)', // page background
        card: 'rgb(var(--c-card) / <alpha-value>)', // card / panel surface
        ink: 'rgb(var(--c-ink) / <alpha-value>)', // body copy
        heading: 'rgb(var(--c-heading) / <alpha-value>)', // headings
        line: 'rgb(var(--c-line) / <alpha-value>)', // borders / hairlines
        mist: 'rgb(var(--c-mist) / <alpha-value>)', // Panel Grey accent surface
        'mist-50': 'rgb(var(--c-mist-50) / <alpha-value>)', // softest surface
        'sky-soft': 'rgb(var(--c-sky-soft) / <alpha-value>)', // blue-tint panel
      },
      fontFamily: {
        // Avenir-first per client. Avenir Next / Avenir render on devices that
        // have them (e.g. Apple); everything else falls back to the loaded web
        // fonts (Nunito Sans / Montserrat) so the design stays intact.
        sans: ['"Avenir Next"', 'Avenir', '"Nunito Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['"Avenir Next"', 'Avenir', 'Montserrat', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        // Shared column width for the navbar pill AND every section below it,
        // so their left/right edges line up down the page (Anthony, Jul 23:
        // "the margins should line up... these margins are going to be the
        // margins you're going to use for everything else"). Widened from
        // 76rem so the navbar (which needed the room for bigger portal
        // buttons) doesn't have to be narrower than the content it sits above.
        wrap: '92rem',
      },
    },
  },
  plugins: [],
}
