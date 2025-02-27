import { z } from 'zod';

export const signUpSchema = z
  .object({
    firstName: z
      .string({ required_error: 'Имя обязательно' })
      .min(1, { message: 'Имя должно быть не менее 1 символа' }),
    lastName: z
      .string({ required_error: 'Фамилия обязательна' })
      .min(1, { message: 'Фамилия должна быть не менее 1 символа' }),
    email: z.string({ required_error: 'Почта обязательна' }).email({ message: 'Неверный формат почты' }),
    password: z
      .string({ required_error: 'Пароль обязателен' })
      .min(6, { message: 'Пароль должен быть не менее 6 символов' }),
    passwordConfirmation: z
      .string({ required_error: 'Подтверждение пароля обязательно' })
      .min(6, { message: 'Подтверждение пароля должно быть не менее 6 символов' }),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    path: ['passwordConfirmation'],
    message: 'Пароли не совпадают',
  });

export type TSignUpSchema = z.infer<typeof signUpSchema>;

export const signUpSchemaDefaultValues: TSignUpSchema = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordConfirmation: '',
};
