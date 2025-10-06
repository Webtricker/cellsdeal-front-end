'use client';

import { camerasData, laptopsData } from '@/lib/demo-data';
import { ProductCard } from '@/sharedComponets/cards/ProductCard';
import { ProductSliderSection } from '@/sharedComponets/slider/ProductSliderSection';
import Container from '@/sharedComponets/wrapper/Container';

function MultipleInterests() {
  return (
    <Container className='grid grid-cols-3 gap-4 py-8'>
      <ProductSliderSection
        title='Popular Departments'
        data={laptopsData}
        slidesPerView={3}
        rows={1}
      >
        {(product) => (
          <ProductCard
            variant='compact'
            product={product}
            onCompare={() => console.log('Compare:', product.name)}
            onQuickView={() => console.log('Quick view:', product.name)}
            onSelectOptions={() => console.log('Select options:', product.name)}
          />
        )}
      </ProductSliderSection>
      <ProductSliderSection title='New Arrivals' data={camerasData} slidesPerView={3} rows={1}>
        {(product) => (
          <ProductCard
            variant='compact'
            product={product}
            onCompare={() => console.log('Compare:', product.name)}
            onQuickView={() => console.log('Quick view:', product.name)}
            onSelectOptions={() => console.log('Select options:', product.name)}
          />
        )}
      </ProductSliderSection>
      <ProductSliderSection title='Top Rankings' data={laptopsData} slidesPerView={3} rows={1}>
        {(product) => (
          <ProductCard
            variant='compact'
            product={product}
            onCompare={() => console.log('Compare:', product.name)}
            onQuickView={() => console.log('Quick view:', product.name)}
            onSelectOptions={() => console.log('Select options:', product.name)}
          />
        )}
      </ProductSliderSection>
      <ProductSliderSection title='Best Sellers' data={laptopsData} slidesPerView={3} rows={1}>
        {(product) => (
          <ProductCard
            variant='compact'
            product={product}
            onCompare={() => console.log('Compare:', product.name)}
            onQuickView={() => console.log('Quick view:', product.name)}
            onSelectOptions={() => console.log('Select options:', product.name)}
          />
        )}
      </ProductSliderSection>
      <ProductSliderSection title='Our Featured' data={camerasData} slidesPerView={3} rows={1}>
        {(product) => (
          <ProductCard
            variant='compact'
            product={product}
            onCompare={() => console.log('Compare:', product.name)}
            onQuickView={() => console.log('Quick view:', product.name)}
            onSelectOptions={() => console.log('Select options:', product.name)}
          />
        )}
      </ProductSliderSection>
      <ProductSliderSection title='Trendy Now' data={laptopsData} slidesPerView={3} rows={1}>
        {(product) => (
          <ProductCard
            variant='compact'
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

export default MultipleInterests;
