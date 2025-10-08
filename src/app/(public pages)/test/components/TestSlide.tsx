'use client';

import * as React from 'react';
import { Slider } from '@/components/ui/slider';
import { Card } from '@/components/ui/card';

export interface PriceRangeFilterProps {
  min?: number;
  max?: number;
  defaultValue?: [number, number];
  onValueChange?: (value: [number, number]) => void;
  className?: string;
}

function TestSlide({
  min = 0,
  max = 1000,
  defaultValue = [0, 1000],
  onValueChange,
  className,
}: PriceRangeFilterProps) {
  const [value, setValue] = React.useState<[number, number]>(defaultValue);

  const handleValueChange = (newValue: number[]) => {
    const rangeValue = [newValue[0], newValue[1]] as [number, number];
    setValue(rangeValue);
    onValueChange?.(rangeValue);
  };

  return (
    <Card className={className}>
      <div className='space-y-6 p-6'>
        <div className='space-y-2'>
          <h3 className='text-lg font-semibold'>Price Range</h3>
          <p className='text-muted-foreground text-sm'>Filter products by price</p>
        </div>

        <div className='space-y-4'>
          <Slider
            min={min}
            max={max}
            step={10}
            value={value}
            onValueChange={handleValueChange}
            className='w-full'
          />

          <div className='flex items-center justify-between gap-4'>
            <div className='flex-1'>
              <label className='text-muted-foreground mb-1 block text-xs'>Min Price</label>
              <div className='flex items-center gap-1'>
                <span className='text-sm font-medium'>$</span>
                <input
                  type='number'
                  value={value[0]}
                  onChange={(e) => {
                    const newMin = Math.max(min, Math.min(Number(e.target.value), value[1] - 10));
                    handleValueChange([newMin, value[1]]);
                  }}
                  className='focus:ring-ring w-full rounded-md border px-3 py-2 text-sm focus:ring-2 focus:outline-none'
                  min={min}
                  max={value[1] - 10}
                />
              </div>
            </div>

            <div className='text-muted-foreground'>—</div>

            <div className='flex-1'>
              <label className='text-muted-foreground mb-1 block text-xs'>Max Price</label>
              <div className='flex items-center gap-1'>
                <span className='text-sm font-medium'>$</span>
                <input
                  type='number'
                  value={value[1]}
                  onChange={(e) => {
                    const newMax = Math.min(max, Math.max(Number(e.target.value), value[0] + 10));
                    handleValueChange([value[0], newMax]);
                  }}
                  className='focus:ring-ring w-full rounded-md border px-3 py-2 text-sm focus:ring-2 focus:outline-none'
                  min={value[0] + 10}
                  max={max}
                />
              </div>
            </div>
          </div>

          <div className='border-t pt-2'>
            <div className='flex items-center justify-between text-sm'>
              <span className='text-muted-foreground'>Selected Range:</span>
              <span className='font-semibold'>
                ${value[0]} - ${value[1]}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default TestSlide;
