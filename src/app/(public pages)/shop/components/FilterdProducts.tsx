import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { LayoutGrid, List } from 'lucide-react'
import React from 'react'

export default function FilterdProducts() {
    return (
        <div className='grow'>
            <div className="w-full flex items-center gap-2 flex-wrap justify-between">
                <div className='flex items-center gap-2'>
                    <p>Short By</p>
                    <Select>
                        <SelectTrigger className="w-[150px] border cd_rounded-sm">
                            <SelectValue placeholder="Default sorting" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Default sorting </SelectLabel>
                                <SelectItem value="popularity">popularity</SelectItem>
                                <SelectItem value="ratings">Ratings</SelectItem>
                                <SelectItem value="low-price">Low Price</SelectItem>
                                <SelectItem value="high-price">High Price</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex items-center  gap-2 lg:gap-3">
                    <Select>
                        <SelectTrigger className="w-[110px] border cd_rounded-sm">
                            <SelectValue placeholder="Show 12" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Show 12</SelectLabel>
                                <SelectItem value="9">Show 9</SelectItem>
                                <SelectItem value="12">Show 12</SelectItem>
                                <SelectItem value="14">Show 14</SelectItem>
                                <SelectItem value="16">Show 16</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <div className="flex items-center gap-2 lg:gap-3">
                        <button><LayoutGrid className='w-5 h-5' /></button>
                        <button><List className='w-5 h-5' /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}


