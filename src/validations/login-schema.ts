import { z } from "zod";

const loginSchema = z.object({
    email: z.string().email({ message: 'Email inválido' }).regex(
                                /^[a-zA-Z0-9._%+-]+@ufpe\.br$/,
                                'O e-mail deve ser da UFPE'
                            ),
    password: z
        .string()
        .min(8, { message: 'Senha deve ter no mínimo 8 caracteres' })
});

type LoginFormValues = z.infer<typeof loginSchema>;

export { loginSchema, type LoginFormValues };