'use client';

import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { userSchema } from '@/schema/userSchema';
import { sellerSchema } from '@/schema/sellerSchema';
import { Button } from '@/components/ui/button';

type UserFormValues = z.infer<typeof userSchema>;
type SellerFormValues = z.infer<typeof sellerSchema>;

function RegisterForm() {
  const [registrationType, setRegistrationType] = useState<'user' | 'seller'>('user');

  const form = useForm<UserFormValues | SellerFormValues>({
    resolver: zodResolver(registrationType === 'user' ? userSchema : sellerSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      password: '',
      confirmPassword: '',
      ...(registrationType === 'seller' && {
        paymentMethod: undefined,
        bkashNumber: '',
        bankAccountNumber: '',
        bankName: '',
      }),
    },
  });

  const paymentMethod = form.watch('paymentMethod' as any);

  const handleRegistrationTypeChange = (type: 'user' | 'seller') => {
    setRegistrationType(type);
    form.reset();
  };

  const onSubmit = (data: UserFormValues | SellerFormValues) => {
    console.log('Registration data:', data);
    // Handle registration logic here
  };
  return (
    <>
      <div className='bg-muted mb-6 flex gap-4 rounded-lg p-1'>
        <Button
          type='button'
          variant={registrationType === 'user' ? 'default' : 'ghost'}
          className='flex-1'
          onClick={() => handleRegistrationTypeChange('user')}
        >
          User Registration
        </Button>
        <Button
          type='button'
          variant={registrationType === 'seller' ? 'default' : 'ghost'}
          className='flex-1'
          onClick={() => handleRegistrationTypeChange('seller')}
        >
          Seller Registration
        </Button>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <FormField
              control={form.control}
              name='firstName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder='First Name' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='lastName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder='Last Name' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name='phoneNumber'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder='0123456789' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type='email' placeholder='email@example.com' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type='password' placeholder='••••••••' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='confirmPassword'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input type='password' placeholder='••••••••' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {registrationType === 'seller' && (
            <div className='space-y-4 border-t pt-4'>
              <h3 className='text-lg font-semibold'>Payment Information</h3>

              <FormField
                control={form.control}
                name='paymentMethod'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Payment Method</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        className='flex gap-4'
                      >
                        <div className='flex items-center space-x-2'>
                          <RadioGroupItem value='bkash' id='bkash' />
                          <Label htmlFor='bkash' className='cursor-pointer'>
                            bKash
                          </Label>
                        </div>
                        <div className='flex items-center space-x-2'>
                          <RadioGroupItem value='bank' id='bank' />
                          <Label htmlFor='bank' className='cursor-pointer'>
                            Bank Account
                          </Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {paymentMethod === 'bkash' && (
                <FormField
                  control={form.control}
                  name='bkashNumber'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>bKash Account Number</FormLabel>
                      <FormControl>
                        <Input placeholder='01712345678' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              {paymentMethod === 'bank' && (
                <div className='space-y-4'>
                  <FormField
                    control={form.control}
                    name='bankName'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bank Name</FormLabel>
                        <FormControl>
                          <Input placeholder='e.g., Dutch Bangla Bank' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name='bankAccountNumber'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bank Account Number</FormLabel>
                        <FormControl>
                          <Input placeholder='1234567890123' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}
            </div>
          )}

          <Button type='submit' className='w-full' size='lg'>
            {registrationType === 'user' ? 'Create User Account' : 'Create Seller Account'}
          </Button>
        </form>
      </Form>
    </>
  );
}

export default RegisterForm;
