// src/validations/userSchema.ts
import { z } from "zod";

export const userSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(2, "Nome muito curto"),
  email: z.string().email("Email inválido"),
  role: z.enum(["admin", "user"]),
});

export type UserValidation = z.infer<typeof userSchema>;
