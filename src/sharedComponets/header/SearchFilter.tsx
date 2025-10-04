import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import React from 'react'
import { VerticalDivider } from '../utils/Utils'
import { Search } from 'lucide-react'

export default function SearchFilter() {
    return (
        <div className='grow py-1 hidden lg:flex cd_rounded items-center lg:max-w-[500px] xl:max-w-[600px] h-9 border'>
            <Select>
                <SelectTrigger className="!px-2 !pl-3 !mx-1 !border-0 !focus:border-0 !shadow-none w-[180px]">
                    <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Fashion</SelectItem>
                    <SelectItem value="dark">Home</SelectItem>
                    <SelectItem value="Clean">Clean</SelectItem>
                    <SelectItem value="Furniture">Furniture</SelectItem>
                    <SelectItem value="Armchairs">Armchairs</SelectItem>
                    <SelectItem value="Dressing Tables">Dressing Tables</SelectItem>
                </SelectContent>
            </Select>
            <VerticalDivider className='!h-full' />
            <div className="grow flex ">
                <input type="text" className='grow cd_fs-sm px-3 focus:border-0 focus:outline-0' placeholder='Search in...' />
                <button className='mr-4 '>
                    <Search className='w-5 h-5 duration-300  hover:scale-105' />
                </button>
            </div>
        </div>
    )
}
