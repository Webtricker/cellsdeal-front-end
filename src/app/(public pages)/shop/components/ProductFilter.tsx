'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils';
import { useFilterSidebar } from '@/provider/FilterSidebarContext';
import { Button } from '@/components/ui/button';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Link from 'next/link';
import { Slider } from '@/components/ui/slider';
import Image from 'next/image';
import { Range } from 'react-range';
import PriceRange from './PriceRange';

interface Props {
    className?: string
}

export const ProductFilter: React.FC<Props> = ({ className = "" }) => {
    const { isOpen, close } = useFilterSidebar();
    const { toggle } = useFilterSidebar();
    return (
        <>
            <Button
                className='lg:hidden'
                onClick={toggle}
            >
                <Menu />
            </Button>


            {/* ======== sidebar ======= */}
            <div
                className={cn(
                    'fixed top-0 left-0 z-50 h-full w-full lg:min-w-[310px] lg:w-3/12 lg:pt-1.5 transition-transform duration-300 lg:static lg:translate-x-0 lg:shadow-none',
                    isOpen ? 'translate-x-0' : '-translate-x-full',
                    className
                )}
            >
                <div
                    className={cn(
                        'fixed inset-0 bg-black/70 transition-opacity duration-300 z-30 lg:hidden',
                        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    )}
                    onClick={close}
                />

                <div className="w-full relative z-40 bg-white lg:!bg-transparent min-h-full sm:max-w-[350px] p-4 md:p-5 lg:p-0">
                    {/* ===== header ===== */}
                    <div className="flex items-center justify-between gap-4">
                        <h6>Filter</h6>
                        <button className='hidden sm:block'>
                            Clean All
                        </button>

                        <button
                            onClick={close}
                            className="sm:absolute z-50 top-4 right-4 sm:-right-8"
                            aria-label="Close filters"
                        >
                            <X className="h-6 w-6 sm:text-white " />
                        </button>
                    </div>
                    <div className="product-filter w-full pt-2">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full"
                            defaultValue="item-1"
                        >
                            <AccordionItem value="item-1" className='border-0 mb-5' >
                                <AccordionTrigger className='border-b cd_fs-md hover:!no-underline'>Department</AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-4 text-balance">
                                    <ul className="cd_fs-base flex flex-col gap-3 cd_fs-sm mt-3">
                                        <li className="hover:underline"><Link href="#">Accessories</Link></li>
                                        <li className="hover:underline"><Link href="#">Cooking</Link></li>
                                        <li className="hover:underline"><Link href="#">Electronics</Link></li>
                                        <li className="hover:underline"><Link href="#">Fashion</Link></li>
                                        <li className="hover:underline"><Link href="#">Furniture</Link></li>
                                        <li className="hover:underline"><Link href="#">Health &amp; Beauty</Link></li>
                                        <li className="hover:underline"><Link href="#">Home &amp; Garden</Link></li>
                                        <li className="hover:underline"><Link href="#">Smartphones</Link></li>
                                        <li className="hover:underline"><Link href="#">Toy &amp; Games</Link></li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2" className='border-0 mb-5' >
                                <AccordionTrigger className='border-b cd_fs-md hover:!no-underline' >Price</AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-4 mt-10 text-balance">
                                    <div className="w-full flex items-center gap-1">
                                        <PriceRange />
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3" className='border-0' >
                                <AccordionTrigger className='hover:!no-underline border-b cd_fs-md' ><h6>Brand</h6></AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-4 text-balance">
                                    <ul className='mt-7'>
                                        <li className='flex items-center gap-2'>
                                            <Image src="/images/brands/brand-1.png" width={100} height={100} alt="Brand image" /><p>Elegant Auto Group</p>
                                        </li>
                                        <li className='flex items-center gap-2'>
                                            <Image src="/images/brands/brand-2.png" width={100} height={100} alt="Brand image" /><p>Green Gas</p>
                                        </li>
                                        <li className='flex items-center gap-3'>
                                            <Image src="/images/brands/brand-1.png" width={100} height={100} alt="Brand image" /><p>Node</p>
                                        </li>
                                        <li className='flex items-center gap-4'>
                                            <Image src="/images/brands/brand-1.png" width={100} height={100} alt="Brand image" /><p>NS8</p>
                                        </li>
                                        <li className='flex items-center gap-5'>
                                            <Image src="/images/brands/brand-1.png" width={100} height={100} alt="Brand image" /><p>Red</p>
                                        </li>
                                        <li className='flex items-center gap-6'>
                                            <Image src="/images/brands/brand-1.png" width={100} height={100} alt="Brand image" /><p>SASS</p>
                                        </li>
                                        <li className='flex items-center gap-7'>
                                            <Image src="/images/brands/brand-1.png" width={100} height={100} alt="Brand image" /><p>Sterline</p>
                                        </li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>

            {/* ======== sidebar ======= */}
        </>
    )
}
