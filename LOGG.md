# 🧠 MindCleft Haven – Bygglogg og beslutningsgrunnlag

Denne filen dokumenterer hva som er gjort, hvorfor vi gjorde det på denne måten,  
hva som har feilet underveis, og hvilke beslutninger som ligger til grunn for videre utvikling.  
Formålet er å sikre at prosjektet forblir **raskt, skalerbart og forståelig** for alle som deltar i videreutviklingen.

---

## 🚧 STATUS
✅ Prosjektet kjører via **Vite + npm**  
✅ React og Three.js fungerer som forventet  
✅ Motor og scene (Rapier + Three) lastes inn uten feil  
✅ Første visuelle resultat: **blå roterende kube på mørk bakgrunn**

Neste steg: legge til **terreng, spillergruppe og bevegelse (WASD + mus)**

---

## ⚙️ STRUKTUR OG TEKNOLOGIVALG

### 🎯 Hovedmål
Bygge et raskt, modulært og visuelt imponerende 3D-miljø i nettleseren,  
som senere skal kunne:
- kjøres på mobil  
- kobles til Supabase for datalagring  
- bruke Rapier som fysikkmotor  
- håndtere GLM/GLTF-modeller med høy oppløsning

### 🧩 Valgte teknologier
| Teknologi | Formål | Kommentar |
|------------|--------|-----------|
| **Vite** | Utviklingsserver og byggverktøy | Lynrask hot-reload, moderne modulsystem |
| **npm** | Pakkehåndtering | Standard for React/Vite-prosjekter |
| **React 19** | UI-rammeverk | Brukes for enkel komponering og integrasjon |
| **Three.js** | 3D-rendering | Motor for grafikk, objekter og lys |
| **Rapier3D** | Fysikkmotor | For realistisk bevegelse, kollisjon og tyngdekraft |
| **Supabase (planlagt)** | Database og autentisering | Brukes i senere faser for lagring og deling av spilldata |

---

## 🏗️ PROSJEKTSTRUKTUR

```
MindCleft-Haven-OpenAI-ver/
│
├── index.html              # Inngangspunkt for appen (Vite)
├── package.json            # Prosjektdefinisjon og npm-script
├── node_modules/           # Installerte biblioteker
├── src/
│   ├── main.js             # Oppstartspunkt for React/Vite
│   ├── App.js              # Root-komponent
│   ├── styles.css          # Global styling
│   ├── components/
│   │   └── Game.js         # Three.js + Rapier 3D-scene
│   └── ...
└── LOGG.md                 # Denne filen
```

---

## 🧠 HVA VI HAR GJORT OG HVORFOR

### 1. Første oppsett
- Startet med manuell `index.html` og importmap (esm.sh)
- Feil: Vite håndterer importene selv → `importmap` skapte 404-feil
- **Løsning:** Fjernet importmap, la alt under npm + vite-pipeline

### 2. Filstruktur og navneproblemer
- Feil: `index.html` pekte til `/src/main.jsx`, men filen het `main.js`
- **Løsning:** endret til riktig filnavn (`main.js`)
- Feil: mappe med feil navn (`asdfamindcleft...`)
- **Løsning:** flyttet og ryddet prosjektet slik at alt ligger direkte under `/src`

### 3. Vite-konfigurasjon
- Feil: `npm run dev` manglet fordi `package.json` var feil eller manglet
- **Løsning:** laget ny `package.json` med riktige `scripts`:
  ```json
  {
    "scripts": {
      "dev": "vite",
      "build": "vite build",
      "preview": "vite preview"
    }
  }
  ```

### 4. Første kjøring
- `npm run dev` fungerte ✅  
- Mørk skjerm → kuben lastet ikke
- Feil: Vite fant ikke `main.jsx`
- **Løsning:** Rettet `src/main.js`-referanse i `index.html`

### 5. Kube og scene
- Nå vises en blå kube som roterer mot mørk bakgrunn
- Renderer, lys og animasjon fungerer
- **Neste:** legge til terreng og spillergruppe

---

## ⚠️ LÆRINGSPUNKTER

| Problem | Årsak | Løsning |
|----------|--------|----------|
| 404 på `main.jsx` | Feil filreferanse | Rettet til `/src/main.js` |
| Svart skjerm | Importmap + Vite konflikt | Fjernet importmap |
| `npm run dev` mangler | Manglende `scripts` i `package.json` | Opprettet korrekt konfig |
| Feil mappehierarki | Auto-generert submappe | Flyttet filer til rot |

---

## 📘 BESLUTNINGER SOM SKAL FØLGES VIDERE

1. **All utvikling skal gå gjennom Vite + npm.**  
   Ingen manuell importmap eller CDN-lenker i index.html.
2. **Filnavn konsekvent små bokstaver.**
3. **Struktur beholdes som over.**
4. **Ingen kode dupliseres – komponenter legges under `/src/components/`.**
5. **Vi dokumenterer endringer i denne LOGG.md** ved hvert milepæl.

---

## 🔜 NESTE STEG

**Steg 2: Terreng og spillergruppe**
- Legg til plane (bakke)
- Sett opp lys og skygger
- Legg til "player" (kamera + fysikk)
- Implementer enkel bevegelse med WASD + mus

Etter dette går vi til:
**Steg 3: Terrengmodell og lastoptimering**  
– fokus på delvis last av områder og GPU-optimalisering.

---

## 🧾 Sist oppdatert
🧠 19. oktober 2025 – Node-versjon og Vite-feil løst
---------------------------------------------------
Problem:
Vite krevde Node v20.19+ eller v22.12+, men Codespaces lå låst på Node v16.20.2.

Tidligere forsøk:
- Installering av Node 22 via `sudo n 22` virket lokalt, men Codespaces brukte fortsatt NVM som overstyrte path.
- Symbolske lenker via `ln -sf` hadde ingen effekt fordi NVM gjenopprettet /usr/bin/node ved hvert terminalstart.

Endelig løsning:
1. Bruk `nvm install 22` for å laste ned og aktivere riktig versjon.
2. Aktiver med `nvm use 22`.
3. Sjekk versjon med `node -v` → v22.20.0.
4. Gjør endringen permanent: `nvm alias default 22`.

Resultat:
✔️ Vite kjører som forventet med `npm run dev`.
✔️ Miljø klart til videre bygging og Supabase-integrasjon.


**19. oktober 2025** – av systembygger (ChatGPT GPT-5) og Morten Hoel  
