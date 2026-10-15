# Human OS — Knowledge for Life

A phone-friendly static knowledge-library PWA starter built with HTML, CSS and JavaScript.

## Files
- `index.html` — app layout
- `styles.css` — responsive premium dark theme
- `data.js` — 18 knowledge domains, starter articles and RSS source list
- `app.js` — search, navigation, bookmarks, reading history, article pages and news feeds
- `manifest.webmanifest` — install metadata
- `sw.js` — app-shell offline cache
- `icon.svg` — app icon

## Run locally
Open `index.html` in a browser for basic browsing. Some features (service worker and install prompt) require HTTPS or localhost. For best testing, deploy to GitHub Pages or another HTTPS static host.

## Deploy using GitHub on Android
1. Create a GitHub account or sign in.
2. Create a new public repository named `human-os` (or another name).
3. In the repository choose **Add file → Create new file**.
4. Create each file listed above in the repository root, paste its matching contents, and commit the file.
5. In repository **Settings → Pages**, choose deploy from branch, select `main` and `/ (root)`, then save.
6. Wait for the Pages URL to appear. Open it in Chrome.
7. Use Chrome menu → **Add to Home screen** or **Install app** if offered.

You can also upload all files through GitHub's web interface if your browser supports selecting multiple files, or use GitHub's mobile-friendly editor.

## News feeds
The app tries to fetch public RSS feeds through `api.allorigins.win` as a lightweight proxy. This is a best-effort public service, not a guaranteed production backend. Feeds/proxy can be blocked, rate-limited, unavailable or changed by publishers. News requires internet. For a reliable public product, use a maintained backend/feed service, respect publisher terms and copyright, display source and date, and link to the original article instead of republishing full stories.

## Offline
The service worker caches the app shell and bundled articles after the first successful HTTPS visit. News is live and needs internet. Browser storage can be cleared by the user/device.

## Content quality
The bundled articles are starter educational summaries with further-reading links, not a complete encyclopedia or professional advice. Verify and update content, links, and local legal/health information before wider release. Add a review date and source for each article.
