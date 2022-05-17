import Image from "next/image";
import { FoodList, PageTemplate, DetailsItem, Navbar, IconBase } from "../../components";
import Styles from './restaurant.module.css';
import { TypePageProps, TypeParams } from './types';


function Restaurant({ id, children }: TypePageProps) {
  return (
    <PageTemplate
      title='Restaurante - Burguer King'
      description='Restaurante Burguer King'
      keywords='Restaurantes, BurguerKing, Burguers'
    >
      <div className={Styles.header}>
        <div className={Styles.cover}>
          <div className={Styles.image}>
            <Image src="/cover.jpg" layout="fill" alt="Capa" />
          </div>
          <div className={Styles.brand}>
            <Image
              src="/brands/burguer-king.svg"
              width={96}
              height={96}
              alt="Capa"
            />
          </div>
          <button className={Styles.favouriteButton}>
            <IconBase iconName="hearth" size={20} color="#000" />
          </button>
        </div>
        <div className={Styles.details}>
          <div className="flex flex-col md:flex-row mb-3">
            <h1>Burger King</h1>
            <div className={Styles.tags}>
              <span>Entrega grátis</span>
              <span>Compre 1 e leve 2</span>
              <span>Abre às 12h</span>
            </div>
          </div>
          <p>
            Un dos maiores ícone e reconhecido restaurante de comida
            rápida no qual oferece realmente comidas e bebidas incríveis.
          </p>
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


// This gets called on every request
export async function getServerSideProps({ params }: TypeParams) {
  // Pass data to the page via props
  return {
    props: {
      id: params.id,
    },
  };
}

export default Restaurant;