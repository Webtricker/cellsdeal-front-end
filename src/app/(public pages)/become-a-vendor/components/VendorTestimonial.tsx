import { Card } from '@/components/ui/card';
import Container from '@/sharedComponets/wrapper/Container';
import { ArrowRight, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import customerImg1 from '@/assets/img/become-a-vendor/customer-1.png';
import customerImg2 from '@/assets/img/become-a-vendor/customer-2.png';

function VendorTestimonial() {
  return (
    <section className='bg-muted/30 py-12 md:py-20'>
      <Container>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12'>
          <div className='space-y-6'>
            <p className='text-primary text-sm font-medium tracking-wide uppercase'>
              What they say
            </p>
            <h2 className='text-foreground text-3xl leading-tight font-bold md:text-4xl'>
              Success stories from Wolmart sellers
            </h2>
            <p className='text-muted-foreground leading-relaxed'>
              Lorem ipsum dolor sit amet, consectetur adipiscing hendrerit. Pellentesque nunc non
              turpis sed dolor sit dolor sit amet nisi dignissim.
            </p>
            <Link
              href='#'
              className='text-primary inline-flex items-center gap-2 font-medium transition-all hover:gap-3'
            >
              VISIT VENDORS <ArrowRight className='h-4 w-4' />
            </Link>
          </div>
          <div className='lg:col-span-2'>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
                </p>
                <div className='text-center'>
                  <p className='text-foreground font-semibold'>Victoria Ventura</p>
                  <p className='text-muted-foreground text-sm'>Pakistan</p>
                </div>
              </Card>
              <Card className='space-y-4 p-6'>
                <div className='bg-muted mx-auto h-16 w-16 overflow-hidden rounded-full'>
                  <Image
                    src={customerImg2.src}
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
                </p>
                <div className='text-center'>
                  <p className='text-foreground font-semibold'>Victoria Ventura</p>
                  <p className='text-muted-foreground text-sm'>Pakistan</p>
                </div>
              </Card>
            </div>
            <div className='mt-6 flex justify-center gap-2'>
              <div className='bg-primary h-2 w-2 rounded-full'></div>
              <div className='bg-muted-foreground/30 h-2 w-2 rounded-full'></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default VendorTestimonial;
