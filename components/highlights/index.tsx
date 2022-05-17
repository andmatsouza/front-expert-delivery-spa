import React from "react";
import Link from "next/link";
import { HighlightsItem } from "../highlights-item";
import { IconArrowRight } from "../icon-family";
import Styles from './styles.module.css';
import { TypePageProps } from './types';

export const Highlights = ({ title }: TypePageProps) => {
  const data = [
    {
      id: "1",
      name: "Burguer King",
      brandUrl: "/brands/burguer-king.svg",
      rate: 4.5,
      food: "Burguer",
      comments: 1873,
      price: 1,
      bonus: "Entrega grátis",
      distance: 4.3,
    },
    {
      id: "2",
      name: "McDonalds",
      brandUrl: "/brands/mcdonalds.svg",
      rate: 4.1,
      food: "Burguer",
      comments: 20359,
      price: 1,
      bonus: "R$ 5,00 Entrega grátis",
      distance: 9,
    },
    {
      id: "3",
      name: "Domino's Pizza",
      brandUrl: "/brands/dominos-pizza.svg",
      rate: 5,
      food: "Pizza",
      comments: 736,
      price: 2,
      bonus: "Compre 2 e ganhe 1",
      distance: 2.8,
    },
    {
      id: "4",
      name: "Carrows",
      brandUrl: "/brands/carrows.svg",
      rate: 4.7,
      food: "Peixe",
      comments: 91,
      price: 3,
      bonus: "Entrega grátis",
      distance: 0.3,
    },
    {
      id: "5",
      name: "KFC",
      brandUrl: "/brands/kfc.svg",
      rate: 4.4,
      food: "Burguer",
      comments: 2583,
      price: 1,
      bonus: "Compre um e ganhe outro",
      distance: 18.6,
    },
    {
      id: "6",
      name: "Pizza Hut",
      brandUrl: "/brands/pizza-hut.svg",
      rate: 4.6,
      food: "Pizza",
      comments: 24,
      price: 1,
      bonus: "Compre 2 e ganhe 1",
      distance: 3.4,
    },
    
  ]
  return (
    <div className="mb-12">
      <div className={Styles.header}>
        <h2>{title ? title : "Destaques"}</h2>
        <Link href="/destaques">
          <a>
            Ver todos
            <IconArrowRight size="12" color="#5B4AA3" />
          </a>
        </Link>
      </div>
      <div className={Styles.container}>
        {data.map((item) => (
          <HighlightsItem key={item.name} {...item} />
        ))}
      </div>
    </div>
  )
}