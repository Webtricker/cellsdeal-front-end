import Container from '@/sharedComponets/wrapper/Container';
import CheckoutForm from './components/CheckoutForm';

export default function CheckoutPage() {
  return (
    <>
      <section className='section-speacing'>
        <Container>
          <CheckoutForm />
        </Container>
      </section>
    </>
  );
}
