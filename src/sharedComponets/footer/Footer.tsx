import { FooterMenus } from '@/types/data';
import Container from '../wrapper/Container';
import FooterMenu from './FooterMenu';
import logo from '@/assets/img/logo.png';
import Image from 'next/image';

export const footerLinks: FooterMenus[] = [
  {
    title: 'Company',
    links: [
      { name: 'What is Flashmart?', url: '/about-flashmart' },
      { name: 'Requirements', url: '/requirements' },
      { name: 'Jobs & Jobs', url: '/jobs' },
      { name: 'Contacts', url: '/contacts' },
    ],
  },
  {
    title: 'Support',
    links: [
      { name: 'Contact Us', url: '/contact' },
      { name: 'Delivery', url: '/delivery' },
      { name: 'Payment', url: '/payment' },
      { name: 'Purchase Returns', url: '/purchase-returns' },
    ],
  },
  {
    title: 'Shop',
    links: [
      { name: 'Cart', url: '/cart' },
      { name: 'Wishlist', url: '/wishlist' },
      { name: 'Checkout', url: '/checkout' },
      { name: 'My Account', url: '/account' },
    ],
  },
  {
    title: 'Quick Links',
    links: [
      { name: 'About Us', url: '/about' },
      { name: 'Contact Us', url: '/contact' },
      { name: 'Order Status', url: '/order-status' },
      { name: 'Shipping & Returns', url: '/shipping-returns' },
      { name: 'Privacy Policy', url: '/privacy-policy' },
    ],
  },
  {
    title: 'Our Mission',
    links: [
      { name: 'Payment Methods', url: '/payment-methods' },
      { name: 'Money-back guarantee!', url: '/money-back' },
      { name: 'Products Returns', url: '/products-returns' },
      { name: 'Support Center', url: '/support' },
      { name: 'Shipping', url: '/shipping' },
    ],
  },
];
function Footer() {
  return (
    <footer>
      <Container>
        <section className='cd-border-primary flex items-start justify-between gap-2 border-b pb-11'>
          {footerLinks?.map((menu, idx) => (
            <FooterMenu key={idx} menu={menu} />
          ))}
        </section>
        <section className='mt-11'>
          <div>
            <Image src={logo.src} alt='CellsDeal' width={200} height={100} />
            <p>
              Ac tincidunt vitae semper quis lectus tiamno quam lacus suspendisse fau cibus inte
              dums uere lorem ipsume velit dignis
            </p>
          </div>
        </section>
      </Container>
    </footer>
  );
}

export default Footer;
