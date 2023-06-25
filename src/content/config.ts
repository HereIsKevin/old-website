import { defineCollection, z } from "astro:content"

const egg = defineCollection({
  type: "data",
  schema: z.object({
    config: z.object({
      room: z.string(),
    }),
    rooms: z.record(
      z.string(),
      z.object({
        title: z.string(),
        message: z.string(),
        action: z.string().optional(),
        actions: z.record(z.string(), z.string()).optional(),
      })
    ),
  }),
})

export const collections = { egg }
