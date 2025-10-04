import Image from 'next/image'
import React from 'react'

export default function SiteLogo() {
    return (
        <div className='-mb-2.5'>
            <Image className='w-full min-w-[150px] lg:min-w-[180px] max-w-[190px] h-auto' width={190} height={42} src="/images/shared/CellsDeal.png" alt="Site logo" />
        </div>
    )
}
