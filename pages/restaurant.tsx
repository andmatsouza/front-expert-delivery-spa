import type { NextPage } from 'next';
import { FoodList, PageTemplate, DetailsItem } from "../components";
import Styles from './restaurant.module.css';

const Restaurant: NextPage = () => {
  return (
    <PageTemplate
      title='Restaurante - Burguer King'
      description='Restaurante Burguer King'
    >          
          <div>[imagem]</div>
          <div className={Styles.header}>
            <div className={Styles.details}>
              <h1>Burger King</h1>
              <p>
                Un dos maiores ícone e reconhecido restaurante de comida
                rápida no qual oferece realmente comidas e bebidas incríveis.
              </p>
            </div>
            <div className={Styles.tags}>
              <span>Entrega grátis</span>
              <span>Compre 1 e leve 2</span>
              <span>Abre às 12h</span>
            </div>
          </div>
          <div className='mb-12'>
            <DetailsItem
              rate={4.5}
              reviews={1.873}
              category="Burger"
              price={1}
              distance="4,3 Km (Irving St, San Francisco, California)"
            />
          </div>
          <FoodList />     
    </PageTemplate>
  )
};

export default Restaurant;