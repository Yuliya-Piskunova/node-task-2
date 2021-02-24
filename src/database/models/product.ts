export interface Product {
  id: string;
  displayName: string;
  categoryIds: string[];
  createdAt: Date;
  totalRating: number;
  price: number;
}
