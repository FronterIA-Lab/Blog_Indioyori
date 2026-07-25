# Soberanía Cognitiva · Indioyori

## Cursor Cloud specific instructions

This repo is a **static website** (plain HTML + CSS + a single vanilla JS file) living in `site/`. There is no package manager, no build step, no automated tests, and no linter configured. Nothing needs to be installed to develop it.

- **Run (dev):** serve `site/` with any static server, e.g. `cd site && python3 -m http.server 8000`, then open `http://localhost:8000/`. Python 3 is preinstalled. See `site/README.md` for details.
- **Build:** none. Deployment publishes the raw `site/` folder to GitHub Pages (`.github/workflows/deploy-pages.yml`, triggered on push to `main`).
- **Lint/test:** none configured.
- **Pages:** `index.html`, `manifiesto.html`, `talleres.html`, `archivo.html`, `comunidad.html`, `contacto.html`, `nota-soberania-cognitiva.html`. Shared assets in `site/assets/` (`css/styles.css`, `js/main.js`, `img/`).
- **Interactive JS** (`site/assets/js/main.js`) drives the mobile nav, the card grid tag filter, and the contact form. The contact form has an anti-spam timer (submissions faster than ~2.5s are rejected) and, when no backend `data-endpoint` is set, falls back to opening a `mailto:` link — so a successful submit navigates to the mail client rather than POSTing.
- **Config placeholders:** several integrations are stubbed with `TU_...` markers (Stripe payment links in `talleres.html`, Matrix room in `comunidad.html`, form endpoint in `contacto.html`, video/podcast IDs). These are intentional and don't block local development.
