import React from "react";
import Link from "next/link";
import Styles from './styles.module.css';
import { IconBase } from '../../components/icon';

export const Sidebar = () => {
  return (
    <div className={Styles.sidebar}>
      <div className={Styles.header}>
        <p><span>ico</span>DeliveryAPP FX</p>
      </div>
      <ul className={Styles.menu}>
        <li className={Styles.active}>
          <Link href="/">
            <a>
              <span>
                <IconBase iconName="home" color="#A3A3A4" />
              </span>
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/explorar">
            <a>
              <span>
                <IconBase iconName="explorer" color="#A3A3A4" />
              </span>
              Explorar
            </a>
          </Link>
        </li>
        <li>
          <Link href="/favoritos">
            <a>
              <span>
              <IconBase iconName="favorite" color="#A3A3A4" />
              </span>
              Favoritos
            </a>
          </Link>
        </li>
        <li>
          <Link href="/orders">
            <a>
              <span>
              <IconBase iconName="order" color="#A3A3A4" />
              </span>
              Pedidos
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <span>
              <IconBase iconName="mail" color="#A3A3A4" />
              </span>
              Mensagens
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <span>
              <IconBase iconName="gear" color="#A3A3A4" />
              </span>
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