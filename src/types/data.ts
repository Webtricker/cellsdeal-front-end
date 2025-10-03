export interface TCategory {
  _id: string;
  name: string;
}

export interface ITechnology {
  _id: string;
  name: string;
}

// Footer menu types
export interface FooterLink {
  name: string;
  url: string;
}

export interface FooterMenus {
  title: string;
  links: FooterLink[];
}
