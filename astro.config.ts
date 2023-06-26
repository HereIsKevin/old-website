import { defineConfig } from "astro/config"

export default defineConfig({
  site: "https://hereiskevin.github.io",
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
  vite: {
    build: {
      assetsInlineLimit: 2048,
    },
  },
})
