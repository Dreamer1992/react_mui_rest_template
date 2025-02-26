import { z } from 'zod';

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type TSignInSchema = z.infer<typeof signInSchema>;

export const signInSchemaDefaultValues: TSignInSchema = {
  email: '',
  password: '',
};
