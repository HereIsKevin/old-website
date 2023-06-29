import { defineConfig } from "astro/config"

import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  site: "https://hereiskevin.github.io",
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
  integrations: [sitemap()],
  vite: {
    build: {
      target: "modules",
    },
  },
})
