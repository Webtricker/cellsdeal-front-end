import Container from '@/sharedComponets/wrapper/Container'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import ProductFilter from './components/ProductFilter'
import FilterdProducts from './components/FilterdProducts'
import PageContent from './components/PageContent'

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


            <section className='w-full'>
                <Container className='flex'>
                  <PageContent />
                </Container>
            </section>
           <section className='min-h-[200vh]'>

           </section>
        </>
    )
}
