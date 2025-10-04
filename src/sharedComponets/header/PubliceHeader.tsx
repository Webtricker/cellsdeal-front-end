import React from 'react'
import Container from '../wrapper/Container'
import Link from 'next/link'
import { ClockFading, Heart, MapPin, Menu, MessageCircleMore, PhoneCall, ShoppingCart, UserRound } from 'lucide-react'
import SiteLogo from './SiteLogo'
import SearchFilter from './SearchFilter'
import { VerticalDivider } from '../utils/Utils'
import PublicNavlinks from './PublicNavlinks'
import AllCategories from './AllCategories'
import PublicSidebar from './PublicSidebar'

export default function PubliceHeader() {
    return (
        <>
            <section className='w-full border-b cd_border-primary'>
                <Container className='flex justify-between py-2'>
                    <p className='cd_fs-xs hidden md:block'>Welcome to Wolmart store message or remove it!</p>
                    <div className="grow flex justify-end items-center gap-5 lg:gap-7">
                        {/* ===== top links starts ==== */}
                        <Link className='cd_fs-xs' href="/blogs">Blog</Link>
                        <Link className='cd_fs-xs' href="/contact-us">Contact Us</Link>
                        <Link className='cd_fs-xs hidden lg:block' href="/my-account">My Account</Link>
                        <Link href="/my-account" className='cd_fs-xs flex items-center gap-1' ><UserRound className='w-4 h-4' /> Sign In / Register</Link>
                        {/* ===== top links ends ==== */}
                    </div>
                </Container>
            </section>
            <section className='w-full py-6'>
                <Container className='flex items-center lg:justify-between gap-3 lg:gap-5'>
                    <PublicSidebar />
                    <SiteLogo />
                    <SearchFilter />
                    <div className='grow lg:grow-0 flex items-center justify-end lg:justify-between gap-5'>
                        <div className="hidden md:flex items-center gap-2">
                            <PhoneCall className='w-5 h-5' />
                            <span className='cd_fs-xs'>01712377577</span>
                        </div>
                        <VerticalDivider className='h-full lg:block hidden' />
                        <div className="md:block hidden">
                            <MessageCircleMore className='w-5 h-5' />
                        </div>
                        <Link href="" className="md:block hidden">
                            <Heart className='w-5 h-5' />
                        </Link>
                        <Link href="" >
                            <ShoppingCart className='w-5 h-5' />
                        </Link>
                    </div>
                </Container>
            </section>
            <section className='hidden lg:block w-full sticky top-0 left-0 py-2 !bg-[var(--light-primary)] text-black'>
                <Container className='flex items-center gap-5 justify-between'>
                    <div className="flex items-center gap-5 lg:gap-10">
                        <AllCategories />
                        <PublicNavlinks />
                    </div>
                    <div className="flex gap-5 lg:gap-7">
                        <Link href="" className="flex items-center flex-nowrap gap-2" >
                            <MapPin className='w-7 h-7 rounded-full p-1 bg-white text-black' />
                            <span className='cd_fs-xs'>Track Order</span>
                        </Link>
                        <Link href="" className="flex items-center flex-nowrap gap-2" >
                            <ClockFading className='w-7 h-7 rounded-full p-1 bg-white text-black' />
                            <span className='cd_fs-xs'>Recently Viewed</span>
                        </Link>
                    </div>
                </Container>
            </section>
        </>
    )
}
