import * as z from 'zod';

const BANGLADESHI_PHONE_REGEX = /^01[3-9]\d{8}$/;

export const baseRegisterSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  phoneNumber: z
    .string()
    .regex(
      BANGLADESHI_PHONE_REGEX,
      'Invalid Bangladeshi phone number. Must start with 01 and be 11 digits long (e.g., 017XXXXXXXX).'
    ),
  email: z.email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
});
