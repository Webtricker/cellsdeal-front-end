"use client"
import Container from '@/sharedComponets/wrapper/Container';
import Ratings from '@/sharedComponets/cards/Ratings';

export default function TestPage() {

  return (
    <>
      <section className='section-speacing'>
        <Container>
          <h1>some content</h1>
          <Ratings rating={3.5} />
          <Ratings rating={4.8} size={10} />
          <Ratings rating={2.3} max={10} />

        </Container>
      </section>
    </>
  );
}
