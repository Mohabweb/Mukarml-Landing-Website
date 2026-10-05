# مُكَرْمَل

Arabic, right-to-left landing page for a Saudi sweets and coffee brand.

## Run locally

```bash
pnpm install
pnpm --filter @workspace/mukarml-landing run dev
```

## Build

```bash
pnpm --filter @workspace/mukarml-landing run build
```

The static site is generated at `artifacts/mukarml-landing/dist/public`.

## Deploy to Vercel

1. Push this repository to GitHub and import it into Vercel.
2. Keep Vercel's **Root Directory** set to the repository root.
3. Leave the install, build, and output settings to `vercel.json`.
4. No environment variables are required for this static site.

The Vercel build uses the workspace lockfile and builds only the Mukarml landing page. The site's logo and photography are stored locally under the artifact's `public` directory.
