// src/schemas/business.schema.ts
import { z } from "zod";
import { slugSchema } from "../lib/slug";

export const priceRangeSchema = z.enum(["low", "medium", "high"]);
export type PriceRange = z.infer<typeof priceRangeSchema>;

export const businessSchema = z.object({
  id: z.number().int().positive(),
  slug: slugSchema,
  name: z.string().min(1),
  category: z.object({ name: z.string().min(1), slug: slugSchema }),
  area: z.string().min(1),
  address: z.string().min(1),
  phone: z.string().min(1),
  priceRange: priceRangeSchema.nullable(), // null = not given
  ratingAverage: z.number().min(0).max(5).nullable(), // null = no reviews yet
  reviewCount: z.number().int().min(0),
  isSample: z.boolean(),
});
export type Business = z.infer<typeof businessSchema>;

export const businessesResponseSchema = z.object({
  data: z.array(businessSchema),
});

// What the visitor is looking for. It lives in the address bar: /search?category=pharmacies&q=uselu
export const businessSearchSchema = z.object({
  category: slugSchema.optional(),
  q: z.string().trim().max(100).optional(),
});
export type BusinessSearch = z.infer<typeof businessSearchSchema>;

// The address bar is untrusted input, so validate it. Each field is checked on its own:
// one bad value is dropped and the good ones are kept.
export function parseBusinessSearch(params: URLSearchParams): BusinessSearch {
  const category = businessSearchSchema.shape.category.safeParse(
    params.get("category") ?? undefined,
  );
  const q = businessSearchSchema.shape.q.safeParse(
    params.get("q") ?? undefined,
  );
  return {
    category: category.success ? category.data : undefined,
    q: q.success ? q.data : undefined,
  };
}
