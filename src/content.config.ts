import { defineCollection } from "astro:content";
import { z } from "astro:schema";

const resources = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(),
  }),
});

export const collections = {
  resources,
};
