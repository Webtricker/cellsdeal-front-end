'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cartDemoData, CartItem } from '@/lib/demo-data';
import { CartCard, CartHeader } from '@/sharedComponets/cards/CartCard';

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(cartDemoData);

  const handleQuantityChange = (id: number, quantity: number) => {
    setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity } : item)));
  };

  const handleRemove = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='mb-8 text-3xl font-bold'>Shopping Cart</h1>

      <div className='grid gap-8 lg:grid-cols-[1fr_400px]'>
        {/* Cart items - Large variant */}
        <div>
          <Card className='p-6'>
            <CartHeader />
            <div className='divide-y'>
              {cartItems.map((item) => (
                <CartCard
                  key={item.id}
                  item={item}
                  variant='default'
                  onQuantityChange={handleQuantityChange}
                  onRemove={handleRemove}
                />
              ))}
            </div>
          </Card>
        </div>

        {/* Cart summary */}
        <div>
          <Card className='p-6'>
            <h2 className='mb-4 text-xl font-semibold'>Cart Summary</h2>
            <div className='space-y-3'>
              <div className='flex justify-between text-sm'>
                <span className='text-muted-foreground'>Subtotal</span>
                <span className='font-medium'>${total.toFixed(2)}</span>
              </div>
              <div className='flex justify-between text-sm'>
                <span className='text-muted-foreground'>Shipping</span>
                <span className='font-medium'>Free</span>
              </div>
              <div className='flex justify-between text-sm'>
                <span className='text-muted-foreground'>Tax</span>
                <span className='font-medium'>${(total * 0.1).toFixed(2)}</span>
              </div>
              <div className='border-t pt-3'>
                <div className='flex justify-between text-lg font-semibold'>
                  <span>Total</span>
                  <span>${(total * 1.1).toFixed(2)}</span>
                </div>
              </div>
            </div>
            <Button className='mt-6 w-full' size='lg'>
              Proceed to Checkout
            </Button>
          </Card>

          {/* Compact variant demo */}
          <Card className='mt-6 p-6'>
            <h3 className='text-muted-foreground mb-4 text-sm font-semibold'>
              Compact Variant Preview
            </h3>
            <div className='space-y-3'>
              {cartItems.slice(0, 2).map((item) => (
                <CartCard
                  key={item.id}
                  item={item}
                  variant='compact'
                  onQuantityChange={handleQuantityChange}
                  onRemove={handleRemove}
                />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
