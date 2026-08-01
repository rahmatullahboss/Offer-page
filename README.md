# My 10.0 Life — Astro 7

A personal visual life-alignment website for Rahmatullah. It presents the long-term business, family, wealth, team, service, and six-month execution vision.

## Stack

- Astro 7.1.4
- Tailwind CSS 4.3.3 through the Vite plugin
- Static output
- Cloudflare Pages
- Zero React or Next.js runtime
- Node.js 22.12.0 or newer

## Routes

- `/` — primary vision board
- `/vision` — preserved vision-board route

## Local development

```bash
npm install
npm run dev
```

Astro will print the local preview URL in the terminal.

## Production build

```bash
npm run build
npm run preview
```

The static build is generated in `dist/`.

## Cloudflare Pages deployment

Connect `rahmatullahboss/Offer-page` to Cloudflare Pages and use:

- Framework preset: Astro
- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: `22.12.0`

The repository also includes `wrangler.jsonc`. A manual deployment can be run with:

```bash
npm install
npm run deploy
```

## Privacy and security

The site contains a personal photograph and AI-generated visualization images. It ships with search-engine blocking metadata, `robots.txt`, and Cloudflare Pages security headers. These controls discourage indexing but do not make a public URL private.

For real access control, protect the deployed hostname with Cloudflare Access before sharing it. Until then, anyone who knows the deployment URL may be able to view the page and its images.
