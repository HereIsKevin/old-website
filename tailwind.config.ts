import type { Config } from "tailwindcss"

import forms from "@tailwindcss/forms"
import typography from "@tailwindcss/typography"

export default {
  content: ["./src/**/*.{astro,svelte}"],
  theme: {
    fontFamily: {
      sans: ["Lato", "sans-serif"],
      mono: ['"JetBrains Mono"', "monospace"],
    },
  },
  plugins: [forms, typography],
} satisfies Config
