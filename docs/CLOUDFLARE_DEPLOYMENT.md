# Cloudflare Pages deployment

The Astro site is configured for a static Cloudflare Pages deployment.

## Project settings

- Pages project name: `rahmatullah-10-life`
- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: `22.12.0`

## One-time Cloudflare setup

1. In Cloudflare, create a Pages project named `rahmatullah-10-life`.
2. Choose Git integration or Direct Upload. The repository workflow uses Direct Upload through Wrangler.
3. Create a Cloudflare API token with permission to deploy Cloudflare Pages projects for the target account.
4. Copy the Cloudflare account ID.

## GitHub configuration

In the repository, open **Settings → Secrets and variables → Actions** and add:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

The workflow also targets the GitHub environment named `production`. Secrets may be stored either at repository level or in that environment.

## Deployment behavior

`.github/workflows/cloudflare-pages.yml` runs on:

- every push to `main`
- manual execution from the GitHub Actions tab

The workflow always installs dependencies and builds the Astro site. It deploys only when both Cloudflare secrets are available. When the secrets are missing, deployment is skipped with an explanatory message instead of exposing credentials or attempting an unauthenticated upload.

## First deployment

After a verified PR is merged to `main`:

1. Confirm the Cloudflare project exists.
2. Confirm both GitHub secrets exist.
3. Open **Actions → Deploy Cloudflare Pages → Run workflow**, or allow the merge commit push to trigger it automatically.
4. Review the deployment URL and then protect it with Cloudflare Access before sharing it, because the site contains personal images.

## Manual local deployment

```bash
npm install
npm run build
npx wrangler pages deploy dist --project-name=rahmatullah-10-life --branch=main
```

Wrangler will require a Cloudflare login or environment credentials.
