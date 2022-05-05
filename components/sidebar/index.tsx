import React from "react";
import Link from "next/link";
import Styles from './styles.module.css';

export const Sidebar = () => {
  return (
    <div className={Styles.sidebar}>
      <div className={Styles.header}>
        <p><span>ico</span>DeliveryAPP FX</p>
      </div>
      <ul className={Styles.menu}>
        <li>
          <Link href="/">
            <a>
              <span>ico</span>
              Home
            </a>
          </Link>
        </li>
        <li className={Styles.active}>
          <Link href="/explorar">
            <a>
              <span>ico</span>
              Explorar
            </a>
          </Link>
        </li>
        <li>
          <Link href="/favoritos">
            <a>
              <span>ico</span>
              Favoritos
            </a>
          </Link>
        </li>
        <li>
          <Link href="/orders">
            <a>
              <span>ico</span>
              Pedidos
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <span>ico</span>
              Mensagens
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <span>ico</span>
              Configurações
            </a>
          </Link>
        </li>
      </ul>
      <div className={Styles.footer}>
        componente usuário
      </div>
    </div>
  )
}