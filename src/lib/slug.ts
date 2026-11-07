// src/lib/slug.ts
import { z } from "zod";

// A slug is lowercase words joined by single hyphens: "home-and-away".
export const slugSchema = z
  .string()
  .max(80)
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);

export type Slug = z.infer<typeof slugSchema>;
