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

export interface TBlog {
  title: string;
  slug: string;
  description: string;
  excerp: string;
  thumnail: {
    width?: number;
    height?: number;
    url?: string;
  };
  tags: string[];
  postType: 'service' | 'blog';
  category: TCategory | null;
  content: string;
}

export interface IBlog extends TBlog {
  _id: string;
  createdAt: Date;
  thumnail: {
    width: number;
    height: number;
    url: string;
  };
}

export interface IBlogPage {
  bannerBG: {
    type: 'image' | 'video';
    src: string;
  };
  title: string;
  description: string;
}
