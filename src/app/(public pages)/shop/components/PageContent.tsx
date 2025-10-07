import React from 'react'
import FilterdProducts from './FilterdProducts'
import { ProductFilter } from './ProductFilter'
import { FilterSidebarProvider } from '@/provider/FilterSidebarContext'

export default function PageContent() {
    return (
        <>
            <FilterSidebarProvider>
                <ProductFilter />
            </FilterSidebarProvider>
            <FilterdProducts />
        </>
    )
}
