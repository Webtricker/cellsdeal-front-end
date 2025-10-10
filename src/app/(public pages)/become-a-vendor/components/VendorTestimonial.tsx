import Container from '@/sharedComponets/wrapper/Container';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import VendorTestimonialCard from '@/sharedComponets/cards/VendorTestimonialCard';

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
              <VendorTestimonialCard />
              <VendorTestimonialCard />
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
