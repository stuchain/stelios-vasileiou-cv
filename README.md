# Stelios Vasileiou – Portfolio

Personal portfolio with a pixel-art UI.

## Tech stack

- **Vite** – dev server and build
- **React** – UI
- **TypeScript** – types

## Prerequisites

- **Node.js** 18+ and **npm**

## Setup

```bash
git clone <repo-url>
cd <repo-name>
npm install
```

## Run locally

```bash
npm run dev
```

Open the URL shown in the terminal (e.g. http://localhost:5173).

## Build

```bash
npm run build
```

Output is in the `dist/` directory.

## Deploy to GitHub Pages

1. Create a repository named `stuchain.github.io` (or use an existing one).
2. Push the code.
3. In **Settings → Pages**, set the source to **GitHub Actions** or to the **gh-pages** branch.
4. After the workflow runs on push to `main`, the site is available at https://stuchain.github.io.

## Editing content

All owner-specific content is edited in **`src/data/`**:

- **Profile** (name, tagline, location, avatar) – `profile.ts`
- **About** – `bio.ts`
- **CV / Resume** (education, experience, skills, interests) – `cv.ts`
- **Tech stack** – `skills.ts`
- **Featured repos** – `featuredRepos.ts`
- **Social links** (GitHub, LinkedIn, email) – `social.ts`

The CV PDF path, LinkedIn URL, and email link are placeholders. Comments in the code indicate where to replace them with your own values.
