import { ReactNode } from "react";

export type TypePageProps = {
  id: string;
  product: {
    id: string;
    name: string;
    imageUrl: string;
    deliveryFee: string;
    rate: number;
    reviews: number;
    category: string;
    deliveryTime: string;
  };
  children?: ReactNode;
};

export type TypeParams = {
  params: {
    id: string;
  };
};
