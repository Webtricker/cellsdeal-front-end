import Container from '@/sharedComponets/wrapper/Container';
import TestSlide from './components/TestSlide';

function TestPage() {
  return (
    <section className='section-speacing'>
      <Container>
        <TestSlide />
      </Container>
    </section>
  );
}

export default TestPage;
