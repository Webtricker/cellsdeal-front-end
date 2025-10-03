import React from 'react'
import Container from '../wrapper/Container'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import Link from 'next/link'
import { UserRound } from 'lucide-react'

export default function PubliceHeader() {
    return (
        <>
            <section className='w-full border-b cd_border-primary'>
                <Container className='flex justify-between py-2'>
                    <p className='cd_fs-xs'>Welcome to Wolmart store message or remove it!</p>
                    <div className="grow flex justify-end items-center gap-7">
                        {/* ===== top links starts ==== */}
                        <Link className='cd_fs-xs' href="/blogs">Blog</Link>
                        <Link className='cd_fs-xs' href="/contact-us">Contact Us</Link>
                        <Link className='cd_fs-xs' href="/my-account">My Account</Link>
                        <Link href="/my-account" className='cd_fs-xs flex items-center gap-1' ><UserRound className='w-4 h-4' /> Sign In / Register</Link>
                        {/* ===== top links ends ==== */}
                    </div>
                </Container>
            </section>
            <section className='w-full'>
                <Container>
                    <h1>sss</h1>
                </Container>
            </section>
        </>
    )
}
