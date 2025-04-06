import { z } from 'zod';

const registerSchema = z.object({
    email: z
        .string()
        .email({ message: 'Email inválido' })
        .regex(/^[a-zA-Z0-9._%+-]+@ufpe\.br$/, 'O e-mail deve ser da UFPE'),
    password: z
        .string()
        .min(8, { message: 'Senha deve ter no mínimo 8 caracteres' }),
    course: z.string().min(1, { message: 'Curso é obrigatório' })
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export { registerSchema, type RegisterFormValues };