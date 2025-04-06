import { z } from 'zod';

const tokenSchema = z.object({
    token: z.string().min(1, { message: 'Token inválido' })
});

type tokenSchemaFormValues = z.infer<typeof tokenSchema>;

export { tokenSchema, type tokenSchemaFormValues };
