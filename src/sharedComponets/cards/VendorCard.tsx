import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react'
import Ratings from './Ratings';

// export interface TVendorCardProps {
//     brand: string;
//     vendor: string;
//     vendor_id: string;
//     ratings: string;
//     products: { _id: string; img: string }[];
//     className?: string;
// }

// export default function VendorCard({
//     brand,
//     vendor,
//     vendor_id,
//     ratings,
//     products,
//     className = ""
// }: TVendorCardProps) {


export default function VendorCard() {
    return (
        <Card
            className={cn(
                'group relative overflow-hidden p-2 border-border max-w-[280px] transition-shadow hover:shadow-lg'
            )}
        >
            <div className="w-full flex items-center">
                <div className="w-full max-w-[70px] h-full max-h-[70px]">
                    <Image className='w-full h-full' src="https://d-themes.com/wordpress/wolmart/demo-28/wp-content/uploads/sites/49/2024/05/shop28-vendor-logo-2.jpg" width={70} height={70} alt="Brand Image" />
                </div>
                <div className="w-full grow">
                    <h6 className="cd_fs-sm">
                        wolmart29 vendor5
                    </h6>
                    <Ratings rating={3.5} max={5} />
                </div>
            </div>
        </Card>
    )
}
