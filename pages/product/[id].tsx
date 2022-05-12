import Head from 'next/head';
import { FoodItem, Navbar, Sidebar } from '../../components';
import { TypePageProps, TypeParams } from './types';

function Product({ id, product, children }: TypePageProps) {
  return (
    <>
      <Head>
        <title>
          {product.name} - Restaurante XPTO
        </title>
        <meta name="description" content={`${product.name} no Restaurante XPTO`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='container m-auto flex'>
        <Sidebar />
        <div className='grow p-8'>
          <Navbar />
          <FoodItem {...product}/>
        </div>
      </div>
    </>
  )
}

// This gets called on every request
export async function getServerSideProps({ params }: TypeParams) {
  // Pass data to the page via props
  return {
    props: {
      id: params.id,
      product: {
        name: "Gigantic Rodeo Burger",
        imageUrl: "/foods/burger.jpg",
        deliveryFee: '2.99 Entrega',
        rate: 4.3,
        reviews: 104,
        category: "Burger",
        deliveryTime: "45 - 55 min",
      }
    },
  };
}

export default Product
