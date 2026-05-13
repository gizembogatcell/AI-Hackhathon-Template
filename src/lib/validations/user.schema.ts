import { z } from "zod";

export const upsertUserSchema = z.object({
  displayName: z.string().min(1).max(120).nullable().optional(),
  photoURL: z.string().url().nullable().optional(),
});

export type UpsertUserInput = z.infer<typeof upsertUserSchema>;
