# Architect — Web App (PWA)

A Duolingo-style study app for the **Claude Certified Architect** exam. Pure HTML/CSS/JS —
no build step, no framework, no Apple Developer account. Install it on your iPhone via
"Add to Home Screen" and use it anywhere, offline.

## Files
- `index.html`, `styles.css`, `app.js` — the app
- `content.js` — all 12 units / 51 lessons / 88 questions, inlined as `window.__CONTENT__` (exported from the iOS app's Swift; loaded with no fetch so it works over file:// and offline)
- `manifest.webmanifest`, `sw.js`, `icons/` — PWA install + offline support

> The content is generated from the iOS app so the two stay in sync. To regenerate after
> editing the Swift content: re-run the exporter in `/tmp/webexport` (see project memory).

## Test it locally
A service worker needs a real server (opening the file directly won't work). From this folder:
```
python3 -m http.server 8000
```
Then open `http://localhost:8000` in a browser.

## Put it on your iPhone — free, anywhere

### Option A — GitHub Pages (recommended, free, permanent URL)
1. Create a free GitHub account and a new **public** repo (e.g. `architect`).
2. Upload the **contents of this folder** to the repo (drag-and-drop in the GitHub web UI works).
3. Repo → **Settings → Pages** → Source: `Deploy from a branch`, Branch: `main` / `/ (root)` → Save.
4. After a minute you get a URL like `https://YOURNAME.github.io/architect/`.
5. On your iPhone, open that URL in **Safari** → tap **Share** → **Add to Home Screen**.
   It now has an app icon, runs full-screen, and works offline.

### Option B — Netlify / Cloudflare Pages (drag-and-drop)
Sign in free, drag this folder onto their "deploy" area, get an HTTPS URL, then Add to Home Screen as above.

## Notes
- Must be served over **HTTPS** (GitHub Pages / Netlify provide it automatically) for offline mode.
- Progress (XP, streak, crowns, mistakes) is saved on the device via `localStorage`.
- Paths are relative, so hosting under a sub-path (like `/architect/`) works fine.
