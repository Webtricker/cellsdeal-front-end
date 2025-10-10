'use client';
import { brands } from '@/lib/demo-data';
import Container from '@/sharedComponets/wrapper/Container';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

export default function Brands() {
  return (
    <section className='section-bottom-speacing'>
      <Container>
        <div className='cd_rounded-sm bg-white border-y cd_border'>
          <Marquee>
            {brands.map((brand, idx) => (
              <div
                key={idx}
                className='mx-12 flex basis-1/6 items-center justify-center opacity-50 grayscale-100 transition-none duration-300 select-none hover:opacity-100 hover:grayscale-0'
              >
                <Image src={brand?.src} width={100} height={50} alt='brand' />
              </div>
            ))}
          </Marquee>
        </div>
      </Container>
    </section>
  );
}
