# My 10.0 Life — Astro 7

A private, visual life-alignment website for Rahmatullah. The site presents the long-term business, family, wealth, team, service, and six-month execution vision.

## Stack

- Astro 7
- Tailwind CSS 4 through the Vite plugin
- Static output
- Cloudflare Pages
- Zero React or Next.js runtime

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
- Node version: `22`

The repository also includes `wrangler.jsonc`. A manual deployment can be run with:

```bash
npm install
npm run deploy
```

## Privacy note

The site contains the uploaded personal photograph and AI-generated visualization images. A public Cloudflare deployment makes those images visible to anyone who can access the deployed URL.
