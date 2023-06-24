import { defineConfig } from "astro/config"

import compress from "astro-compress"
import critters from "astro-critters"

// https://astro.build/config
export default defineConfig({
  integrations: [compress(), critters()],
})
