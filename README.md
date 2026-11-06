# Enzo Gubbiotti — Trail portfolio

Bilingual (EN/FR) Astro site for Enzo’s trail running: identity, 2027 projects, results, journal, partnerships and a coaching waitlist.

## Run locally

```sh
npm ci
npm run dev        # http://localhost:4323
npm run build      # static output in dist/
npm run preview
```

## Pages

| Page                | English                                                  | French              |
| ------------------- | -------------------------------------------------------- | ------------------- |
| Home                | `/`                                                      | `/fr/`              |
| About               | `/about/`                                                | `/fr/a-propos/`     |
| Projects            | `/projects/`                                             | `/fr/projets/`      |
| GR441 · UTLAC · VDA | `/projects/gr441/`, `/projects/utlac/`, `/projects/vda/` | `/fr/projets/…`     |
| Results             | `/results/`                                              | `/fr/resultats/`    |
| Journal             | `/blog/`, `/blog/<slug>/`, `/blog/rss.xml`               | `/fr/blog/…`        |
| Partnerships        | `/partnerships/`                                         | `/fr/partenariats/` |
| Coaching (waitlist) | `/coaching/`                                             | `/fr/coaching/`     |

Each route file in `src/pages/` only renders a page component from `src/components/pages/`. Sections shared between pages live in `src/components/trail/`. Paths for both languages are declared once in `src/lib/routes.ts`; always link with `href(key, lang)` so the deployment base is applied. Each 3D route renders on its own project page only.

## Writing a journal post

1. Copy `src/content/blog/fr/_modele-recit.md` to `src/content/blog/fr/<slug>.md` (or `en/` for English). Files starting with `_` are never published.
2. Fill the front matter: `title`, `description` (180 characters max), `date`, `category` (`race-report`, `training`, `gear` or `thoughts`). For a race report, fill `race` to show the race card (distance, elevation, time, rankings, official results link).
3. Optional cover: put the image in `public/images/blog/` and set `cover` and `coverAlt`.
4. A translated version goes in the other language folder; link both with `translation: <other-slug>`.
5. Posts with `draft: true` appear in `npm run dev` only. Set `draft: false` to publish: the post then appears in the journal, on the home page, in the RSS feed and in the sitemap.

## Content and data

- `src/data/site-copy.ts`: navigation, page headers, journal, partnerships and coaching copy.
- `src/data/trail-copy.ts`: trail story, results labels, partnership formats and goal copy.
- `src/data/trail.ts` + `src/data/projects.ts`: 2027 goals (ambitions, not confirmed entries) in calendar order.
- `src/data/race-routes.ts`, `*-3d.json`, `gr441-project.ts`: 3D routes and the GR441 project.
- `src/data/trail-results.json`: dated UTMB snapshot. `src/data/trail-social.ts`: dated TikTok snapshot. Refresh figures and dates together.
- Image credits: `public/images/trail/SOURCES.md` and the sidecar `.json` files.

## SEO

`astro.config.mjs` sets `site` and the sitemap integration (`sitemap-index.xml`, with EN/FR alternates). Every page has a canonical URL, `hreflang` alternates, Open Graph tags and its own description. The home page carries `Person` structured data and posts carry `BlogPosting`. A GitHub Pages workflow should pass `--site` and `--base` to `astro build`.
