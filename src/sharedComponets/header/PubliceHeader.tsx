import React from 'react';
import Container from '../wrapper/Container';
import Link from 'next/link';
import {
  ClockFading,
  Heart,
  MapPin,
  MessageCircleMore,
  PhoneCall,
  ShoppingCart,
  UserRound,
} from 'lucide-react';
import SiteLogo from './SiteLogo';
import SearchFilter from './SearchFilter';
import { VerticalDivider } from '../utils/Utils';
import PublicNavlinks from './PublicNavlinks';
import AllCategories from './AllCategories';
import PublicSidebar from './PublicSidebar';

export default function PubliceHeader() {
  return (
    <>
      <section className='cd_border-primary w-full border-b'>
        <Container className='flex justify-between py-2'>
          <p className='cd_fs-xs hidden md:block'>Welcome to Wolmart store message or remove it!</p>
          <div className='flex grow items-center justify-end gap-5 lg:gap-7'>
            {/* ===== top links starts ==== */}
            <Link className='cd_fs-xs' href='/blogs'>
              Blog
            </Link>
            <Link className='cd_fs-xs' href='/contact-us'>
              Contact Us
            </Link>
            <Link className='cd_fs-xs hidden lg:block' href='/my-account'>
              My Account
            </Link>
            <Link href='/register' className='cd_fs-xs flex items-center gap-1'>
              <UserRound className='h-4 w-4' /> Sign In / Register
            </Link>
            {/* ===== top links ends ==== */}
          </div>
        </Container>
      </section>
      <section className='w-full py-6'>
        <Container className='flex items-center gap-3 lg:justify-between lg:gap-5'>
          <PublicSidebar />
          <SiteLogo />
          <SearchFilter />
          <div className='flex grow items-center justify-end gap-5 lg:grow-0 lg:justify-between'>
            <div className='hidden items-center gap-2 md:flex'>
              <PhoneCall className='h-5 w-5' />
              <span className='cd_fs-xs'>01712377577</span>
            </div>
            <VerticalDivider className='hidden h-full lg:block' />
            <div className='hidden md:block'>
              <MessageCircleMore className='h-5 w-5' />
            </div>
            <Link href='' className='hidden md:block'>
              <Heart className='h-5 w-5' />
            </Link>
            <Link href=''>
              <ShoppingCart className='h-5 w-5' />
            </Link>
          </div>
        </Container>
      </section>
      <section className='sticky top-0 left-0 z-50 hidden w-full !bg-[var(--light-primary)] py-2 text-black lg:block'>
        <Container className='flex items-center justify-between gap-5'>
          <div className='flex items-center gap-5 lg:gap-10'>
            <AllCategories />
            <PublicNavlinks />
          </div>
          <div className='flex gap-5 lg:gap-7'>
            <Link href='' className='flex flex-nowrap items-center gap-2'>
              <MapPin className='h-7 w-7 rounded-full bg-white p-1 text-black' />
              <span className='cd_fs-xs'>Track Order</span>
            </Link>
            <Link href='' className='flex flex-nowrap items-center gap-2'>
              <ClockFading className='h-7 w-7 rounded-full bg-white p-1 text-black' />
              <span className='cd_fs-xs'>Recently Viewed</span>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
