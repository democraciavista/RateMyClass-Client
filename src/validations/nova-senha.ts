import { z } from 'zod';

const novaSenhaSchema = z
    .object({
        token: z.string().min(1, { message: 'Token inválido' }),
        newPassword: z
            .string()
            .min(8, { message: 'Senha deve ter no mínimo 8 caracteres' }),
        confirmPassword: z
            .string()
            .min(8, { message: 'Senha deve ter no mínimo 8 caracteres' })
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
        path: ['confirmPassword'],
        message: 'As senhas não coincidem'
    });

type NovaSenhaFormValues = z.infer<typeof novaSenhaSchema>;

export { novaSenhaSchema, type NovaSenhaFormValues };
