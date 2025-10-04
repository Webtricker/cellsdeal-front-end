'use client';

import { laptopsData } from '@/lib/demo-data';
import { ProductCard } from '@/sharedComponets/cards/ProductCard';
import { ProductSliderSection } from '@/sharedComponets/DOM/ProductSliderSection';
import Container from '@/sharedComponets/wrapper/Container';

function SalesProducts() {
  return (
    <Container>
      <ProductSliderSection title='Sale Products' data={laptopsData} slidesPerView={5} rows={1}>
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

export default SalesProducts;
