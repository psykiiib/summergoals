# Summer Goals — French + ASL companion app

Offline-first PWA for the August plan: daily tracker with streaks, built-in French grammar lessons with audio examples, picture-based vocabulary learning (object → French word → pronunciation), spaced-repetition flashcards, quizzes (grammar, listening, picture), and ASL practice with real handshape images (receptive/expressive fingerspelling drills, illustrated alphabet, handshape quiz, grammar tips). All progress is stored on your device (localStorage).

## Files

- `index.html` — the whole app (UI + logic)
- `data.js` — all learning content (edit this to add/change vocab, lessons, quizzes, signs)
- `asl/a.svg … z.svg` — ASL fingerspelling handshapes (public domain, via Wikimedia Commons)
- `sw.js` — service worker (makes it work offline)
- `manifest.webmanifest` + icons — makes it installable on your phone

## Get it on your phone (one-time, ~5 minutes, free)

Service workers need HTTPS, so host it free on GitHub Pages:

1. Create a repo on github.com (e.g. `summergoals`), upload these files (drag & drop works).
2. Repo → Settings → Pages → Source: `main` branch, root → Save.
3. Wait ~1 minute, open `https://<your-username>.github.io/summergoals/` on your phone.
4. Chrome (Android): menu ⋮ → **Add to Home screen** → Install. iPhone: Share → **Add to Home Screen**.
5. Open it once while online — after that it works fully offline, like a native app.

(Netlify Drop — app.netlify.com/drop — also works: drag the folder in, done.)

## Test on PC

Run any static server in this folder, e.g. `npx serve` or `python -m http.server`, then open `http://localhost:8000`. (Opening `index.html` directly also works — everything except the service worker.)

## Notes

- **Audio**: flashcards/listening quiz use your phone's built-in French text-to-speech. On Android, if you hear nothing offline: Settings → Text-to-speech → install/download the French voice.
- **Progress backup**: More tab → Export progress (copies JSON to clipboard).
- **Updating content**: edit `data.js`, push, and bump the cache name in `sw.js` (`summergoals-v1` → `v2`) so phones pick up the new version.
