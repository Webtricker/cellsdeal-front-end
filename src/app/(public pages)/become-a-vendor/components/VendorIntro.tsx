import { Button } from '@/components/ui/button';
import img1 from '@/assets/img/become-a-vendor/banner-1.jpg';
import Container from '@/sharedComponets/wrapper/Container';
import Image from 'next/image';

function VendorIntro() {
  return (
    <section className='section-speacing'>
      <Container className='grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12'>
        <div className='space-y-6'>
          <p className='text-primary text-sm font-medium tracking-wide uppercase'>Create a Store</p>
          <h3 className='text-foreground text-4xl leading-tight font-bold md:text-5xl lg:text-6xl'>
            Build your online store on Wolmart
          </h3>
          <p className='text-muted-foreground max-w-lg text-base leading-relaxed md:text-lg'>
            Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Venenatis tellus in metus vulputate eu scelerisque felis.
          </p>
          <Button size='lg' className='font-medium uppercase'>
            Learn More
          </Button>
        </div>
        <div className='relative aspect-[4/3] lg:aspect-auto lg:h-[400px]'>
          <Image
            src={img1.src}
            alt='Person working on laptop'
            fill
            className='rounded-lg object-cover'
          />
        </div>
      </Container>
    </section>
  );
}

export default VendorIntro;
