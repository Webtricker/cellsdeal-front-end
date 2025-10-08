"use client"
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { toggleProductToView } from '@/redux/features/productActions/productActions';
import { RootState } from '@/redux/store';
import { Check, Facebook, Linkedin, Scale, ShoppingCart, Star, Twitter, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function ProductDetailsModal() {
    // variables
    const rating = 4;
    // hooks
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1)
    const { productToView } = useSelector((state: RootState) => state.productActions)

    // handlers
    const handleClose = () => {
        dispatch(toggleProductToView(null));
        document.body.style.overflow = "auto"; // allow scrolling.
    }

    const updateQuantity = (action: "increase" | "decrease") => {

        if (quantity === 1 && action === "decrease") return

        if (action === "increase") {
            setQuantity(prev => prev + 1)
        } else {
            setQuantity(prev => prev - 1)
        }
    }

    useEffect(() => {
        setQuantity(1);
    }, [])


    if (!productToView) return;

    return (
        <section className='flex items-center justify-center fixed top-0 left-0 w-screen z-[9999] h-screen'>

            {/* ====== overlay & modal closer ====== */}
            <div onClick={handleClose} className="z-10 bg-black/80 w-full h-full absolute top-0 left-0"></div>

            {/* ===== content ===== */}
            <Card className='relative flex flex-col min-h-[400px] w-full max-w-[850px] p-4 md:p-5 z-20'>
                <button className='z-50 absolute top-4 right-4' onClick={handleClose}><X className='w-6 h-6 duration-300 hover:scale-110 hover:rotate-90' /></button>
                <div className="w-full z-40 flex flex-nowrap flex-col md:flex-row gap-8">
                    <div className='w-full h-full'>

                    </div>
                    <div className='w-full h-full'>
                        <h5 className='font-semibold'>Jeans</h5>
                        <div className="w-full flex items-center gap-4 mt-3">
                            <Image className='border cd_rounded-xs' src="/images/brands/brand-1.png" width={100} height={60} alt="Brand image" />
                            <div className="flex items-center flex-col">
                                <p className='cd_fs-xs'><strong>Category</strong>: <Link className='site_link' href="/">Fashion</Link></p>
                                <p className='cd_fs-xs'><strong>SKU</strong>: <span>MS98282841</span> </p>
                            </div>
                        </div>
                        <Separator className='my-3 md:my-4' />
                        {/* <span className='my-2 h-[1px] bg-slate-200 md:my-3 w-full block' ></span> */}
                        <h4 className='font-semibold'>$60.00 – $67.00</h4>
                        <div className='flex mt-2 items-center'>
                            <div className='flex items-center'>
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={cn(
                                            'h-4 w-4',
                                            i < Math.floor(rating!)
                                                ? 'fill-yellow-400 text-yellow-400'
                                                : 'fill-muted text-muted'
                                        )}
                                    />
                                ))}
                            </div>
                            <p className='cd_fs-xxs'>45 reviews</p>
                        </div>
                        <ul className='pt-3 mb-5'>
                            <li className="flex cd_fs-xs gap-2">
                                <span className='mt-1'><Check className='w-4 h-4' /></span>
                                <span>Ultrices eros in cursus turpis massa tincidunt cursus mattis.</span>
                            </li>
                            <li className="flex cd_fs-xs gap-2">
                                <span className='mt-1'><Check className='w-4 h-4' /></span>
                                <span>Lorem ipsum dolor sit amet.</span>
                            </li>
                            <li className="flex cd_fs-xs gap-2">
                                <span className='mt-1'><Check className='w-4 h-4' /></span>
                                <span>Lorem ipsum, dolor sit amet consectetur adipisicing..</span>
                            </li>
                        </ul>
                        {/* <Separator className='my-3 md:my-4' /> */}
                        <div className="flex gap-3">
                            <h6 className='mt-1.5' >Size</h6>
                            <Tabs defaultValue="M">
                                <TabsList className='cd_fs-xs'>
                                    <TabsTrigger value="S">S</TabsTrigger>
                                    <TabsTrigger value="M">M</TabsTrigger>
                                    <TabsTrigger value="L">L</TabsTrigger>
                                    <TabsTrigger value="XL">XL</TabsTrigger>
                                </TabsList>
                                <TabsContent className='flex gap-3 items-center justify-center' value="S">
                                    <p className='cd_fs-base p-1 cd_rounded-sm border inline'>
                                        $60.00
                                    </p>
                                    <Badge className='cd_rounded-sm' variant="destructive">60 in stock</Badge>
                                </TabsContent>
                                <TabsContent className='flex gap-3 items-center justify-center' value="M">
                                    <p className='cd_fs-base p-1 cd_rounded-sm border inline'>
                                        $62.00
                                    </p>
                                    <Badge className='cd_rounded-sm' variant="destructive">30 in stock</Badge>
                                </TabsContent>
                                <TabsContent className='flex gap-3 items-center justify-center' value="L">
                                    <p className='cd_fs-base p-1 cd_rounded-sm border inline'>
                                        $64.00
                                    </p>
                                    <Badge className='cd_rounded-sm' variant="destructive">80 in stock</Badge>
                                </TabsContent>
                                <TabsContent className='flex gap-3 items-center justify-center' value="XL">
                                    <p className='cd_fs-base p-1 cd_rounded-sm border inline'>
                                        $67.00
                                    </p>
                                    <Badge className='cd_rounded-sm' variant="destructive">50 in stock</Badge>
                                </TabsContent>
                            </Tabs>
                        </div>
                        <div className="w-full flex mt-5 items-center gap-2 justify-between">
                            <div className="flex items-center gap-2">
                                <h6 className='cd_fs-sm'>Quantity</h6>
                                <div className="w-full flex items-center gap-2">
                                    <Button onClick={() => updateQuantity("increase")} className='cd_fs-md h-6 w-6 !rounded-full leading-[100%]'>+</Button>
                                    <span>{quantity}</span>
                                    <Button onClick={() => updateQuantity("decrease")} className='cd_fs-md h-6 w-6 !rounded-full leading-[100%]'>-</Button>
                                </div>
                            </div>
                            <Button className='flex items-center gap-3'>
                                <ShoppingCart />
                                <span>ADD TO CART</span>
                            </Button>
                        </div>
                        <div className="w-full flex items-center gap-5">
                            <div className='w-full flex items-center gap-5'>
                                <Facebook size={16} strokeWidth={1.25} />
                                <Linkedin size={16} strokeWidth={1.25} />
                                <Twitter size={16} strokeWidth={1.25} />
                            </div>
                            <div>
                                <Scale className='w-6 h-6' />
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </section>
    )
}
