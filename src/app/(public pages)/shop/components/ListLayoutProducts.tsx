import { accessoriesData } from '@/lib/demo-data'
import { ProductCard } from '@/sharedComponets/cards/ProductCard'
import React from 'react'

export default function ListLayoutProducts() {
    return (
        <div className='grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 pt-6'>
            {
                accessoriesData.map(product => (
                    <ProductCard
                        key={product.id}
                        variant='default'
                        product={product}
                        className='!max-w-[700px] !w-full'
                        onCompare={() => console.log('Compare:', product.name)}
                        onQuickView={() => console.log('Quick view:', product.name)}
                        onSelectOptions={() => console.log('Select options:', product.name)}
                    />
                ))
            }
        </div>
    )
}
