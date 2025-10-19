🧠 MindCleft Haven – Utviklingshåndbok (Dev Guide)

Denne guiden oppsummerer hvordan prosjektet bygges, oppdateres og vedlikeholdes — både teknisk og praktisk.
Den kombinerer tidligere erfaringer, feilløsninger og nye beslutninger for å sikre stabilitet, hastighet og forutsigbarhet i videre utvikling.

🧩 1. Prosjektstruktur (React + Vite + Three + Cannon-ES)
src/
 ├─ main.jsx           → Inngangspunkt (renderer App)
 ├─ App.jsx            → Hovedkomponent
 ├─ styles.css         → Globale stiler
 ├─ components/
 │   ├─ Game.jsx       → 3D-verden (Three.js + Cannon-ES)
 │   ├─ HUD.jsx        → Overlay og UI
 │   └─ Loading.jsx    → Visning under init
 ├─ systems/
 │   ├─ physics.js     → Cannon-ES-init og fysikkstyring
 │   ├─ scene.js       → Three.js-scene
 │   └─ controls.js    → Bevegelse (WASD + mus)
 ├─ assets/
 │   ├─ models/
 │   └─ textures/
 ├─ utils/             → Små hjelpefunksjoner
 └─ state/             → Fremtidig global state (Zustand / Supabase)
vite.config.js         → Vite-oppsett
package.json           → Avhengigheter og scripts

⚙️ 2. Vite-konfigurasjon

vite.config.js skal bruke Cannon-ES (ikke Rapier):

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: { host: true, port: 5173 },
  optimizeDeps: {
    include: ["three", "cannon-es"],
  },
  build: {
    target: "esnext",
    sourcemap: true,
  },
});


Dette sikrer at Cannon-ES pakkes inn riktig både lokalt og i Vercel-builds.

🌐 3. Daglig arbeidsflyt (GitHub ↔ Codespaces)

Før du starter hver økt:

git pull --rebase origin main


✅ Henter siste versjoner fra GitHub og oppdaterer Codespace.

Underveis:

git add .
git commit -m "kort beskrivelse av endringen"


Etter økten:

git push origin main


🚀 Pusher endringene slik at GitHub og Vercel automatisk bygger på nytt.

💡 Bruk git status og git log --oneline ofte.

🔄 4. Feilhåndtering og synkronisering
Situasjon	Kommando	Forklaring
Lokalt og GitHub er ute av sync	git pull --rebase origin main	Oppdaterer lokalt uten å miste endringer
Du vet at GitHub har riktig versjon	git fetch origin && git reset --hard origin/main	Nullstiller lokalt og henter eksakt fra GitHub
Avhengigheter mangler	npm install	Leser package.json og gjenoppretter alt
Vil låse fungerende versjon	git add package*.json && git commit -m "Lock deps"	Sikrer identiske miljøer for alle
🧱 5. Bygg og kjøring

Start utvikling:

npm run dev


➡️ Starter lokal server på http://localhost:5173

Test produksjonsbygg lokalt:

npm run build
npm run preview


Full refresh (rydder cache):

npm run dev -- --force

🔧 6. Node- og NPM-vedlikehold

Bruk alltid Node 22.x:

nvm install 22
nvm use 22
nvm alias default 22


Sjekk:

node -v
npm -v


Oppdater pakker:

npm update


Rydd opp ved feil:

rm -rf node_modules package-lock.json
npm install

🧠 7. Vanlige feil og raske løsninger
Feil i konsoll	Årsak	Løsning
Rollup failed to resolve import "cannon-es"	Vite finner ikke modulen	Sørg for include: ["cannon-es"] i vite.config.js
JSX syntax not enabled	Fil heter .js	Endre til .jsx
404 ved lasting av modeller	Feil sti	Bruk relative imports (./assets/...)
NotAllowedError: Pointer Lock	Nettleseren krever brukerklikk	Legg til “Klikk for å starte”-knapp eller ignorer feilen
Svart skjerm	Renderfeil	Sjekk camera.position og lyssetting
🪄 8. Pointer-Lock-info

Chrome og Firefox krever brukerinteraksjon før requestPointerLock() aktiveres.
Du kan legge til:

renderer.domElement.addEventListener("click", () => {
  try {
    renderer.domElement.requestPointerLock();
  } catch (e) {
    console.warn("User interaction required for pointer lock");
  }
});

🚀 9. Vercel-deploy

Hver git push til main → automatisk bygg og deploy.

Vercel bruker alltid package-lock.json for å installere identiske versjoner.

Grønt bygg = produksjon klar.

Sjekk bygglogg under https://vercel.com/dashboard.

🧩 10. Læringspunkter fra utviklingsreisen

Git-disiplin:
Kjør git pull --rebase før alt arbeid – alltid.

WASM vs JS-motor:
Cannon-ES ble valgt for stabilitet og enkel distribusjon.

Vite-strikt:
Alt må defineres eksplisitt i vite.config.js for å fungere i prod.

PointerLock-policy:
Ikke en feil, men en nettleserbeskyttelse.

Node-versjon:
NVM-styrt Node 22.x gir kompatibilitet og ytelse.

Cannon-ES fungerer perfekt både lokalt og i Vercel — ingen WASM-feil, ingen dynamisk importproblemer.

Vite + React 19 gir rask hot-reload og moderne modulhåndtering.

💾 11. Trygghetsrutine (før du lukker Codespace)
git add .
git commit -m "dagens arbeid"
git push origin main


✅ Alt ligger trygt i GitHub
✅ Du kan åpne prosjektet hvor som helst
✅ Ingen lokal data går tapt, selv om Codespace slettes

📘 12. Neste utviklingsfase

Terreng og bevegelse:

Legg til “ground plane” med høy friksjon (Cannon + Three).

Synk fysikk og kamera (WASD + mus).

Utvid senere til terrengmesh eller heightmap.

🧾 Sist oppdatert:

19. oktober 2025 – av Morten Hoel & GPT-5
Fysikkmotor byttet fra Rapier til Cannon-ES, byggprosess stabilisert, Vercel deploy OK ✅
