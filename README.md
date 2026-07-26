# Summer Goals — French + ASL companion app

Offline-first PWA for the August plan. **Easiest way to use it: open the app, tap "Start today's session", and follow the steps** — the app knows the date and tells you exactly which Language Transfer lessons, which grammar lesson, which drills, what to write, and which Lifeprint lesson to do, checking off your day as you go.

Also included: daily tracker with streaks, built-in French grammar lessons with audio examples, picture-based vocabulary learning (object → French word → pronunciation), spaced-repetition flashcards, quizzes (grammar, listening, picture), and ASL practice with real handshape images (receptive/expressive fingerspelling drills, illustrated alphabet, handshape quiz, grammar tips). All progress is stored on your device (localStorage).

## What's inside

**Today** — guided session, checklist, streak, August grid
**Learn** — 14 grammar lessons · 119 picture words · picture quiz · 7 graded readings (tap any word to gloss it) · 8 interactive dialogues · embedded video courses
**Drill** — Speak (mic scores your pronunciation) · Type · Dictation · Conjugate (36 verbs × 4 tenses) · Gender · Numbers · Word-order builder
**Cards** — spaced repetition, French + ASL
**Quiz** — grammar, listening, picture
**ASL** — fingerspelling drills, illustrated alphabet + numbers, handshape quiz, sign-order practice, video course
**Stats** — mastery bars, per-drill accuracy, auto-collected weak spots
**More** — trilingual dictionary search, language toggle, custom words, backup

Desktop keyboard shortcuts: `alt`+`1–8` switch tabs · `space` flip card / record / next step · `1`/`2`/`3` grade a card · `R` replay audio · `←`/`→` le/la.

## Files

- `index.html` — the whole app (UI + logic)
- `data.js` — vocabulary, lessons, quizzes, ASL signs, Bengali glosses
- `data2.js` — verbs, dialogues, readings, sentence-builder items, extra glossary
- `asl/a.svg … z.svg` — ASL fingerspelling handshapes (public domain, via Wikimedia Commons)
- `asl/n1 … n9.jpg` — ASL number handshapes (CC BY-SA 4.0, via Wikimedia Commons)
- `img/*.jpg` — 102 real photos for the picture-word vocabulary (Wikipedia/Wikimedia, openly licensed)

## Languages

Glosses can be shown in **English, বাংলা, or both** — change it in **More → Translation language**. Every French word, phrase and lesson example has a Bengali translation, so you can learn French directly from your mother tongue instead of translating through English.
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
