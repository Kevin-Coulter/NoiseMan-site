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

## Environment variables

Set the Paddle checkout URL so the Buy buttons are enabled:

```bash
VITE_PADDLE_CHECKOUT_URL="https://checkout.paddle.com/your-link"
```

You can place this in an `.env.local` file for local use.

## Deployment

- Netlify: build command `npm run build`, publish directory `dist`. The repo includes a `public/_redirects` file for SPA routing.
- GitHub Pages: set the `base` in `vite.config.js` if deploying under a subpath, then deploy the `dist` folder. Configure a SPA fallback (404 redirect) if you need direct deep links like `/privacy`.

## Contact placeholder

Update `support@YOURDOMAIN.com` to your real support email before publishing.
