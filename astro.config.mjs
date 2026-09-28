// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages のプロジェクトサイトとして公開する（https://sand639.github.io/portfolio/）
export default defineConfig({
  site: 'https://sand639.github.io',
  base: '/portfolio',
  trailingSlash: 'always',
});
