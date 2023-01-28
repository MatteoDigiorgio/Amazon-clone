import { Session } from "next-auth";

export interface CustomPageProps {
  session: Session;
}

export type ProductProps = {
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
  hasPrime: boolean;
};
