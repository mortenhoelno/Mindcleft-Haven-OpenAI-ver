📘 DEV_GUIDE.md
Mindcleft Haven – Utviklingsmanual
🧩 1. Prosjektstruktur (React + Vite)
src/
 ├─ components/
 │   ├─ App.jsx         → Hovedkomponent (kobler alt sammen)
 │   ├─ Game.jsx        → 3D-verden (Three.js + Rapier)
 │   └─ main.jsx        → Inngangspunkt (render til DOM)
 ├─ styles.css          → Globale stiler
 ├─ index.html          → Roterende app-entry
vite.config.js          → Vite-oppsett
package.json            → Avhengigheter og scripts


Nøkkelkonsepter:

Alle filer som inneholder JSX (React HTML) skal ha .jsx.

Dynamiske imports brukes for tunge moduler som Rapier.

Dette prosjektet er bygget for fremtidig bruk av AI, 3D og fysikkmotorer — ikke tradisjonell statisk HTML.

🚀 2. Daglig arbeidsflyt (GitHub ↔ Codespaces)
Før du starter å jobbe (hver økt):
git pull --rebase origin main


➡️ Henter siste endringer fra GitHub og oppdaterer Codespace.
Forhindrer konflikter og tapte filer.

Underveis (lagre arbeid ofte):
git add .
git commit -m "Kort beskrivelse av endringen"


➡️ Tar et “snapshot” av arbeidet ditt.
Små commits = tryggere gjenoppretting senere.

Etter endt økt (push til GitHub):
git push origin main


➡️ Laster opp alt arbeid slik at GitHub og Codespaces er synkronisert.

💡 Tips:

Bruk git status for å se endringer og git log --oneline for historikk.
Bruk VS Code’s innebygde Git-funksjoner (✔️, ⬆️, ⬇️) for enkel oversikt.

🔄 3. Rydding og feilsøking av Git-konflikter

Hvis du får en feilmelding som:

Updates were rejected because the remote contains work that you do not have locally


→ Kjør:

git pull --rebase origin main


Les eventuelle CONFLICT-meldinger i terminalen.
Løs dem manuelt, lagre filene, og fortsett:

git add .
git rebase --continue
git push origin main

⚙️ 4. Bygge og kjøre prosjektet
Start utviklingsserver:
npm run dev


Serveren starter på:
👉 http://localhost:5173

Tvungen rebuild (rydder cache):
npm run dev -- --force

📦 5. Oppdatere Node og avhengigheter
Bytt Node-versjon (bruk nvm):
nvm install 22
nvm use 22


Sjekk:

node -v
npm -v

Oppdatere pakker:
npm update

Fjern og installer alt på nytt (ved feil):
rm -rf node_modules package-lock.json
npm install

🧠 6. Når du legger til nye filer

Gi komponenten .jsx-ending hvis den inneholder HTML/JSX.

Eksporter alltid med:

export default function Navn() { ... }


Importer den slik:

import Navn from "./components/Navn.jsx";

🌐 7. Moderne importregler

Bruk alltid:

import * as THREE from "three";
const RAPIER = (await import("@dimforge/rapier3d-compat")).default;


Unngå:
❌ Eksterne URL-er som https://cdn.jsdelivr.net/...
Disse fører til 404-feil og treg lasting i moderne byggesystemer.

🧩 8. Tips for stabilitet i Vite

Bruk --force når ting ikke oppdateres riktig

Sørg for at vite.config.js ikke peker til gamle CDN-stier

Fjern .js- og .jsx-duplikater før commit (kun én skal eksistere)

🛠️ 9. Feilsøking av vanlige feil
Feil i nettleser	Årsak	Løsning
Failed to load rapier.es.js (404)	Henter fra CDN	Fjern gammel import, bruk npm-modulen
JSX syntax not enabled	Fil heter .js	Endre til .jsx
vite failed to scan for dependencies	Cachefeil	npm run dev -- --force
Updates were rejected	Lokalt/GitHub ut av sync	git pull --rebase origin main
🔐 10. Trygghetsrutine – alltid før du lukker Codespace
git add .
git commit -m "dagens arbeid"
git push origin main


Dette sikrer at:
✅ Alt ligger trygt i GitHub
✅ Du kan åpne prosjektet fra hvor som helst
✅ Ingen lokal data går tapt selv om Codespace blir slettet
