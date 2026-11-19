// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// `site` and `base` are overridden by the GitHub Pages workflow (--site / --base).
// https://astro.build/config
export default defineConfig({
    site: 'https://gubgub63.github.io',
    devToolbar: { enabled: false },
    integrations: [
        sitemap({
            i18n: { defaultLocale: 'fr', locales: { en: 'en-GB', fr: 'fr-FR' } },
        }),
    ],
    vite: {
        plugins: [tailwindcss()],
    },
});
