import { defineCollection, z } from "astro:content";

const articles = defineCollection({
schema: z.object({
  title: z.string(),
  description: z.string(),
  publishDate: z.date(),
  updatedDate: z.date().optional(),
  author: z.string(),
  category: z.string(),
  level: z.string(),
  readingTime: z.string(),
  hero: z.string(),
  tags: z.array(z.string()).default([]),
  relatedDiagram: z.string().optional(),
  draft: z.boolean().default(false),
}),
});

export const collections = {
  articles,
};