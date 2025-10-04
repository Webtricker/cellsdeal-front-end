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
        <Card className="w-full p-4 md:p-5">

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
                <Button size="sm" className="mt-4" variant="default">
                    View More
                </Button>
            </CardContent>
        </Card>
    )
}
