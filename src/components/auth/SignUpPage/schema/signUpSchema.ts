import { z } from 'zod';

export const signUpSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
  passwordConfirmation: z.string().min(6),
});

export type TSignUpSchema = z.infer<typeof signUpSchema>;

export const signUpSchemaDefaultValues: TSignUpSchema = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordConfirmation: '',
};
