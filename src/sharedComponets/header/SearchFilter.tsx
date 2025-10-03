import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import React from 'react'
import { VerticalDivider } from '../utils/Utils'
import { Search } from 'lucide-react'

export default function SearchFilter() {
    return (
        <div className='grow flex py-1.5 rounded-full items-center max-w-[600px] border'>
            <Select>
                <SelectTrigger className="!px-2 !pl-3 !mx-1 !border-0 !focus:border-0 !shadow-none w-[180px]">
                    <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                </SelectContent>
            </Select>
            <VerticalDivider className='!h-full' />
            <div className="grow flex">
                <input type="text" className='grow px-3 border-0 focus:border-0 focus:outline-0' placeholder='Search in...' />
                <button className='mr-4 '>
                    <Search className='w-5 h-5 duration-300  hover:scale-105' />
                </button>
            </div>
        </div>
    )
}
