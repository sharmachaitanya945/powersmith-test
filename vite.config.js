import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // Bind to all interfaces (IPv4 + IPv6) so Chrome's `localhost` (which may
    // resolve to 127.0.0.1) connects — the default localhost-only bind was
    // IPv6-only (::1) and refused IPv4 connections.
    host: true,
    port: 5173,
  },
})
