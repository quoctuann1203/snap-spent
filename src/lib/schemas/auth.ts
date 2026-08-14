import { z } from 'zod';

export const loginSchema = z.object({
  name: z.string().optional(),
  email: z.string().min(1, 'Vui lòng nhập email').email('Email không hợp lệ'),
  password: z.string().min(6, 'Mật khẩu tối thiểu 6 ký tự'),
});

export const signupSchema = loginSchema.extend({
  name: z.string().min(1, 'Vui lòng nhập họ tên'),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
export type SignupFormValues = z.infer<typeof signupSchema>;
