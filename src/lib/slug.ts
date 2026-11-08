import { z } from "zod";

export const slugSchema = z
  .string()
  .max(80)
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);

export type Slug = z.infer<typeof slugSchema>;
