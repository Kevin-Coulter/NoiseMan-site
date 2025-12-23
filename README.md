# NoiseMan Site

Modern, static landing site for the NoiseMan noise reduction plugin (VST3 + CLAP).

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

`npm run build` generates `dist` and also syncs the built site to the repo root for GitHub Pages branch deployments.

## Environment variables

Set the Paddle checkout URL so the Buy buttons are enabled:

```bash
VITE_PADDLE_CHECKOUT_URL="https://checkout.paddle.com/your-link"
```

You can place this in an `.env.local` file for local use.
For GitHub Pages, add `VITE_PADDLE_CHECKOUT_URL` as a repository variable and the workflow will pick it up during the build.

## Deployment

- Netlify: build command `npm run build`, publish directory `dist`. The repo includes a `public/_redirects` file for SPA routing.
- GitHub Pages (recommended): this repo includes a workflow at `.github/workflows/deploy.yml`. In GitHub settings, set Pages Source to `GitHub Actions`. The build output includes `public/CNAME` and `public/404.html` for custom domains and SPA routing.
- GitHub Pages (branch root): after running `npm run build`, commit the generated root `index.html` and `assets` folder, then set Pages Source to `main` and `/root`.

## Contact placeholder

Update `support@YOURDOMAIN.com` to your real support email before publishing.
