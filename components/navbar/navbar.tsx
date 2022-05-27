import React from "react";
import Link from "next/link";
import Styles from './styles.module.css';
import {
  IconTargetLocation,
  IconShoppingBag,
  IconShoppingCart,
  IconFilter,  
  IconArrowTopDown,  
} from "../icon-family";
import { SearchInput} from "../search-input";
import { useFilter } from "../../stores";
import {OffersFilter} from './offers-filter-dropdown';
import { LocationFilter } from './locations-filter-dropdown';
import { PickUpFilter } from './pickup-dropdown';


export const Navbar = () => {
  const {toggleModal} = useFilter(store => store);
  return (
    <div className={Styles.navbar}>      
        <ul className={Styles.nav}>
          <li>
          <LocationFilter />
          </li>
          <li>
            <PickUpFilter />            
          </li>
          <li>
          <OffersFilter />            
          </li>
        </ul>      
      <SearchInput />
      <ul className={Styles.navButtons}>
        <li>
          <button className={Styles.filterButton} onClick={() => toggleModal()}>
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