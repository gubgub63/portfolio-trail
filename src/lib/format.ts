import type { Lang } from './routes';

const locale = (lang: Lang) => (lang === 'fr' ? 'fr-FR' : 'en-GB');

export function formatDate(date: string | Date, lang: Lang, month: 'short' | 'long' = 'short') {
    return new Intl.DateTimeFormat(locale(lang), {
        day: 'numeric',
        month,
        year: 'numeric',
        timeZone: 'UTC',
    }).format(new Date(date));
}

export function formatNumber(value: number, lang: Lang) {
    return new Intl.NumberFormat(locale(lang)).format(value);
}

/** Category placings are stored in English ordinals ("1st", "2nd"). */
export function formatPlacing(place: string, lang: Lang) {
    return lang === 'fr' ? ({ '1st': '1er', '2nd': '2e', '3rd': '3e' }[place] ?? place) : place;
}

export function readingMinutes(text = '') {
    return Math.max(1, Math.round(text.split(/\s+/).filter(Boolean).length / 220));
}
