import { Card } from '@/components/ui/card';
import Container from '@/sharedComponets/wrapper/Container';

function VendorPricing() {
  return (
    <section className='section-speacing'>
      <Container>
        <div className='mb-12 space-y-4 text-center'>
          <p className='text-primary text-sm font-medium tracking-wide uppercase'>Only Few Fees</p>
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
  );
}

export default VendorPricing;
