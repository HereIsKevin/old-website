import type { APIRoute } from "astro"
import { getCollection } from "astro:content"

import rss from "@astrojs/rss"

// https://github.com/microsoft/TypeScript/issues/34319
export const get: APIRoute = async ({ site }) =>
  rss({
    title: "Kevin's Blog",
    description: "Thoughts, ideas, and rants from an aspiring developer.",
    site: site!.toString(),
    items: (await getCollection("blog", ({ id }) => !id.startsWith("old/")))
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate,
        link: `/blog/${post.slug}`,
      }))
      .sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf()),
    stylesheet: "/rss/styles.xsl",
  })
