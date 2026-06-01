# Harkan Robotics — Website

A modern, fully responsive marketing site for Harkan Robotics, built with
**Vite + React + Tailwind CSS v4**. Dark, cinematic theme with the brand
orange-red accent (`#e75125`).

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build for production

```bash
npm run build    # outputs static files to /dist
npm run preview  # preview the production build locally
```

## Deploy to Hostinger

1. Run `npm run build`.
2. Upload the **contents of the `dist/` folder** (not the folder itself) to
   your `public_html` directory via Hostinger's File Manager or FTP.
   Make sure the included **`.htaccess`** is uploaded too (enable "show hidden
   files" in File Manager) — it powers the page routing and caching.
3. That's it — it's a static site, no Node server required.

> The site must be served from the **domain root** (`base: '/'`), because it
> uses client-side routing for the product pages. The `.htaccess` rewrites all
> routes back to `index.html` so links like `/products/icer-alpha` work on
> direct load and refresh.

## Optimizing images

Source images live in `raw-assets/` (kept out of the build). To regenerate the
compressed WebP files in `public/img/` after adding/replacing a source:

```bash
node scripts/optimize-images.mjs
```

Edit the `JOBS` list in `scripts/optimize-images.mjs` to add new images or
change target widths/quality.

## Where to edit things

| What | File |
| --- | --- |
| All text, specs, products, contact info | `src/data.js` |
| Colors, fonts, design tokens | `src/index.css` (`@theme` block) |
| Logo, product images, scene photos | `public/img/` |
| Individual sections | `src/components/*.jsx` |
| Page title / SEO meta / social preview | `index.html` |

## Pages

- `/` — Home: Hero → Sectors marquee → Products → Why Harkan → Industries →
  Process → Contact → Footer.
- `/products/icer-alpha`, `/products/icer-beta` — full product detail pages
  (overview, technical specs, capabilities, applications), driven by `src/data.js`.
- `/services` — services grid + CTA.
- `/about` — story, principles, founders, build process.
- `/contact` — dedicated contact page with the enquiry form.

## Contact form

The form posts to **Web3Forms** (free, no backend — perfect for static hosting).
To turn on email delivery:

1. Go to https://web3forms.com, enter your email, and copy the access key.
2. Paste it into `CONTACT_CONFIG.web3formsKey` in `src/data.js`.

Until a key is set, the form runs in **demo mode** (validates and shows a success
state, but sends nothing). Submissions then arrive at the email you registered.

## To-do before launch

- **Add the Web3Forms access key** (above) to enable the contact form.
- Replace social links in `src/components/Footer.jsx` with the real profile URLs.
- Point a real domain (e.g. `harkanrobotics.com`) and update the canonical URL in `index.html`.

✅ Images optimized to WebP (~13 MB → ~0.6 MB).
✅ Multi-page site with client-side routing + Hostinger `.htaccess`.
