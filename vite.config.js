import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ MindCleft Haven – konsept 3:
// Bruker lokal, pre-bygd Cannon-ES fysikkmotor og Three.js direkte i bundle.
// Alt lastes fra prosjektet, ingenting hentes eksternt.
export default defineConfig({
  plugins: [react()],

  server: {
    host: true,   // tilgjengelig i nettverk, som tidligere
    port: 5173,   // standardport for dev
  },

  // 🔧 Forteller Vite hvilke moduler som skal pre-bundles
  optimizeDeps: {
    include: ["three", "cannon-es"],  // pakkes inn i dev og prod build
  },

  build: {
    target: "esnext",   // moderne nettlesere + støtte for ESM
    sourcemap: true,    // valgfritt – gjør feilsøking enklere
  },

  // 🔁 For SSR og bygging i Vercel
  ssr: {
    noExternal: ["three", "cannon-es"],  // beholdes i bundle, ikke hoppes over
  },
});
