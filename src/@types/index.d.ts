declare module "*.png";
interface Currency {
  name: string;
  value: number;
  flag: string;
  symbol: string;
}

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  originalPrice: number;
  discountPrice: number;
  offerPercentage: number;
  rating: number;
  ratingCount: number;
  tags: string[];
}
