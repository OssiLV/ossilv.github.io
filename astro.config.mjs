// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// https://astro.build/config
export default defineConfig({
  site: 'https://ossilv.github.io',
  markdown: {
    rehypePlugins: [
      rehypeSlug, // Tạo slug tự động cho heading
      [rehypeAutolinkHeadings, { behavior: 'append' }] // Thêm anchor khi hover
    ],
    shikiConfig: {
      wrap: true
    },
  },
  vite: {
    plugins: [tailwindcss()]
  },
});