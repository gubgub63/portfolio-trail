import { sitePath } from './paths';

export type Lang = 'en' | 'fr';

/** Every page of the site, with its French (default, at the root) and English path. */
export const routes = {
    home: { fr: '/', en: '/en/' },
    about: { fr: '/a-propos/', en: '/en/about/' },
    projects: { fr: '/projets/', en: '/en/projects/' },
    gr441: { fr: '/projets/gr441/', en: '/en/projects/gr441/' },
    utlac: { fr: '/projets/utlac/', en: '/en/projects/utlac/' },
    vda: { fr: '/projets/vda/', en: '/en/projects/vda/' },
    results: { fr: '/resultats/', en: '/en/results/' },
    blog: { fr: '/blog/', en: '/en/blog/' },
    partnerships: { fr: '/partenariats/', en: '/en/partnerships/' },
    coaching: { fr: '/coaching/', en: '/en/coaching/' },
} as const;

export type RouteKey = keyof typeof routes;
export type Alternates = Record<Lang, string>;

/** Site path (with deployment base) of a page in a language. */
export function href(key: RouteKey, lang: Lang): string {
    return sitePath(routes[key][lang]);
}

export function blogPostPath(slug: string, lang: Lang): string {
    return `${routes.blog[lang]}${slug}/`;
}

/** Navigation section highlighted for each page. */
export const navSection: Partial<Record<RouteKey, RouteKey>> = {
    gr441: 'projects',
    utlac: 'projects',
    vda: 'projects',
};
