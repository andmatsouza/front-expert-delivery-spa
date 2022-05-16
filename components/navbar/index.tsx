import React from "react";
import Link from "next/link";
import Styles from './styles.module.css';
import {
  IconTargetLocation,
  IconShoppingBag,
  IconShoppingCart,
  IconFilter,
  IconDiscount,
  IconArrowTopDown,
  IconSeach,
} from "../icon-family";
import { SearchInput} from "../search-input";


export const Navbar = () => {
  return (
    <div className={Styles.navbar}>      
        <ul className={Styles.nav}>
          <li>
            <Link href="/">
              <a>
                <IconTargetLocation size={24} color="#503E9D" />
                San Francisco, California
                <IconArrowTopDown size={16} color="#000000" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <IconShoppingBag color="#FB6D3A" />
                Retirar
                <IconArrowTopDown size={16} color="#000000" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <IconDiscount color="#FACD5D" />
                Ofertas
                <IconArrowTopDown size={16} color="#000000" />
              </a>
            </Link>
          </li>
        </ul>      
      <SearchInput />
      <ul>
        <li>
          <button className={Styles.filterButton}>
            <IconFilter size={20} color="#ffffff" />
          </button>
        </li>
        <li>
          <button className={Styles.cartButton}>
            <IconShoppingCart size={20} color="#ffffff" />
          </button>
        </li>
      </ul>
    </div>
  );
};