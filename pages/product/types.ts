import { ReactNode } from "react";

export type TypePageProps = {
  id: string;
  product: {
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
