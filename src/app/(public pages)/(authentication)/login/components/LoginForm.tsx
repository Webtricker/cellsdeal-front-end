'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { loginSchema } from '@/schema/loginSchema';

type LoginFormValues = z.infer<typeof loginSchema>;
function LoginForm() {
  const [loginType, setLoginType] = useState<'user' | 'seller'>('user');

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      emailOrPhone: '',
      password: '',
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log('Login data:', { ...data, loginType });
    // Handle login logic here
  };

  return (
    <>
      {/* Toggle between User and Seller */}
      <div className='bg-muted mb-6 flex gap-4 rounded-lg p-1'>
        <Button
          type='button'
          variant={loginType === 'user' ? 'default' : 'outline'}
          className='flex-1'
          onClick={() => setLoginType('user')}
        >
          User Login
        </Button>
        <Button
          type='button'
          variant={loginType === 'seller' ? 'default' : 'outline'}
          className='flex-1'
          onClick={() => setLoginType('seller')}
        >
          Seller Login
        </Button>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
          <FormField
            control={form.control}
            name='emailOrPhone'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email or Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder='Enter your email or phone number' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type='password' placeholder='Enter your password' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className='flex items-center justify-between'>
            <Link href='/forgot-password' className='text-primary text-sm hover:underline'>
              Forgot password?
            </Link>
          </div>

          <Button type='submit' className='w-full'>
            Sign In
          </Button>

          <div className='text-muted-foreground text-center text-sm'>
            Don{"'"}t have an account?{' '}
            <Link href='/register' className='text-primary hover:underline'>
              Register
            </Link>
          </div>
        </form>
      </Form>
    </>
  );
}

export default LoginForm;
