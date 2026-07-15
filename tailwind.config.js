/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // --- Client light palette (2025 refresh) -------------------------
        // Client feedback: "too much dark." Light surfaces now dominate;
        // navy + orange stay as brand anchors, energy blue is the new accent.
        navy: '#02274A', // PowerSmith Navy — headings, anchor bands, text
        'navy-700': '#0A3A63', // lighter navy for gradients
        panel: '#02274A', // alias kept for navy feature sections / footer
        ink: '#132A44', // deep navy-slate for body copy on light backgrounds
        mist: '#E8EAEA', // Panel Grey — alternating light section background
        'mist-50': '#F4F6F7', // barely-there grey for the softest sections
        sky: '#56C9F5', // Energy Blue — secondary accent, links, highlights
        'sky-soft': '#E8F6FE', // pale blue tint for light feature panels
        accent: '#EA622D', // Solar Orange — primary CTA
        'accent-dim': '#c4501f',
        'accent-glow': '#F5842A', // brighter orange for the gradient CTA
        carbon: '#0B0D12', // Brand Black — deep near-black for high-impact fills
        night: '#181C28', // legacy dark (retained for the hero video scrim)
      },
      fontFamily: {
        // Avenir-first per client. Avenir Next / Avenir render on devices that
        // have them (e.g. Apple); everything else falls back to the loaded web
        // fonts (Nunito Sans / Montserrat) so the design stays intact.
        sans: ['"Avenir Next"', 'Avenir', '"Nunito Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['"Avenir Next"', 'Avenir', 'Montserrat', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        wrap: '76rem',
      },
    },
  },
  plugins: [],
}
