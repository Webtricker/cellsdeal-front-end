export interface TCategory {
  _id: string;
  name: string;
}

export interface ITechnology {
  _id: string;
  name: string;
}

// Footer types
export interface FooterLink {
  name: string;
  url: string;
}

export interface FooterMenus {
  title: string;
  links: FooterLink[];
}

export interface ContactInfo {
  title: string;
  address?: string;
  phone?: string;
  hotline?: string;
  email?: string;
}
