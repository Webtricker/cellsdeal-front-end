import Image from 'next/image'
import React from 'react'

export default function SiteLogo() {
    return (
        <div>
            <Image className='w-full max-w-[190px] h-auto' width={190} height={42} src="/images/shared/CellsDeal.png" alt="Site logo" />
        </div>
    )
}
