import * as z from 'zod';
import { baseRegisterSchema } from './baseRegisterSchema';

export const sellerSchema = baseRegisterSchema
  .extend({
    paymentMethod: z
      .enum(['bkash', 'bank'])
      .refine((val) => val, { message: 'Please select a payment method' }),
    bkashNumber: z.string().optional(),
    bankAccountNumber: z.string().optional(),
    bankName: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })
  .refine(
    (data) => {
      if (data.paymentMethod === 'bkash') {
        return !!data.bkashNumber && /^[0-9]{11}$/.test(data.bkashNumber);
      }
      return true;
    },
    {
      message: 'bKash number must be 11 digits',
      path: ['bkashNumber'],
    }
  )
  .refine(
    (data) => {
      if (data.paymentMethod === 'bank') {
        return !!data.bankAccountNumber && !!data.bankName;
      }
      return true;
    },
    {
      message: 'Bank account number is required',
      path: ['bankAccountNumber'],
    }
  );
