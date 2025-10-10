import { Button } from '@/components/ui/button';
import Container from '@/sharedComponets/wrapper/Container';
import Image from 'next/image';
import Link from 'next/link';
import bg from '@/assets/img/become-a-vendor/banner-4.jpg';

function VendorCta() {
  return (
    <section className='relative mb-16 overflow-hidden py-20 md:py-32'>
      <div className='absolute inset-0 bg-gradient-to-r from-gray-500/70 to-gray-300/40'>
        <Image src={bg.src} alt='Background' fill className='object-cover opacity-20' />
      </div>
      <Container className='relative z-10'>
        <div className='mx-auto max-w-3xl space-y-8 text-center'>
          <h2 className='text-3xl leading-tight font-bold text-white md:text-4xl lg:text-5xl'>
            Let{"'"}s talk about how we can make brands work for you
          </h2>
          <Link href='/register' className='inline-block'>
            <Button size='lg' className='hover:bg-accent hover:text-black'>
              Register Now
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default VendorCta;
