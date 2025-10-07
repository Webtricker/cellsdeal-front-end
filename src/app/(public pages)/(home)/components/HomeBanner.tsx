"use client"
import Container from '@/sharedComponets/wrapper/Container'
import React from 'react'
import BannerSlider from './BannerSlider'
import { SwiperSlide } from 'swiper/react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Countdown from './CountDown';

const Banner = () => {
    /*
        data: {
        newArrival: [{}],
        topRanking: [{}],
        popularDepartments: [{}],
    }
    */
    return <>
        <div className="w-full md:w-[65%] relative cd_rounded overflow-hidden">
            <BannerSlider className='w-full h-[60vh] max-h-[400px] lg:max-h-[450px] min-h-[350px] lg:min-h-[400px]'>
                <SwiperSlide className='banner-gradient h-full overflow-hidden border w-full p-5 lg:p-10 xl:p-14'>
                    <div className='flex h-full gap-[4%] lg:gap-[7%] w-full'>
                        <div className="w-[48%] lg:w-[45%] p-2 lg:p-5 flex items-center justify-center">
                            <Image className='w-full lg:w-[90%] object-cover' src="/images/home/i-phone-image.png" width={300} height={400} alt="" />
                        </div>
                        <div className="w-[48%] h-full flex flex-col items-start justify-center text-white bg-transparent">
                            <h2 className='font-semibold text-lg md:!text-2xl xl:!text-3xl 2xl:!text-4xl mb-1'>New Collection</h2>
                            <h3 className='md:!text-lg lg:!text-xl xl:!text-2xl'>Electronics Sale</h3>
                            <h4 className='md:!text-lg lg:!text-xl xl:!text-2xl mb-4'>Starting at $299.99</h4>
                            <Button className="bg-transparent" variant="outline" >
                                Shop Now
                            </Button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='banner-gradient overflow-hidden h-full  w-full p-5 lg:p-10 xl:p-14'>
                    <div className='flex h-full gap-[4%] lg:gap-[7%] items-center w-full'>

                        <div className="w-[48%] h-full flex flex-col items-end justify-center text-white bg-transparent">
                            <h2 className='font-semibold text-lg md:!text-2xl xl:!text-3xl 2xl:!text-4xl mb-1'>Mega Sale</h2>
                            <h3 className='md:!text-lg lg:!text-xl xl:!text-2xl'>Special Offer</h3>
                            <h4 className='md:!text-lg lg:!text-xl xl:!text-2xl text-right mb-4'>Starting at $299.99</h4>
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
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 6);
    return <>
        <div className="w-full md:w-[unset] min-h-[200px] z-0 relative items-center justify-between md:grow flex flex-col bg-primary/80 cd_rounded overflow-hidden p-5 lg:p-10 xl:p-14">
            <h2 className='text-center text-white'>Hot Deals of The Day</h2>
            <Image src="/images/home/air-pod.png" className='hidden lg:block absolute top-[50%] left-0 translate-y-[-50%] -z-10 w-full h-auto' width={300} height={200} alt="" />
            <div className="flex flex-col gap-4 items-center">
                <Countdown targetDate={targetDate.toString()} />
                <Button className="bg-transparent text-white" variant="outline" >
                    Buy Now
                </Button>
            </div>
        </div>
    </>
}


export default function HomeBanner() {
    return (
        <section className='w-full mt-5 section-bottom-speacing'>
            <Container className='flex flex-col md:flex-row gap-5 justify-between overflow-hidden'>
                <Banner />
                <HotDeals />
            </Container>
        </section>
    )
}
