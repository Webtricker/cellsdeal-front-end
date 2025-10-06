'use client';
import { PromoBanner } from '@/sharedComponets/banner/PromoBanner';
import Container from '@/sharedComponets/wrapper/Container';
import img1 from '@/assets/img/demo-products/shoe.webp';
import img2 from '@/assets/img/demo-products/speaker.png';

function ProductAdvertise() {
  return (
    <Container className='grid grid-cols-1 gap-4 md:grid-cols-2'>
      <PromoBanner
        label='BEST SELLERS'
        title='New Collection'
        subtitle='Sale up to 30% OFF'
        image={img1.src}
        variant='primary'
        onButtonClick={() => console.log('Shop New Collection')}
      />
      <PromoBanner
        label='THE SELLER OF MONTH'
        title='Bluetooth Speaker'
        subtitle='Sale up to 30% OFF'
        image={img2.src}
        variant='secondary'
        onButtonClick={() => console.log('Shop Bluetooth Speaker')}
      />
    </Container>
  );
}

export default ProductAdvertise;
