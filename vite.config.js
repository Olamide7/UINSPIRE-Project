import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about/index.html'),
        services: resolve(__dirname, 'services/index.html'),
        projects: resolve(__dirname, 'projects/index.html'),
        team: resolve(__dirname, 'team/index.html'),
        blog: resolve(__dirname, 'blog/index.html'),
        careers: resolve(__dirname, 'careers/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
        faq: resolve(__dirname, 'faq/index.html'),
        testimonials: resolve(__dirname, 'testimonials/index.html'),
        privacy: resolve(__dirname, 'privacy/index.html'),
        terms: resolve(__dirname, 'terms/index.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
