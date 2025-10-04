import Container from '@/sharedComponets/wrapper/Container'
import React from 'react'
import { ArticleCard } from './components/ArticleCard'

export default function TopWeeklyVendors() {
    return (
        <section className='w-full section-speacing'>
            <Container>
                <div className='w-full section-heading'>
                    <h2>Top Weekly Vendors</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                </div>
            </Container>
        </section>
    )
}
