import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// MindCleft Haven 2.0 – Fremtidsrettet oppsett for 3D/WASM
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,       // beholdt fra ditt oppsett
    port: 5173,       // beholdt fra ditt oppsett
  },
  optimizeDeps: {
    include: ["three"],                // pakkes riktig
    exclude: ["@dimforge/rapier3d-compat"], // Rapier lastes dynamisk i browser
  },
  build: {
    target: "esnext",                  // nødvendig for moderne WASM
    sourcemap: true,                   // valgfritt, men nyttig for debugging
    rollupOptions: {
      external: ["@dimforge/rapier3d-compat"], // hindrer bundling under build
    },
  },
  ssr: {
    noExternal: ["three"],             // behold three ved SSR/dev
    external: ["@dimforge/rapier3d-compat"], // Rapier skal kun lastes i browser
  },
});
