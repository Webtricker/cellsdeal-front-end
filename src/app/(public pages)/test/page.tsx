"use client"
import Container from '@/sharedComponets/wrapper/Container';
import TestSlide from './components/TestSlide';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';

export default function TestPage() {
 
  return (
    <>
      <section className='section-speacing'>
        <Container>
          <h1>some content</h1>
        </Container>
      </section>
    </>
  );
}
