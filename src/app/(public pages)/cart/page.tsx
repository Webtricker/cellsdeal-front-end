import Container from '@/sharedComponets/wrapper/Container';
import Cart from './components/Cart';

export default function CartPage() {
  return (
    <section className='section-speacing'>
      <Container>
        <Cart />
      </Container>
    </section>
  );
}
