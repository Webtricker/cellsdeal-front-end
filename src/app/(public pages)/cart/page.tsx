import Container from '@/sharedComponets/wrapper/Container';
import Cart from './components/Cart';
import BreadcrumbHeading from '@/sharedComponets/breadcrumb/BreadcrumbHeading';

export default function CartPage() {
  return (
    <section className='section-speacing'>
      <Container>
        <BreadcrumbHeading currentPage='cart' />
        <Cart />
      </Container>
    </section>
  );
}
