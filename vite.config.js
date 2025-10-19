import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// MindCleft Haven 2.0 – Fremtidsrettet oppsett for 3D/Physics med Cannon-ES
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,        // Beholdt fra ditt oppsett
    port: 5173,        // Lokal dev-port
  },
  optimizeDeps: {
    include: ["three", "cannon-es"],   // Sørg for at Vite pakker disse inn
  },
  build: {
    target: "esnext",                  // Moderne build for rask wasm/js
    sourcemap: true,                   // Valgfritt, men nyttig for feilsøking
    rollupOptions: {
      external: [],                    // Ingen moduler holdes utenfor build
    },
  },
  ssr: {
    noExternal: ["three", "cannon-es"], // Sikrer at alt fungerer i dev/SSR
  },
});
