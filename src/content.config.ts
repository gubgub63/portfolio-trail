import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Journal posts live in `src/content/blog/en/` and `src/content/blog/fr/`.
 * Files starting with `_` (such as the race report template) are ignored.
 */
const blog = defineCollection({
    loader: glob({ pattern: '{en,fr}/**/[^_]*.md', base: './src/content/blog' }),
    schema: z.object({
        title: z.string(),
        description: z.string().max(180),
        date: z.coerce.date(),
        updated: z.coerce.date().optional(),
        category: z.enum(['race-report', 'training', 'gear', 'thoughts']),
        draft: z.boolean().default(false),
        /** Image path inside `public/`, e.g. `/images/blog/utpma-finish.webp`. */
        cover: z.string().optional(),
        coverAlt: z.string().optional(),
        /** Slug of the same post in the other language, if it exists. */
        translation: z.string().optional(),
        race: z
            .object({
                name: z.string(),
                date: z.coerce.date(),
                distanceKm: z.number(),
                elevationM: z.number(),
                time: z.string().optional(),
                rank: z.number().optional(),
                totalRanked: z.number().optional(),
                categoryPlace: z.string().optional(),
                resultsUrl: z.string().url().optional(),
            })
            .optional(),
    }),
});

export const collections = { blog };
