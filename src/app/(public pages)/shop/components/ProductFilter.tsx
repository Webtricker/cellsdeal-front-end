import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { Menu, X } from 'lucide-react'
import React from 'react'

export default function ProductFilter() {
    return (
        <Drawer direction="left" >
            <DrawerTrigger asChild >
                <Menu className='w-5 md:w-6 h-5 md:h-6' />
            </DrawerTrigger>
            <DrawerContent className='lg:!relative lg:' >
                <div className="w-full h-full p-5">
                    <div className="w-full flex items-center gap-5 mb-4">
                        Filter your products
                    </div>
                    <div className="w-full max-w-6">
                        <DrawerClose>
                            <X className=" w-5 md:w-6 md:h-6 h-5" />
                        </DrawerClose>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    )
}

