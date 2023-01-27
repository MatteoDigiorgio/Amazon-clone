export type Product = {
  id: number;
  key: number;
  category: string;
  image: string;
  title: string;
  rating: {
    rate: number;
    count: number;
  };
  description: string;
  price: number;
  hasPrime?: boolean;
};

export type ProductsProps = {
  product: Product;
}[];
