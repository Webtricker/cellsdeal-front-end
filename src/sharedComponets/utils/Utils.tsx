import { cn } from "@/lib/utils"
export const VerticalDivider = ({ className = "" }: { className?: string; }) => {
    return (
        <div className={cn("w-[1px] cd_divider", className)}></div>
    )
}

