import Articles from './components/Articles';
import JustForYou from './sections/JustForYou';
import MultipleInterests from './sections/MultipleInterests';
import SalesProducts from './sections/SalesProducts';

export default function PublicHomePage() {
  return (
    <>
      <MultipleInterests />
      <JustForYou />
      <SalesProducts />
      <Articles />
    </>
  );
}
