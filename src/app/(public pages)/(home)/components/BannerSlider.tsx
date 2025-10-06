import React from 'react'
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';


type Props = {
    children: React.ReactNode;
    className?: string;
}
export default function BannerSlider({ children, className = "" }: Props) {
    return (
        <Swiper pagination={true} navigation={true} modules={[Pagination,Navigation]} className={`z-999 home-banner-swiper ${className}`} >
            {children}
        </Swiper>
    )
}
