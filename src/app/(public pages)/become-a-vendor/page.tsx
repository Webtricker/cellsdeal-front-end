import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Container from '@/sharedComponets/wrapper/Container';
import { ArrowRight, Package, ShoppingCart, Truck, DollarSign, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import img1 from '@/assets/img/become-a-vendor/banner-1.jpg';
import img2 from '@/assets/img/become-a-vendor/banner-2.jpg';
import customerImg1 from '@/assets/img/become-a-vendor/customer-1.png';
import customerImg2 from '@/assets/img/become-a-vendor/customer-2.png';
import bg from '@/assets/img/become-a-vendor/banner-4.jpg';

function BecomeAVendorPage() {
  return (
    <main className='bg-background min-h-screen'>
      {/* Hero Section */}
      <Container className='section-speacing'>
        <div className='grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12'>
          <div className='space-y-6'>
            <p className='text-primary text-sm font-medium tracking-wide uppercase'>
              Create a Store
            </p>
            <h3 className='text-foreground text-4xl leading-tight font-bold md:text-5xl lg:text-6xl'>
              Build your online store on Wolmart
            </h3>
            <p className='text-muted-foreground max-w-lg text-base leading-relaxed md:text-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Venenatis tellus in metus vulputate eu scelerisque
              felis.
            </p>
            <Button size='lg' className='font-medium uppercase'>
              Learn More
            </Button>
          </div>
          <div className='relative aspect-[4/3] lg:aspect-auto lg:h-[400px]'>
            <Image
              src={img1.src}
              alt='Person working on laptop'
              fill
              className='rounded-lg object-cover'
            />
          </div>
        </div>
      </Container>

      {/* Features Section */}
      <section className='bg-muted/30 py-12 md:py-20'>
        <Container>
          <div className='grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12'>
            <div className='relative order-2 aspect-[4/3] lg:order-1 lg:aspect-auto lg:h-[400px]'>
              <Image
                src={img2.src}
                alt='Business collaboration'
                fill
                className='rounded-lg object-cover'
              />
            </div>
            <div className='order-1 space-y-6 lg:order-2'>
              <p className='text-primary text-sm font-medium tracking-wide uppercase'>
                How to Trade
              </p>
              <h2 className='text-foreground text-3xl leading-tight font-bold md:text-4xl lg:text-5xl'>
                Easy 4 steps to manage your products selling
              </h2>
              <p className='text-muted-foreground text-base leading-relaxed'>
                Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Venen atis.
              </p>
              <div className='grid grid-cols-1 gap-6 pt-4 sm:grid-cols-2'>
                <div className='flex gap-3'>
                  <div className='flex-shrink-0'>
                    <div className='bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg'>
                      <Package className='text-primary h-5 w-5' />
                    </div>
                  </div>
                  <div>
                    <h6 className='mb-1 font-semibold'>Register and List Your Products</h6>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <div className='flex-shrink-0'>
                    <div className='bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg'>
                      <ShoppingCart className='text-primary h-5 w-5' />
                    </div>
                  </div>
                  <div>
                    <h6 className='mb-1 font-semibold'>Start Selling Your Products</h6>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <div className='flex-shrink-0'>
                    <div className='bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg'>
                      <Truck className='text-primary h-5 w-5' />
                    </div>
                  </div>
                  <div>
                    <h6 className='mb-1 font-semibold'>Deliver your Products Everywhere</h6>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <div className='flex-shrink-0'>
                    <div className='bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg'>
                      <DollarSign className='text-primary h-5 w-5' />
                    </div>
                  </div>
                  <div>
                    <h6 className='mb-1 font-semibold'>Get Payments and Increase your Income</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing Section */}
      <section className='section-speacing'>
        <Container>
          <div className='mb-12 space-y-4 text-center'>
            <p className='text-primary text-sm font-medium tracking-wide uppercase'>
              Only Few Fees
            </p>
            <h2 className='text-foreground text-3xl font-bold md:text-4xl lg:text-5xl'>
              All is secured and Transparent
            </h2>
            <p className='text-muted-foreground mx-auto max-w-2xl'>
              Nunc id cursus metus aliquam. Libero id faucibus nisl tincidunt eget.
            </p>
          </div>
          <div className='mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2'>
            <Card className='space-y-4 p-8 text-center'>
              <div className='text-muted-foreground/30 text-6xl font-bold md:text-7xl'>$0</div>
              <h3 className='text-foreground text-xl font-bold'>Listing Fee</h3>
              <p className='text-muted-foreground text-sm leading-relaxed'>
                Diam maecenas ultricies mi eget mauris. Neon tellus molestie nunc non.
              </p>
            </Card>
            <Card className='space-y-4 p-8 text-center'>
              <div className='text-muted-foreground/30 text-6xl font-bold md:text-7xl'>5%</div>
              <h3 className='text-foreground text-xl font-bold'>Final Value Fee</h3>
              <p className='text-muted-foreground text-sm leading-relaxed'>
                Diam maecenas ultricies mi eget mauris. Neon tellus molestie nunc non.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className='bg-muted/30 py-12 md:py-20'>
        <Container>
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12'>
            <div className='space-y-6'>
              <p className='text-primary text-sm font-medium tracking-wide uppercase'>
                What they say
              </p>
              <h2 className='text-foreground text-3xl leading-tight font-bold md:text-4xl'>
                Success stories from Wolmart sellers
              </h2>
              <p className='text-muted-foreground leading-relaxed'>
                Lorem ipsum dolor sit amet, consectetur adipiscing hendrerit. Pellentesque nunc non
                turpis sed dolor sit dolor sit amet nisi dignissim.
              </p>
              <Link
                href='#'
                className='text-primary inline-flex items-center gap-2 font-medium transition-all hover:gap-3'
              >
                VISIT VENDORS <ArrowRight className='h-4 w-4' />
              </Link>
            </div>
            <div className='lg:col-span-2'>
              <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
                <Card className='space-y-4 p-6'>
                  <div className='bg-muted mx-auto h-16 w-16 overflow-hidden rounded-full'>
                    <Image
                      src={customerImg1.src}
                      alt='Victoria Ventura'
                      width={64}
                      height={64}
                      className='object-cover'
                    />
                  </div>
                  <div className='flex justify-center gap-1'>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className='h-4 w-4 fill-yellow-400 text-yellow-400' />
                    ))}
                  </div>
                  <p className='text-muted-foreground text-center text-sm leading-relaxed'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
                  </p>
                  <div className='text-center'>
                    <p className='text-foreground font-semibold'>Victoria Ventura</p>
                    <p className='text-muted-foreground text-sm'>Pakistan</p>
                  </div>
                </Card>
                <Card className='space-y-4 p-6'>
                  <div className='bg-muted mx-auto h-16 w-16 overflow-hidden rounded-full'>
                    <Image
                      src={customerImg2.src}
                      alt='Victoria Ventura'
                      width={64}
                      height={64}
                      className='object-cover'
                    />
                  </div>
                  <div className='flex justify-center gap-1'>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className='h-4 w-4 fill-yellow-400 text-yellow-400' />
                    ))}
                  </div>
                  <p className='text-muted-foreground text-center text-sm leading-relaxed'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
                  </p>
                  <div className='text-center'>
                    <p className='text-foreground font-semibold'>Victoria Ventura</p>
                    <p className='text-muted-foreground text-sm'>Pakistan</p>
                  </div>
                </Card>
              </div>
              <div className='mt-6 flex justify-center gap-2'>
                <div className='bg-primary h-2 w-2 rounded-full'></div>
                <div className='bg-muted-foreground/30 h-2 w-2 rounded-full'></div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className='py-12 md:py-20'>
        <Container>
          <div className='mb-12 space-y-4 text-center'>
            <p className='text-primary text-sm font-medium tracking-wide uppercase'>
              Frequently Asked Questions
            </p>
            <h2 className='text-foreground text-3xl font-bold md:text-4xl lg:text-5xl'>
              Find an answer to your Question
            </h2>
          </div>
          <div className='mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2'>
            <div className='space-y-3'>
              <h4 className='text-foreground text-lg font-bold'>How can I add new products?</h4>
              <p className='text-muted-foreground text-sm leading-relaxed'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className='space-y-3'>
              <h4 className='text-foreground text-lg font-bold'>How do I get paid?</h4>
              <p className='text-muted-foreground text-sm leading-relaxed'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className='space-y-3'>
              <h4 className='text-foreground text-lg font-bold'>How can I know stock?</h4>
              <p className='text-muted-foreground text-sm leading-relaxed'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Venenatis tellus.
              </p>
            </div>
            <div className='space-y-3'>
              <h4 className='text-foreground text-lg font-bold'>
                Do I need a credit or debit card to create a shop?
              </h4>
              <p className='text-muted-foreground text-sm leading-relaxed'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className='relative overflow-hidden py-20 md:py-32'>
        <div className='absolute inset-0 bg-gradient-to-r from-gray-500/70 to-gray-300/40'>
          <Image src={bg.src} alt='Background' fill className='object-cover opacity-20' />
        </div>
        <Container className='relative z-10'>
          <div className='mx-auto max-w-3xl space-y-8 text-center'>
            <h2 className='text-3xl leading-tight font-bold text-white md:text-4xl lg:text-5xl'>
              Let{"'"}s talk about how we can make brands work for you
            </h2>
            <Link href='/register' className='inline-block'>
              <Button size='lg' className='hover:bg-accent hover:text-black'>
                Register Now
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default BecomeAVendorPage;
