'use client';

import { camerasData, laptopsData } from '@/lib/demo-data';
import { ProductCard } from '@/sharedComponets/cards/ProductCard';
import { ProductSliderSection } from '@/sharedComponets/slider/ProductSliderSection';
import Container from '@/sharedComponets/wrapper/Container';

function MultipleInterests() {
  return (
    <Container className='grid grid-cols-1 gap-4 py-8 md:grid-cols-2 lg:grid-cols-3'>
      <ProductSliderSection
        className='cd_rounded-sm bg-white px-2 py-1 shadow'
        title='Popular Departments'
        data={laptopsData}
        slidesPerView={3}
        rows={1}
        variant='compact'
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
      <ProductSliderSection
        title='New Arrivals'
        data={camerasData}
        slidesPerView={3}
        rows={1}
        variant='compact'
        className='cd_rounded-sm bg-white px-2 py-1 shadow'
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
      <ProductSliderSection
        title='Top Rankings'
        data={laptopsData}
        slidesPerView={3}
        variant='compact'
        rows={1}
        className='cd_rounded-sm bg-white px-2 py-1 shadow'
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
      <ProductSliderSection
        title='Best Sellers'
        data={laptopsData}
        variant='compact'
        slidesPerView={3}
        rows={1}
        className='cd_rounded-sm bg-white px-2 py-1 shadow'
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
      <ProductSliderSection
        title='Our Featured'
        variant='compact'
        data={camerasData}
        slidesPerView={3}
        rows={1}
        className='cd_rounded-sm bg-white px-2 py-1 shadow'
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
      <ProductSliderSection
        title='Trendy Now'
        data={laptopsData}
        variant='compact'
        slidesPerView={3}
        rows={1}
        className='cd_rounded-sm bg-white px-2 py-1 shadow'
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
    </Container>
  );
}

export default MultipleInterests;
