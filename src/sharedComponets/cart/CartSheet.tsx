'use client';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ShoppingCart } from 'lucide-react';
import { CartCard } from '../cards/CartCard';
import { cartDemoData, CartItem } from '@/lib/demo-data';
import { useState } from 'react';
import Link from 'next/link';

export function CartSheet() {
  const [cartItems, setCartItems] = useState<CartItem[]>(cartDemoData);

  const handleQuantityChange = (id: number, quantity: number) => {
    setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity } : item)));
  };

  const handleRemove = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <ShoppingCart className='h-5 w-5 cursor-pointer' />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className='cd-border-primary border-b pb-2'>
          <SheetTitle className='!text-xl font-semibold'>Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className='mt-4 space-y-4'>
          {cartItems.map((item) => (
            <CartCard
              key={item.id}
              item={item}
              variant='compact'
              onQuantityChange={handleQuantityChange}
              onRemove={handleRemove}
            />
          ))}
        </div>
        <SheetFooter className='cd-border-primary mt-4 grid grid-cols-2 gap-2 border-t pt-4'>
          <SheetClose asChild>
            <Link href={'/cart'} className='block'>
              <Button variant={'outline'} className='w-full'>
                View Cart
              </Button>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Button>Checkout</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
