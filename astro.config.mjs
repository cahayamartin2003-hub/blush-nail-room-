import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://blushnailroom.co.uk',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
