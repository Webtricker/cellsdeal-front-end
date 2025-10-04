import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode;
    className?: string;
}
export default function Container({ children, className = "" }: Props) {
    return (
        <div className={`${className} w-full mx-auto px-4 md:px-5 max-w-[1400px]`}>{children}</div>
    )
}
