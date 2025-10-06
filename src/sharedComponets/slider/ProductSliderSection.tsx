'use client';

import type React from 'react';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface ProductSliderSectionProps {
  title: string;
  data: any[];
  children: (item: any, index: number) => React.ReactNode;
  slidesPerView?: number;
  rows?: 1 | 2;
  className?: string;
}

export function ProductSliderSection({
  title,
  data,
  children,
  slidesPerView = 4,
  rows = 1,
  className,
}: ProductSliderSectionProps) {
  const [responsiveSlidesPerView, setResponsiveSlidesPerView] = useState(slidesPerView);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 1,
    skipSnaps: false,
    loop: true,
    duration: 25,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        // Mobile: 1-2 slides
        setResponsiveSlidesPerView(Math.min(slidesPerView, 2));
      } else if (width < 768) {
        // Small tablet: 2-3 slides
        setResponsiveSlidesPerView(Math.min(slidesPerView, 3));
      } else if (width < 1024) {
        // Tablet: 3-4 slides
        setResponsiveSlidesPerView(Math.min(slidesPerView, 4));
      } else {
        // Desktop: use configured slidesPerView
        setResponsiveSlidesPerView(slidesPerView);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [slidesPerView]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi, responsiveSlidesPerView]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const itemsPerSlide = rows;

  const slides: any[][] = [];
  for (let i = 0; i < data.length; i += itemsPerSlide) {
    slides.push(data.slice(i, i + itemsPerSlide));
  }

  return (
    <section className={cn('w-full', className)}>
      {/* Header with Title and Navigation */}
      <div className='mb-6 flex items-center justify-between'>
        <h2>{title}</h2>

        {/* Navigation Controls */}
        <div className='flex gap-2'>
          <Button
            variant='ghost'
            size='icon'
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className='h-10 w-10 rounded-full bg-transparent disabled:opacity-30'
            aria-label='Previous slide'
          >
            <ChevronLeft className='h-5 w-5' />
          </Button>
          <Button
            variant='ghost'
            size='icon'
            onClick={scrollNext}
            disabled={!canScrollNext}
            className='h-10 w-10 rounded-full bg-transparent disabled:opacity-30'
            aria-label='Next slide'
          >
            <ChevronRight className='h-5 w-5' />
          </Button>
        </div>
      </div>

      {/* Carousel Container */}
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex gap-[14px]'>
          {slides.map((slideItems, slideIndex) => (
            <div
              key={slideIndex}
              className='min-w-0 flex-[0_0_auto]'
              style={{
                width: `calc((100% - ${(responsiveSlidesPerView - 1) * 16}px) / ${responsiveSlidesPerView})`,
              }}
            >
              <div className={cn('grid gap-4', rows === 2 ? 'grid-rows-2' : 'grid-rows-1')}>
                {slideItems.map((item, itemIndex) => {
                  const originalIndex = slideIndex * itemsPerSlide + itemIndex;
                  return <div key={originalIndex}>{children(item, originalIndex)}</div>;
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
