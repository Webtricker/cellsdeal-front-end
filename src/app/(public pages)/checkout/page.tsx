import Container from '@/sharedComponets/wrapper/Container';
import CheckoutForm from './components/CheckoutForm';
import BreadcrumbHeading from '@/sharedComponets/breadcrumb/BreadcrumbHeading';

export default function CheckoutPage() {
  return (
    <>
      <section className='section-speacing'>
        <Container>
          <BreadcrumbHeading currentPage='checkout' />
          <CheckoutForm />
        </Container>
      </section>
    </>
  );
}
