import { defineConfig, sharpImageService } from "astro/config"

import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  site: "https://hereiskevin.github.io",
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
  image: {
    service: sharpImageService(),
  },
  integrations: [sitemap(), tailwind()],
  vite: {
    build: {
      target: "modules",
    },
  },
  experimental: {
    assets: true,
  },
})
