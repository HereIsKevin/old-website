import { defineCollection, z } from "astro:content"

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
})

const egg = defineCollection({
  type: "data",
  schema: z.object({
    config: z.object({
      room: z.string(),
    }),
    rooms: z.record(
      z.string(),
      z
        .object({
          heading: z.string(),
          message: z.string(),
          action: z.string().optional(),
          actions: z.record(z.string(), z.string()).optional(),
        })
        .refine(
          (room) =>
            (room.action && !room.actions) || (!room.action && room.actions),
          "One of 'action' or 'actions' must exist."
        )
    ),
  }),
})

export const collections = { blog, egg }
