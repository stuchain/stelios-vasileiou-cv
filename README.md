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

The workflow uses **GitHub Actions** (upload-pages-artifact + deploy-pages). The site URL depends on the **repository name**:

- Repo **`stuchain.github.io`** → https://stuchain.github.io/ (root URL)
- Repo **`portfolio`** → https://stuchain.github.io/portfolio/
- Repo **`stelios-vasileiou-cv`** → https://stuchain.github.io/stelios-vasileiou-cv/

**404 redirect:** When a visitor hits an unknown path (e.g. `/some/missing/page`), GitHub Pages serves `public/404.html`, which redirects to `/` and shows a “Go home” link so they land on the SPA.

### One-time setup (do this first)

1. **Enable GitHub Pages**  
   In the repo: **Settings → Pages**.

2. **Set the publishing source**  
   Under "Build and deployment":
   - **Source:** choose **GitHub Actions** (not "Deploy from a branch").

3. **Push to `main`**  
   The workflow runs on push to `main`. After it succeeds, the site is live at the URL above.

### If the site is still blank

- **Check the repo name.** Only a repo named `portfolio` is served at `.../portfolio/`. If your repo is `stelios-vasileiou-cv`, open `.../stelios-vasileiou-cv/` instead.
- **Check the workflow run.** Repo → **Actions** tab. The "Deploy to GitHub Pages" workflow should be green. If the **deploy** job failed, fix the error (e.g. permissions, environment).
- **Confirm Pages source.** Settings → Pages → Source must be **GitHub Actions**. If it is "Deploy from a branch", switch it to **GitHub Actions** and push again.

## Editing content

All editable content lives in **`src/data/`**:

- **Profile** (name, tagline, location, avatar) – `profile.ts`
- **About** – `bio.ts`
- **CV / Resume** (education, experience, skills, interests) – `cv.ts`
- **Tech stack** – `skills.ts`
- **Featured repos** – `featuredRepos.ts`
- **Social links** (GitHub, LinkedIn, email) – `social.ts`

Replace the following placeholders where indicated in the code: **CV PDF path** (e.g. in `src/components/CV.tsx`, set the Download CV link `href` to `/cv.pdf` after adding a PDF to `public/`); **LinkedIn URL** (in `src/data/social.ts`); **email link** (in `src/data/social.ts`, use a `mailto:` or contact URL).

**Favicon:** A simple pixel-style placeholder favicon is in `public/favicon.ico`. You can replace it by dropping your own `favicon.ico` (e.g. 16×16 or 32×32) into `public/`; no code changes needed.
