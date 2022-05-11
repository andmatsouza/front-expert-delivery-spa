import React from "react";
import Styles from './styles.module.css';
import Link from "next/link";
import { Category } from '../../components';
import { IconArrowRight } from "../icon-family";


export const Categories = () => {
  const categories = [
    {
      name: "Popular",
      legend: "+286 opções",
      iconName: "Fire",
      backgroundSection: "#FB6D3A"
    },
    {
      name: "Entrega Rápida",
      legend: "+1.843 opções",
      iconName: "motorcycle",
      backgroundSection: "#503E9D"
    },
    {
      name: "Alta Classe",
      legend: "+25 opções",
      iconName: "wallet",
      backgroundSection: "#FACD5D"
    },
    {
      name: "Jantar",
      legend: "+182 opções",
      iconName: "knife",
      backgroundSection: "#FB6D3A"
    },
    {
      name: "Para retirar",
      legend: "+3.548 opções",
      iconName: "store",
      backgroundSection: "#503E9D"
    },
    {
      name: "No bairro",
      legend: "+44 opções",
      iconName: "map",
      backgroundSection: "#FACD5D"
    }
  ];
  return (
    <div>
      <div className={Styles.header}>
        <h2>Explorar Categorias</h2>
        <Link href="/categories">
          <a>

            Ver todas
            <IconArrowRight size="12" color="#5B4AA3" />
            </a>
        </Link>
      </div>
      <div className="flex gap-6 justify-between">
        {categories.map((category) => (
          <Category key={category.name} {...category} />
        ))}
      </div>

    </div>
  )
}