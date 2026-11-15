# 60 Minutes Fitness Studio

Static React portfolio for 60 Minutes Fitness Studio, Perambur / Jamalia, Chennai. No server, database, authentication, CMS, or enquiry storage is included.

## Run locally

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

The static output is in `dist/`. Deploy it to any static host that serves Vite builds. Update the canonical URL, Open Graph URL, sitemap, and structured data URL if the deployment host differs from `https://60minutesfitnessstudio.co.in/`.

## Content and media

Edit local content in `src/data/`. Original logo, studio photographs, trainer portraits, videos, and promotional art were not available with confirmed reuse rights during research. The site labels each missing media area; replace those CSS placeholders with owner-approved originals before publishing. See [docs/asset-inventory.md](docs/asset-inventory.md) and [docs/research-notes.md](docs/research-notes.md).

The contact form validates fields in the browser and opens a prefilled `mailto:` message. It does not submit or retain enquiries. Google review links are intentionally absent until the correct studio profile is confirmed.
