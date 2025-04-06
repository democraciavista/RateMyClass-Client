import { z } from "zod";

const resetPasswordSchema = z.object({
    email: z
        .string()
        .email({ message: 'Email inválido' })
        .regex(/^[a-zA-Z0-9._%+-]+@ufpe\.br$/, 'O e-mail deve ser da UFPE')
});

type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;

export { resetPasswordSchema, type ResetPasswordFormValues };