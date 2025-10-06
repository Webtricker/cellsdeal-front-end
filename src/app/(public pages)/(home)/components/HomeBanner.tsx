"use client"
import Container from '@/sharedComponets/wrapper/Container'
import React from 'react'
import BannerSlider from './BannerSlider'
import { SwiperSlide } from 'swiper/react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Banner = () => {
    return <>
        <div className="w-full md:w-[65%] relative cd_rounded overflow-hidden">
            <BannerSlider className='w-full h-[60vh] max-h-[400px] lg:max-h-[450px] min-h-[350px] lg:min-h-[400px]'>
                <SwiperSlide className='banner-gradient h-full overflow-hidden border w-full p-5 lg:p-10 xl:p-14'>
                    <div className='flex h-full gap-[4%] lg:gap-[7%] w-full'>
                        <div className="w-[48%] lg:w-[45%] p-2 lg:p-5 flex items-center justify-center">
                            <Image className='w-full lg:w-[90%] object-cover' src="/images/home/i-phone-image.png" width={300} height={400} alt="" />
                        </div>
                        <div className="w-[48%] h-full flex flex-col items-start justify-center text-white bg-transparent">
                            <h2 className='font-semibold cd_fs-2xl mb-1'>NEW COLLECTION</h2>
                            <h3 className='cd_fs-xl'>Electronics Sale</h3>
                            <h4 className='cd_fs-xl mb-4'>Starting at $299.99</h4>
                            <Button className="bg-transparent" variant="outline" >
                                Shop Now
                            </Button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='banner-gradient overflow-hidden h-full  w-full p-5 lg:p-10 xl:p-14'>
                    <div className='flex h-full gap-[4%] lg:gap-[7%] items-center w-full'>

                        <div className="w-[48%] h-full flex flex-col items-end justify-center text-white bg-transparent">
                            <h2 className='font-semibold cd_fs-2xl mb-1'>Mega Sale</h2>
                            <h3 className='cd_fs-xl'>Special Offer</h3>
                            <h4 className='cd_fs-xl text-right mb-4'>Starting at $299.99</h4>
                            <Button className="bg-transparent" variant="outline" >
                                Shop Now
                            </Button>
                        </div>
                        <div className=" w-[48%] lg:w-[45%] p-2 lg:p-5 flex items-center justify-center">
                            <Image src="/images/home/mega-sell-1.png" width={300} height={400} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
            </BannerSlider>
        </div>
    </>
}


const HotDeals = () => {
    return <>
        <div className="w-full md:w-[unset] min-h-[200px] md:grow bg-red-300 cd_rounded overflow-hidden p-5 lg:p-10 xl:p-14">
                <h2>Hot Deals of The Day</h2>

        </div>
    </>
}


export default function HomeBanner() {
    return (
        <section className='w-full mt-5'>
            <Container className='flex flex-col md:flex-row gap-5 justify-between overflow-hidden'>
                <Banner />
                <HotDeals />
            </Container>
        </section>
    )
}
