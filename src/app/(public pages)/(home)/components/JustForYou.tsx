'use client';
import { accessoriesData } from '@/lib/demo-data';
import { ProductCard } from '@/sharedComponets/cards/ProductCard';
import { ProductSliderSection } from '@/sharedComponets/slider/ProductSliderSection';
import Container from '@/sharedComponets/wrapper/Container';

function JustForYou() {
  return (
    <Container className='py-8'>
      <ProductSliderSection title='Sale Products' data={accessoriesData} slidesPerView={5} rows={2}>
        {(product) => (
          <ProductCard
            variant='default'
            product={product}
            onCompare={() => console.log('Compare:', product.name)}
            onQuickView={() => console.log('Quick view:', product.name)}
            onSelectOptions={() => console.log('Select options:', product.name)}
          />
        )}
      </ProductSliderSection>
    </Container>
  );
}

export default JustForYou;
