export interface IProduct {
  id: number;
  name: string;
  image: string;
  priceMin: number;
  priceMax: number;
  rating?: number;
  reviewCount?: number;
  inStock?: boolean;
  discountPercentage?: number;
}