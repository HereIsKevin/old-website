import type { Config } from "tailwindcss"

import forms from "@tailwindcss/forms"
import typography from "@tailwindcss/typography"

export default {
  content: ["./src/**/*.astro"],
  theme: {
    extend: {},
  },
  plugins: [forms, typography],
} satisfies Config
