import Container from '@/sharedComponets/wrapper/Container'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import PageContent from './components/PageContent'
import { PriceRangeSlider } from './components/DemoComponent'

export default function ShopPage() {
    return (
        <>
            <section className='w-full my-5'>
                <Container>
                    <ul className='flex items-center gap-2'>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <ChevronRight className='w-4 h-4 -mb-0.5' />
                        </li>
                        <li>
                            <Link href="/shop">Shop</Link>
                        </li>
                    </ul>
                </Container>
            </section>


            <section className='w-full section-bottom-speacing'>
                <Container className='flex relative items-start lg:gap-5 xl:gap-8'>
                    <PageContent />
                </Container>
            </section>
        </>
    )
}
