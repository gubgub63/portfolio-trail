import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { siteCopy } from '../../data/site-copy';
import { getPosts, postSlug } from '../../lib/blog';
import { sitePath } from '../../lib/paths';
import { blogPostPath } from '../../lib/routes';

export async function GET(context: APIContext) {
    const posts = await getPosts('fr');
    const copy = siteCopy.fr.blog;
    return rss({
        title: copy.title,
        description: copy.description,
        site: new URL(sitePath('/'), context.site ?? context.url).href,
        items: posts.map((post) => ({
            title: post.data.title,
            description: post.data.description,
            pubDate: post.data.date,
            link: sitePath(blogPostPath(postSlug(post), 'fr')),
        })),
        customData: '<language>fr</language>',
    });
}
