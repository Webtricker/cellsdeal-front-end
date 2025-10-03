import React from 'react'
import Container from '../wrapper/Container'
import Link from 'next/link'
import { Heart, MessageCircleMore, PhoneCall, ShoppingCart, UserRound } from 'lucide-react'
import SiteLogo from './SiteLogo'
import SearchFilter from './SearchFilter'
import { VerticalDivider } from '../utils/Utils'

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
            <section className='w-full py-8'>
                <Container className='flex justify-between gap-5'>
                    <SiteLogo />
                    <SearchFilter />
                    <div className='flex justify-between gap-5'>
                        <div className="flex items-center gap-2">
                            <PhoneCall className='w-5 h-5' />
                            <div className='flex flex-col'>
                                <span className='cd_fs-sm'><button className='cursor-pointer hover:text-blue-600'>Live Chat</button> or</span>
                                <span className='cd_fs-xs'>01712377577</span>
                            </div>
                        </div>
                        <VerticalDivider />
                        <div className="flex items-center flex-col gap-0.5 justify-center">
                            <MessageCircleMore className='w-5 h-5' />
                            <span className='cd_fs-xs'>Chat</span>
                        </div>
                        <div className="flex items-center flex-col gap-0.5">
                            <Heart className='w-5 h-5' />
                            <span className='cd_fs-xs'>Favourite</span>
                        </div>
                        <div className="flex items-center justify-center flex-col gap-0.5 ">
                            <ShoppingCart className='w-5 h-5' />
                            <span className='cd_fs-xs'>Cart</span>
                        </div>


                    </div>
                </Container>
            </section>
             <section className='w-full py-8'>
                {/* <Contaidner>

                </Contaidner> */}
             </section>
        </>
    )
}
