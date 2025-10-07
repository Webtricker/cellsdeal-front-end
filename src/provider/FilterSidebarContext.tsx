'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface FilterSidebarContextType {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

const FilterSidebarContext = createContext<FilterSidebarContextType | undefined>(undefined)

export const FilterSidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)
  const toggle = () => setIsOpen((prev) => !prev)

  return (
    <FilterSidebarContext.Provider value={{ isOpen, open, close, toggle }}>
      {children}
    </FilterSidebarContext.Provider>
  )
}

export const useFilterSidebar = () => {
  const ctx = useContext(FilterSidebarContext)
  if (!ctx) throw new Error('useFilterSidebar must be used within FilterSidebarProvider')
  return ctx
}
