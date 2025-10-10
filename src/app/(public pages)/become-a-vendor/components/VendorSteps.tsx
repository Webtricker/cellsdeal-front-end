import { Package, ShoppingCart, Truck, DollarSign } from 'lucide-react';
import Container from '@/sharedComponets/wrapper/Container';
import img2 from '@/assets/img/become-a-vendor/banner-2.jpg';
import Image from 'next/image';

function VendorSteps() {
  return (
    <section className='bg-muted/30 py-12 md:py-20'>
      <Container className='grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12'>
        <div className='relative order-2 aspect-[4/3] lg:order-1 lg:aspect-auto lg:h-[400px]'>
          <Image
            src={img2.src}
            alt='Business collaboration'
            fill
            className='rounded-lg object-cover'
          />
        </div>
        <div className='order-1 space-y-6 lg:order-2'>
          <p className='text-primary text-sm font-medium tracking-wide uppercase'>How to Trade</p>
          <h2 className='text-foreground text-3xl leading-tight font-bold md:text-4xl lg:text-5xl'>
            Easy 4 steps to manage your products selling
          </h2>
          <p className='text-muted-foreground text-base leading-relaxed'>
            Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Venen atis.
          </p>
          <div className='grid grid-cols-1 gap-6 pt-4 sm:grid-cols-2'>
            <div className='flex gap-3'>
              <div className='flex-shrink-0'>
                <div className='bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg'>
                  <Package className='text-primary h-5 w-5' />
                </div>
              </div>
              <div>
                <h6 className='mb-1 font-semibold'>Register and List Your Products</h6>
              </div>
            </div>
            <div className='flex gap-3'>
              <div className='flex-shrink-0'>
                <div className='bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg'>
                  <ShoppingCart className='text-primary h-5 w-5' />
                </div>
              </div>
              <div>
                <h6 className='mb-1 font-semibold'>Start Selling Your Products</h6>
              </div>
            </div>
            <div className='flex gap-3'>
              <div className='flex-shrink-0'>
                <div className='bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg'>
                  <Truck className='text-primary h-5 w-5' />
                </div>
              </div>
              <div>
                <h6 className='mb-1 font-semibold'>Deliver your Products Everywhere</h6>
              </div>
            </div>
            <div className='flex gap-3'>
              <div className='flex-shrink-0'>
                <div className='bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg'>
                  <DollarSign className='text-primary h-5 w-5' />
                </div>
              </div>
              <div>
                <h6 className='mb-1 font-semibold'>Get Payments and Increase your Income</h6>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default VendorSteps;
