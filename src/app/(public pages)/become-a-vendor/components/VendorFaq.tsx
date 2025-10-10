import Container from '@/sharedComponets/wrapper/Container';

function VendorFaq() {
  return (
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
  );
}

export default VendorFaq;
