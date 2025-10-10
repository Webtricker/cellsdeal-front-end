import VendorIntro from './components/VendorIntro';
import VendorSteps from './components/VendorSteps';
import VendorPricing from './components/VendorPricing';
import VendorTestimonial from './components/VendorTestimonial';
import VendorFaq from './components/VendorFaq';
import VendorCta from './components/VendorCta';

function BecomeAVendorPage() {
  return (
    <main className='bg-background min-h-screen'>
      <VendorIntro />
      <VendorSteps />
      <VendorPricing />
      <VendorTestimonial />
      <VendorFaq />
      <VendorCta />
    </main>
  );
}

export default BecomeAVendorPage;
