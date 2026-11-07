import { z } from "zod";

// One category. Slug: lowercase letters/digits, words joined by single hyphens.
export const categorySchema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(1),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
});

// The list response envelope: { data: [...] }
export const categoriesResponseSchema = z.object({
  data: z.array(categorySchema),
});

// The type comes FROM the schema, so they can never disagree.
export type Category = z.infer<typeof categorySchema>;
