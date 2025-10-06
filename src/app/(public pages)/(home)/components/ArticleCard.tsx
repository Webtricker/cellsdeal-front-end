import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export function ArticleCard() {
    return (
        <Card className="group border-border bg-card relative overflow-hidden p-3 md:p-3.5 transition-shadow hover:shadow-lg">
            <CardHeader className="!p-0 cd_rounded-sm mb-4 overflow-hidden">
                <Image width={400} height={200} src="/images/articles/laptop-photo.jpg" className="w-full h-[200px] object-cover" alt="article thumnail" />
            </CardHeader>
            <CardContent className="!p-0">
                <div className="flex items-center gap-3 -mb-1">
                    <Link className="cd_fs-xxs" href="#">Hobbies</Link>,
                    <Link className="cd_fs-xxs" href="#">lifestyle</Link>
                </div>
                <p className="cd_fs-xs mb-1.5">September 26, 2025</p>
                <CardTitle className="mb-3">Aliquam tincidunt mauris eurisus Sed </CardTitle>
                <CardDescription>
                    Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti.Sed egstas, ant at vulputate volutpat, uctus metus…
                </CardDescription>
                <Button
                    variant='outline'
                    className='border-primary text-primary hover:bg-primary cd_rounded-sm mt-3 bg-transparent hover:text-white'
                >
                    View More
                </Button>
            </CardContent>
        </Card>
    )
}
