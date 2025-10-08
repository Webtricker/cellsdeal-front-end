"use client"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { LayoutGrid, List, Menu } from 'lucide-react'
import React, { useState } from 'react'
import GridLayoutProducts from './GridLayoutProducts'
import ListLayoutProducts from './ListLayoutProducts'
import { useFilterSidebar } from '@/provider/FilterSidebarContext'
import { Button } from '@/components/ui/button'


type TLayout = "GRID" | "LIST"

export default function FilterdProducts() {

    const [activeLayout, setActiveLayout] = useState<TLayout>("GRID");
    const { toggle } = useFilterSidebar();
    return (
        <div className='grow'>
            <div className="w-full flex items-center gap-3 flex-wrap justify-between">
                <Button
                    className='lg:hidden'
                    onClick={toggle}
                >
                    <Menu />
                </Button>

             <div className="flex items-center gap-4">
                
                <div className='flex items-center gap-2'>
                    <p className='hidden sm:block'>Short By</p>
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
                    <div className=" hidden sm:flex items-center gap-2 lg:gap-3">
                        <button onClick={() => { setActiveLayout("GRID") }} className={`${activeLayout !== "GRID" ? "text-slate-400" : ""}`} ><LayoutGrid className='w-5 h-5' /></button>
                        <button onClick={() => { setActiveLayout("LIST") }} className={`${activeLayout !== "LIST" ? "text-slate-400" : ""}`}><List className='w-5 h-5' /></button>
                    </div>
                </div>
             </div>
            </div>
            {
                activeLayout === "GRID" ? <GridLayoutProducts /> : <ListLayoutProducts />
            }
        </div>
    )
}


