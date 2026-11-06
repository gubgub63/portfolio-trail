import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from './routes';

export type Post = CollectionEntry<'blog'>;

/** `fr/utpma-2026` → `utpma-2026` */
export const postSlug = (post: Post) => post.id.replace(/^(en|fr)\//, '');
export const postLang = (post: Post): Lang => (post.id.startsWith('fr/') ? 'fr' : 'en');

/** Published posts of one language, newest first. Drafts only show in development. */
export async function getPosts(lang: Lang): Promise<Post[]> {
    const posts = await getCollection(
        'blog',
        (post) => postLang(post) === lang && (import.meta.env.DEV || !post.data.draft),
    );
    return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
