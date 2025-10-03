import { FooterMenus } from '@/types/data';

function FooterMenu({ menu }: { menu: FooterMenus }) {
  return (
    <div>
      <h5 className=''>{menu?.title}</h5>
    </div>
  );
}

export default FooterMenu;
