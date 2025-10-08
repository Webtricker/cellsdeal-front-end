import * as z from 'zod';

export const checkoutSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  companyName: z.string().optional(),
  streetAddress: z.string().min(5, 'Street address is required'),
  apartment: z.string().optional(),
  city: z.string().min(2, 'City is required'),
  zilla: z.string().min(1, 'Please select a zilla'),
  zipCode: z.string().min(4, 'ZIP code is required'),
  phone: z
    .string()
    .min(11, 'Phone number must be at least 11 digits')
    .regex(/^[0-9+\-\s()]+$/, 'Invalid phone number format'),
  email: z.string().email('Invalid email address'),
  paymentMethod: z
    .enum(['bkash', 'bank', 'cash'])
    .refine((val) => val, { message: 'Please select a payment method' }),
});
