# Stelios Vasileiou – Portfolio

[**▶ Visit live site**](https://stuchain.github.io/portfolio/)

Modern developer portfolio featuring an **glass UI**, built with **Vite + React 18 + TypeScript + Framer Motion**.
All content is driven from a single `profile.md` file — edit once, regenerate, deploy.

---

## Quick start

Requires **Node.js 18+** and **npm**.

```bash
git clone <this-repo-url>
cd portfolio
npm install
npm run dev
```

Then open the URL from the terminal (usually `http://localhost:5173`).

---

## Tech stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript |
| Build tool | Vite 5 |
| Animations | Framer Motion 12 |
| Styling | CSS custom properties, `backdrop-filter`, SVG filters |
| Content | `profile.md` → generated TypeScript via `gray-matter` |
| Deployment | GitHub Pages via GitHub Actions |

---

## Glass design system

- **Frosted glass panels** — `backdrop-filter: blur() saturate()` with semi-transparent backgrounds and multi-layer inset box shadows for rim lighting.
- **Pointer-reactive spotlight** — a per-element radial gradient that smoothly follows the cursor via a custom `useLocalPointer` hook using `requestAnimationFrame` + lerp interpolation. Appears instantly on hover, vanishes instantly on leave.
- **SVG edge refraction** — subtle `feTurbulence` + `feDisplacementMap` filter for organic edge distortion (Chromium only, graceful degradation).
- **Dynamic theming** — React Context drives CSS custom properties for real-time switching of every visual dimension (see Settings below).
- **Animated backgrounds** — 16 distinct background styles rendered as Framer Motion components.
- **Accessibility** — `prefers-reduced-motion` disables all glass effects and heavy animations; all interactive elements have `aria-label` and `:focus-visible` indicators.

---

## Settings & customization

A floating gear button opens a glass settings panel with:

| Setting | Options |
|---------|---------|
| **Theme** | Dark / Light |
| **Accent** | Blue, Teal, Purple (default), Green, Orange, Pink |
| **Font** | Inter, Plus Jakarta Sans, DM Sans, System, JetBrains Mono (default) |
| **Background** | Blobs, Aurora, Grid (default), Orbs, Plasma, Nebula, Lava, Rain, Stars, Vortex, Pulse, Streak, Sunset, Glow, Noise, None |
| **Glass** | On (default) / Off |

Settings are session-only and reset on reload.

---

## Content: edit `profile.md` only

All text and links on the site come from **`profile.md`** in the repo root:

- **Profile & hero:** name, GitHub username, tagline, location.
- **Social links:** GitHub, LinkedIn, email, phone.
- **About & Resume:** bio paragraphs, education, experience.
- **Skills & projects:** skill categories, featured repos, fallback repos.

Example (simplified):

```yaml
name: Your Name
githubUsername: your-github
tagline: Full-Stack Developer
location: City, Country

social:
  github: https://github.com/your-github
  linkedin: https://www.linkedin.com/in/you/
  email: mailto:you@example.com

bio:
  - "Short about paragraph 1."
  - "Short about paragraph 2."
```

Whenever you change `profile.md`, regenerate data with:

```bash
npm run generate
```

or simply run `npm run dev` — the generator runs automatically before the dev server. The script writes `src/data/generated.ts`; do **not** edit files in `src/data/` by hand.

---

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Generate data from `profile.md` and start the Vite dev server |
| `npm run build` | Generate data, type-check, and produce a production bundle in `dist/` |
| `npm run preview` | Serve the built `dist/` locally for a production-like preview |
| `npm run generate` | Regenerate `src/data/generated.ts` from `profile.md` |

---

## Project structure

```
├── profile.md                  # Single source of truth for all content
├── index.html                  # Entry point (font preloads)
├── scripts/
│   └── generate-data.cjs       # profile.md → src/data/generated.ts
├── src/
│   ├── App.tsx                 # Root component, SVG filters, layout
│   ├── index.css               # Global styles, theme variables, glass system
│   ├── contexts/
│   │   └── ThemeContext.tsx     # Theme state (mode, accent, font, bg, glass)
│   ├── hooks/
│   │   ├── useActiveSection.ts # Scroll-aware active section detection
│   │   └── useLocalPointer.ts  # Per-element pointer tracking with lerp
│   ├── components/
│   │   ├── Nav.tsx             # Floating glass pill navigation bar
│   │   ├── Hero.tsx            # Centered hero glass card
│   │   ├── About.tsx           # Bio section
│   │   ├── CV.tsx              # Education & experience timeline
│   │   ├── Footer.tsx          # Footer
│   │   ├── Projects.tsx        # Project cards with language filters
│   │   ├── Skills.tsx          # Skill categories
│   │   ├── Contact.tsx         # Social links & contact info
│   │   ├── BackToTop.tsx       # Floating back-to-top button
│   │   ├── RepoCard.tsx        # Individual project card
│   │   └── ui/
│   │       ├── GlassPanel.tsx          # Reusable frosted glass container
│   │       ├── GlassButton.tsx         # Pill-shaped glass button
│   │       ├── AnimatedBackground.tsx  # 16 animated background renderers
│   │       ├── SettingsFAB.tsx         # Floating settings gear + panel
│   │       ├── SectionReveal.tsx       # Scroll-triggered entrance animation
│   │       └── BlinkingCursor.tsx      # Thin blinking cursor indicator
│   └── data/
│       ├── generated.ts        # Auto-generated (do not edit)
│       └── types.ts            # TypeScript interfaces for profile data
└── dist/                       # Production build output
```

---

## Deployment (GitHub Pages or any static host)

The app produces static files — deploy the `dist/` folder anywhere.

For this repo, deployment is configured via **GitHub Actions**:

1. In GitHub: **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main`. The workflow builds and deploys to:
   `https://stuchain.github.io/portfolio/`

---

## Using this as a template

1. **Fork** the repo.
2. Update **`profile.md`** with your own details (name, GitHub username, bio, CV, skills, repos).
3. Run **`npm run build`** to regenerate data and produce a production bundle.
4. Deploy the `dist/` folder to your host.

Content should always flow from `profile.md` — avoid editing `src/data/generated.ts` directly.
