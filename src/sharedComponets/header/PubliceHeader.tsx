import React from 'react'
import Container from '../wrapper/Container'
import { Select, SelectContent, SelectGroup, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { SelectItem } from '@radix-ui/react-select'

export default function PubliceHeader() {
    return (
        <>
            <section className='w-full border-b cd_border-primary'>
                <Container className='flex justify-between'>
                    <p>Welcome to Wolmart store message or remove it!</p>
                    <div className="grow flex justify-end items-center gap-3">
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select a fruit" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Fruits</SelectLabel>
                                    <SelectItem value="apple">Apple</SelectItem>
                                    <SelectItem value="banana">Banana</SelectItem>
                                    <SelectItem value="blueberry">Blueberry</SelectItem>
                                    <SelectItem value="grapes">Grapes</SelectItem>
                                    <SelectItem value="pineapple">Pineapple</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </Container>
            </section>
            <section className='w-full'>
                <Container>
                    <h1>sss</h1>
                </Container>
            </section>
        </>
    )
}
