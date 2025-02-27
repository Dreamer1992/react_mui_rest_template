import { z } from 'zod';

export const signInSchema = z.object({
  email: z.string({ required_error: 'Почта обязательна' }).email({ message: 'Неверный формат почты' }),
  password: z
    .string({ required_error: 'Пароль обязателен' })
    .min(6, { message: 'Пароль должен быть не менее 6 символов' }),
});

export type TSignInSchema = z.infer<typeof signInSchema>;

export const signInSchemaDefaultValues: TSignInSchema = {
  email: '',
  password: '',
};
