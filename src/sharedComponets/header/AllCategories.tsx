import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { List } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AllCategories() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className='cursor-pointer flex items-center gap-2'>
                    <List className='w-4.5 h-4.5' />
                    <span className='cd_fs-sm'>All Categories</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        Fashion
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Home
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Clean
                    </DropdownMenuItem>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>Furniture</DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem>Sofas & Couches</DropdownMenuItem>
                                <DropdownMenuItem>Armchairs</DropdownMenuItem>
                                <DropdownMenuItem>Beside Tables</DropdownMenuItem>
                                <DropdownMenuItem>Dressing Tables</DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                </DropdownMenuGroup>
                <DropdownMenuItem>Cooking</DropdownMenuItem>
                <DropdownMenuItem>Smart Phones</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
