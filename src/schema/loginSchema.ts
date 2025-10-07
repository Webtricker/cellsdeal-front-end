import * as z from 'zod';

const BANGLADESHI_PHONE_REGEX = /^01[3-9]\d{8}$/;

export const loginSchema = z.object({
  emailOrPhone: z
    .string()
    .min(1, 'Email or phone number is required')
    .refine(
      (value) => {
        // Check if it's a valid email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Check if it's a valid phone number
        const phoneRegex = BANGLADESHI_PHONE_REGEX;
        return emailRegex.test(value) || phoneRegex.test(value);
      },
      {
        message: 'Please enter a valid email or phone number',
      }
    ),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});
