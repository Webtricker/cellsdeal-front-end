'use client';

import { useState } from 'react';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { bangladeshiZillas, cartDemoData } from '@/lib/demo-data';
import { checkoutSchema } from '@/schema/checkoutSchema';

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

function CheckoutForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      companyName: '',
      streetAddress: '',
      apartment: '',
      city: '',
      zilla: '',
      zipCode: '',
      phone: '',
      email: '',
      paymentMethod: 'cash',
    },
  });

  const onSubmit = async (data: CheckoutFormValues) => {
    setIsSubmitting(true);
    console.log('[v0] Checkout form submitted:', data);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    alert('Order placed successfully!');
  };

  const subtotal = cartDemoData.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal;

  return (
    <div className='grid gap-8 lg:grid-cols-[1fr_400px]'>
      {/* Left Column - Billing Details Form */}
      <div>
        <h2 className='mb-6 !text-2xl font-bold'>BILLING DETAILS</h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            {/* Name Fields */}
            <div className='grid gap-4 sm:grid-cols-2'>
              <FormField
                control={form.control}
                name='firstName'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      First name <span className='text-destructive'>*</span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
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
                    <FormLabel>
                      Last name <span className='text-destructive'>*</span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Company Name */}
            <FormField
              control={form.control}
              name='companyName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company name (optional)</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Country - Fixed to Bangladesh */}
            <div>
              <FormLabel>
                Country / Region <span className='text-destructive'>*</span>
              </FormLabel>
              <div className='border-input bg-muted/50 mt-2 flex h-9 items-center rounded-md border px-3 text-sm'>
                Bangladesh
              </div>
            </div>

            {/* Street Address */}
            <FormField
              control={form.control}
              name='streetAddress'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Street address <span className='text-destructive'>*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder='House number and street name' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Apartment */}
            <FormField
              control={form.control}
              name='apartment'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Apartment, suite, unit, etc. (optional)</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* City and Zilla */}
            <div className='grid gap-4 sm:grid-cols-2'>
              <FormField
                control={form.control}
                name='city'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Town / City <span className='text-destructive'>*</span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='zilla'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Zilla <span className='text-destructive'>*</span>
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className='w-full'>
                          <SelectValue placeholder='Select a zilla' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {bangladeshiZillas.map((zilla) => (
                          <SelectItem key={zilla} value={zilla}>
                            {zilla}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* ZIP Code and Phone */}
            <div className='grid gap-4 sm:grid-cols-2'>
              <FormField
                control={form.control}
                name='zipCode'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      ZIP Code <span className='text-destructive'>*</span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='phone'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Phone <span className='text-destructive'>*</span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Email */}
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Email address <span className='text-destructive'>*</span>
                  </FormLabel>
                  <FormControl>
                    <Input type='email' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit button for mobile */}
            <div className='lg:hidden'>
              <Button type='submit' className='w-full' size='lg' disabled={isSubmitting}>
                {isSubmitting ? 'PLACING ORDER...' : 'PLACE ORDER'}
              </Button>
            </div>
          </form>
        </Form>
      </div>

      {/* Right Column - Order Summary */}
      <div className='lg:sticky lg:top-8 lg:h-fit'>
        <div className='bg-card rounded-lg border p-6'>
          <h2 className='mb-6 !text-xl font-bold'>YOUR ORDER</h2>

          {/* Product List */}
          <div className='space-y-4 border-b pb-4'>
            <div className='flex items-center justify-between text-sm font-medium'>
              <span>Product</span>
              <span>Subtotal</span>
            </div>

            {cartDemoData.map((item) => (
              <div key={item.id} className='space-y-1'>
                <div className='flex items-start justify-between gap-4 text-sm'>
                  <div className='flex-1'>
                    <p className='font-medium'>
                      {item.name} × {item.quantity}
                    </p>
                    <p className='text-muted-foreground text-xs'>Vendor: {item.vendor}</p>
                  </div>
                  <span className='font-medium'>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Subtotal */}
          <div className='flex items-center justify-between border-b py-4 text-sm'>
            <span className='font-medium'>Subtotal</span>
            <span className='font-bold'>${subtotal.toFixed(2)}</span>
          </div>

          {/* Total */}
          <div className='flex items-center justify-between border-b py-4'>
            <span className='text-lg font-bold'>Total</span>
            <span className='text-lg font-bold'>${total.toFixed(2)}</span>
          </div>

          {/* Payment Methods */}
          <div className='mt-6'>
            <h4 className='mb-4 font-semibold'>Payment Methods</h4>

            <Form {...form}>
              <FormField
                control={form.control}
                name='paymentMethod'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className='space-y-4'
                      >
                        {/* bKash */}
                        <div className='flex items-start space-x-3'>
                          <RadioGroupItem value='bkash' id='bkash' />
                          <div className='flex-1'>
                            <label
                              htmlFor='bkash'
                              className='cursor-pointer text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                            >
                              bKash
                            </label>
                          </div>
                        </div>

                        {/* Bank Transfer */}
                        <div className='flex items-start space-x-3'>
                          <RadioGroupItem value='bank' id='bank' />
                          <div className='flex-1'>
                            <label
                              htmlFor='bank'
                              className='cursor-pointer text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                            >
                              Direct bank transfer
                            </label>
                          </div>
                        </div>

                        {/* Cash on Delivery */}
                        <div className='flex items-start space-x-3'>
                          <RadioGroupItem value='cash' id='cash' />
                          <div className='flex-1'>
                            <label
                              htmlFor='cash'
                              className='cursor-pointer text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                            >
                              Cash on delivery
                            </label>
                          </div>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Form>
          </div>

          {/* Place Order Button - Desktop */}
          <div className='mt-6 hidden lg:block'>
            <Button
              onClick={form.handleSubmit(onSubmit)}
              className='w-full'
              size='lg'
              disabled={isSubmitting}
            >
              {isSubmitting ? 'PLACING ORDER...' : 'PLACE ORDER'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutForm;
