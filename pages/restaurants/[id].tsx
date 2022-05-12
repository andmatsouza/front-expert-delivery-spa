import Head from 'next/head';
import { FoodList, Sidebar, Navbar, DetailsItem } from "../../components";
import Styles from './restaurant.module.css';
import { TypePageProps, TypeParams} from './types';


function Restaurant({ id, children }: TypePageProps) {
  return (
    <>
      <Head>
        <title>Restaurante - Burguer King</title>
        <meta name="description" content="Restaurante Burguer King" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='container m-auto flex'>

        <Sidebar />
        <div className='grow p-8'>
          <Navbar />
          <div>{id}</div>
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
        </div>
      </div>
    </>

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