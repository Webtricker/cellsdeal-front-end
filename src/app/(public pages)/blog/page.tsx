import React from 'react';
import BlogCardsContainer from './components/BlogCardsContainer';
import { getBlogsPageData } from '@/utils/pageData';
import { IBlogPage } from '@/types/data';
import Image from 'next/image';
import Container from '@/sharedComponets/wrapper/Container';

export default async function BlogPage() {
  const pageDate = (await getBlogsPageData()) as IBlogPage;
  return (
    <main className='z-0 w-full'>
      <section
        className={`relative z-0 mb-8 flex min-h-screen w-full md:mb-10 lg:mb-14 xl:mb-16 2xl:mb-18`}
      >
        <Container className='flex items-center justify-center'>
          <div className='w-full max-w-[1000px] rounded-[10px] bg-slate-800/30 p-4 text-center'>
            <h1 className='wt_text-shadow wt_fs-7xl heading !leading-[100%] font-medium !text-white'>
              {pageDate?.title}
            </h1>
            <p className='wt_text-shadow wt_fs-xl bold mt-5 !text-white'>{pageDate?.description}</p>
          </div>
        </Container>
        {/* {pageDate?.bannerBG?.type === 'image' ? (
          <Image
            title='Click to change background'
            width={1800}
            height={900}
            src={pageDate?.bannerBG?.src || ''}
            className='absolute top-0 left-0 -z-10 h-full w-full object-cover'
            alt='Service Banner Image'
          />
        ) : (
          <video
            title='Click to change background'
            autoPlay
            loop
            muted
            className='absolute top-0 left-0 -z-10 h-full w-full object-cover'
            src={pageDate?.bannerBG?.src || ''}
          >
            <source src={pageDate?.bannerBG?.src || ''} type='video/mp4' />
          </video>
        )} */}
      </section>
      <BlogCardsContainer />
    </main>
  );
}
