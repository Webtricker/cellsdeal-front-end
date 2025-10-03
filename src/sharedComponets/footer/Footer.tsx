import { FooterMenus } from '@/types/data';
import Container from '../wrapper/Container';
import FooterMenu from './FooterMenu';

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
    title: 'More',
    links: [
      { name: 'Our Mission', url: '/mission' },
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
        <section>
          {footerLinks?.map((menu, idx) => (
            <FooterMenu key={idx} menu={menu} />
          ))}
        </section>
      </Container>
    </footer>
  );
}

export default Footer;
