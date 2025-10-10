import { Card } from '@/components/ui/card';
import Image from 'next/image';
import customerImg1 from '@/assets/img/become-a-vendor/customer-1.png';
import { Star } from 'lucide-react';

function VendorTestimonialCard() {
  return (
    <Card className='space-y-4 p-6'>
      <div className='bg-muted mx-auto h-16 w-16 overflow-hidden rounded-full'>
        <Image
          src={customerImg1.src}
          alt='Victoria Ventura'
          width={64}
          height={64}
          className='object-cover'
        />
      </div>
      <div className='flex justify-center gap-1'>
        {[...Array(5)].map((_, i) => (
          <Star key={i} className='h-4 w-4 fill-yellow-400 text-yellow-400' />
        ))}
      </div>
      <p className='text-muted-foreground text-center text-sm leading-relaxed'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam...
      </p>
      <div className='text-center'>
        <p className='text-foreground font-semibold'>Victoria Ventura</p>
        <p className='text-muted-foreground text-sm'>Pakistan</p>
      </div>
    </Card>
  );
}

export default VendorTestimonialCard;
