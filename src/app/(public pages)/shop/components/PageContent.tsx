import React from 'react'
import FilteredProducts from './FilteredProducts'
import { ProductFilter } from './ProductFilter'
import { FilterSidebarProvider } from '@/provider/FilterSidebarContext'

export default function PageContent() {
    return (
        <>
            <FilterSidebarProvider>
                <ProductFilter />
                <FilteredProducts />
            </FilterSidebarProvider>
        </>
    )
}
