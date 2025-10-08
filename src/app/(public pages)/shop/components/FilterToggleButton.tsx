'use client'

import React from 'react'
import { SlidersHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useFilterSidebar } from '@/provider/FilterSidebarContext'

export const FilterToggleButton = () => {
    const { toggle } = useFilterSidebar()

    return (
        <Button
            variant="outline"
            size="sm"
            className="lg:hidden"
            onClick={toggle}
            aria-label="Open filters"
        >
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            Filters
        </Button>
    )
}
