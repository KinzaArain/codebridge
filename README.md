# CodeBridge

A free, trilingual (English / Urdu / Korean) beginner programming lesson app —
built as a bridge between Pakistani learners and Korean tech education.

## What it does

- 5 beginner lessons: Variables, Conditionals, Loops, Functions, Lists
- Every explanation and exercise is available in English, Urdu (RTL), and Korean
- Progress is tracked locally in the browser (no login needed)
- A signature "bridge" visual lights up lantern-nodes as you complete lessons

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

## Deploy it for free (so you have a live link for your application)

**Option A — Vercel (recommended, ~5 minutes)**
1. Push this folder to a new GitHub repo
2. Go to vercel.com → "Add New Project" → import that repo
3. Vercel auto-detects Vite. Click Deploy.
4. You'll get a live URL like `codebridge-yourname.vercel.app`

**Option B — Netlify**
1. Run `npm run build` — this creates a `dist/` folder
2. Go to netlify.com → drag and drop the `dist/` folder onto the deploy area
3. You'll get a live URL instantly

## Project structure

```
src/
  data/lessons.js         ← lesson content (edit here to add more lessons)
  i18n/strings.js         ← UI text in all 3 languages
  context/ProgressContext.jsx  ← tracks completed lessons in localStorage
  components/
    BridgeProgress.jsx    ← the lantern-bridge progress visual
    LanguageToggle.jsx
    LessonList.jsx
    LessonView.jsx
  App.jsx
```

## Adding a new lesson

Add an object to the `lessons` array in `src/data/lessons.js` with the same
shape as the existing ones (title/explanation/exercise in en/ur/ko). It will
automatically appear in the lesson list and progress bridge.

## Ideas for v2

- Swap the string-match exercise checker for a real code sandbox (e.g. Pyodide)
- Add a simple backend so progress syncs across devices
- Add a TOPIK-style Korean vocabulary track alongside the coding track
- Let users request lessons in additional languages
