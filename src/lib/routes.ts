import { sitePath } from './paths';

export type Lang = 'en' | 'fr';

/** Every page of the site, with its English and French path. */
export const routes = {
    home: { en: '/', fr: '/fr/' },
    about: { en: '/about/', fr: '/fr/a-propos/' },
    projects: { en: '/projects/', fr: '/fr/projets/' },
    gr441: { en: '/projects/gr441/', fr: '/fr/projets/gr441/' },
    utlac: { en: '/projects/utlac/', fr: '/fr/projets/utlac/' },
    vda: { en: '/projects/vda/', fr: '/fr/projets/vda/' },
    results: { en: '/results/', fr: '/fr/resultats/' },
    blog: { en: '/blog/', fr: '/fr/blog/' },
    partnerships: { en: '/partnerships/', fr: '/fr/partenariats/' },
    coaching: { en: '/coaching/', fr: '/fr/coaching/' },
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
