import { defineConfig, sharpImageService } from "astro/config"

import sitemap from "@astrojs/sitemap"
import svelte from "@astrojs/svelte"
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
  integrations: [
    sitemap(),
    svelte(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  vite: {
    build: {
      target: "modules",
    },
  },
  experimental: {
    assets: true,
  },
})
