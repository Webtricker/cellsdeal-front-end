'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Scale, Search, Star } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export interface ProductCardProps {
  variant?: 'default' | 'compact';
  product: {
    name: string;
    image: string;
    priceMin: number;
    priceMax: number;
    rating?: number;
    reviewCount?: number;
    inStock?: boolean;
    discountPercentage?: number;
  };
  onCompare?: () => void;
  onQuickView?: () => void;
  onSelectOptions?: () => void;
}

export function ProductCard({
  variant = 'default',
  product,
  onCompare,
  onQuickView,
  onSelectOptions,
}: ProductCardProps) {
  const isCompact = variant === 'compact';

  return (
    <Card
      className={cn(
        'group border-border bg-card relative overflow-hidden p-2 transition-shadow hover:shadow-lg',
        isCompact ? 'max-w-[140px]' : 'max-w-[280px]'
      )}
    >
      <CardContent className='!p-0'>
        {/* Image Container */}
        <div className={cn('bg-muted relative', isCompact ? 'h-[120px]' : 'h-[240px]')}>
          <Image
            src={product.image || '/placeholder.svg'}
            alt={product.name}
            fill
            className='object-contain'
          />

          {product.discountPercentage && (
            <div className='bg-primary absolute top-3 left-3 px-2 py-1 text-xs font-bold text-white'>
              -{product.discountPercentage}%
            </div>
          )}

          <div
            className={cn(
              'absolute flex gap-2 opacity-0 transition-opacity group-hover:opacity-100',
              isCompact ? 'top-2 right-2' : 'top-3 right-3'
            )}
          >
            {!isCompact && onCompare && (
              <button
                onClick={onCompare}
                className='bg-background/80 text-muted-foreground hover:bg-background hover:text-foreground flex h-8 w-8 items-center justify-center rounded-full backdrop-blur-sm transition-colors'
                aria-label='Compare product'
              >
                <Scale className='h-4 w-4' />
              </button>
            )}
            {onQuickView && (
              <button
                onClick={onQuickView}
                className='bg-background/80 text-muted-foreground hover:bg-background hover:text-foreground flex h-8 w-8 items-center justify-center rounded-full backdrop-blur-sm transition-colors'
                aria-label='Quick view'
              >
                <Search className='h-4 w-4' />
              </button>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div>
          {/* Product Name */}
          <h3
            className={cn('text-foreground font-medium', isCompact ? 'text-sm' : 'mb-2 !text-base')}
          >
            {product.name}
          </h3>

          {/* Rating and Stock (Default variant only) */}
          {!isCompact && (
            <div className='mb-2 flex items-center justify-between'>
              {product.rating !== undefined && (
                <div className='flex items-center gap-1'>
                  <div className='flex'>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          'h-4 w-4',
                          i < Math.floor(product.rating!)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'fill-muted text-muted'
                        )}
                      />
                    ))}
                  </div>
                  {product.reviewCount !== undefined && (
                    <span className='text-muted-foreground text-sm'>{product.reviewCount}</span>
                  )}
                </div>
              )}

              {product.inStock !== undefined && (
                <Badge variant='outline' className='border-primary text-primary'>
                  <span className='-mt-[3px] mr-1'>◉</span>
                  In stock
                </Badge>
              )}
            </div>
          )}

          {/* Price */}
          <div className={cn('font-semibold', isCompact ? 'text-sm' : 'mb-4 text-base')}>
            ${product.priceMin.toFixed(2)} – ${product.priceMax.toFixed(2)}
          </div>

          {/* Select Options Button (Default variant only) */}
          {!isCompact && onSelectOptions && (
            <Link href={''}>
              <Button
                variant='outline'
                className='border-primary text-primary hover:bg-accent w-full bg-transparent hover:text-black'
                onClick={onSelectOptions}
              >
                Select options
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
