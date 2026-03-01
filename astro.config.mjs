// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://gosqo.com',
  integrations: [sitemap()],
  redirects: {
    '/privacy': '/resources/privacy-policy',
    '/changelog': '/resources/changelog',
    '/help': '/resources/help-center',
  },
});
