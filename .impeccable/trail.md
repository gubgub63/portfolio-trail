# Trail portfolio

Mode: Experience. Multi-page bilingual site (routes in `src/lib/routes.ts`, listed in `README.md`). Visual world: a personal field journal shaped by the user’s explicit refinement after rejecting aggressive typography and a landscape-first campaign. Enzo’s first and last name lead, with real personal imagery and purposeful animation. The original direction contract is `.impeccable/surfaces/src-components-trailpage-astro.md`.

Purpose: introduce Enzo as a trail runner from Puy-de-Dôme, show verified results, share race stories, attract outdoor brand partnerships and collect interest for a future coaching offer. Making a living from trail running is an aspiration, not a current professional claim. His goal of reaching a UTMB Index of 700 in 2026 remains an ambition, independently of the dated published index values. The coaching page is a waitlist only: no prices, no claim of a coaching qualification.

## Information architecture

The November 2026 revision replaced the single long page with dedicated pages, following the audience → credibility → offer model of matrail.fr:

- Home: hero, 2027 season cards, result highlights, latest journal posts (empty state until the first post), TikTok journal, three doors (partnerships, coaching, about). No 3D scene.
- About: biography chapters with the sticky photo spread, the GR441 “it all starts at home” pitch with a photograph, and three pillars.
- Projects: season timeline and one card per project. Each project has its own page with a single 3D route and a previous/next pager; the GR441 keeps its dedicated project page.
- Results: highlights, UTMB index and full history in the open (no disclosure).
- Journal: Markdown content collection (`src/content/blog/{en,fr}`), category filter as progressive enhancement, race card on race reports, RSS feed per language.
- Partnerships: media-kit layout with dated audience figures, results, the 2027 calendar, the three collaboration formats and a prefilled email.
- Coaching: approach, audience, formats in preparation, prefilled waitlist email.

## Shipped visual world

`src/layouts/TrailLayout.astro` imports only `src/styles/trail.css`. Warm paper, olive ink, focused safety-orange accents, light Manrope typography and natural-case headings. Page headers pair an uppercase kicker with a two-line heading whose second line is muted. Landscapes keep asymmetric radii (`24px 140px 24px 90px`, smaller on cards). Dark night sections hold the 3D routes, the GR441 pitch and the shared contact band; the pale-green journal surface holds the TikTok card, the race card and the coaching waitlist.

Only Manrope 400/700 is self-hosted as WOFF2 in `src/assets/fonts/`, with its OFL license; the regular face is preloaded.

Only the biography uses overlapping photographs, rotations and soft shadows. The hero name uses entry masks while the portrait fades and rises; fine-pointer depth is confined to the hero visual. Scripts are scheduled by input/viewport events, with no continuous idle loop. Reduced motion cancels entrances and transforms.

## Navigation and responsive behavior

Header: wordmark, six section links with `aria-current` on the active section (project pages mark Projects), contact link to the page’s contact band, FR/EN links to the same page in the other language, theme control. Below 1180px the section links and contact move into a `<details>` menu panel that works without JavaScript and closes on Escape. Theme follows the stored choice, otherwise the system preference. Footer: identity, site map, social links, RSS, developer portfolio, credits disclosure.

At 1000px and below grids drop to two columns or one; at 760px and below headers, splits and timelines stack. The results table scrolls inside its labelled region on narrow screens.

## Asset and source policy

Local WebP landscapes: `auvergne.webp` (Chaîne des Puys), `utlac.webp` (Lake Como) and `vda.webp` (Val d’Aran). They illustrate places, not personal race participation. Preserve the credits disclosure and `/images/trail/SOURCES.md`. The portrait comes from Enzo’s confirmed UTMB profile.

`src/data/trail-results.json` is the dated October 4, 2026 UTMB snapshot. `src/data/trail.ts` holds the GR441 FKT attempt, UTLAC 120K and VDA 160K as 2027 goals, distinct from confirmed registrations. `src/data/trail-social.ts` records the dated TikTok snapshot (EnzoQuiCourt, @enzo_gubbiotti); figures are not live analytics. Journal posts are written by Enzo; never invent race experiences.
