"use client"
import Container from '@/sharedComponets/wrapper/Container'
import React from 'react'
import BannerSlider from './BannerSlider'
import { SwiperSlide } from 'swiper/react';
import { Button } from '@/components/ui/button';

const Banner = () => {
    return <>
        <div className="w-[65%] relative cd_rounded overflow-hidden">
            <BannerSlider className='w-full'>
                <SwiperSlide className='banner-gradient p-4 md:p-5 min-h-[400px]'>
                    <div className='flex'>
                        <div className="grow"></div>
                        <div className="content">
                            <h2>NEW COLLECTION</h2>
                            <h3 className='cd_fs-3xl'>Electronics Sale</h3>
                            <h4>Starting at $299.99</h4>
                            <Button variant="outline">
                                Shop Now
                            </Button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='banner-gradient p-4 md:p-5 min-h-[400px]'><div className='bg-white'>
                </div></SwiperSlide>
                <SwiperSlide className='banner-gradient p-4 md:p-5 min-h-[400px]'><div className='bg-white'>
                </div> 4</SwiperSlide>
                <SwiperSlide className='banner-gradient p-4 md:p-5 min-h-[400px]'><div className='bg-white'>
                </div> 5</SwiperSlide>
                <SwiperSlide className='banner-gradient p-4 md:p-5 min-h-[400px]'><div className='bg-white'>
                </div> 6</SwiperSlide>
                <SwiperSlide className='banner-gradient p-4 md:p-5 min-h-[400px]'><div className='bg-white'>
                </div> 7</SwiperSlide>
                <SwiperSlide className='banner-gradient p-4 md:p-5 min-h-[400px]'><div className='bg-white'>
                </div> 8</SwiperSlide>
                <SwiperSlide className='banner-gradient p-4 md:p-5 min-h-[400px]'><div className='bg-white'>
                </div> 9</SwiperSlide>
            </BannerSlider>
        </div>
    </>
}


const HotDeals = () => {
    return <>
        <div className="grow bg-red-300 cd_rounded overflow-hidden">

        </div>
    </>
}


export default function HomeBanner() {
    return (
        <section className='w-full mt-5'>
            <Container className='flex gap-5 justify-between overflow-hidden'>
                <Banner />
                <HotDeals />
            </Container>
        </section>
    )
}
