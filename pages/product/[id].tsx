import { FoodItem, PageTemplate } from '../../components';
import { TypePageProps, TypeParams } from './types';

function Product({ id, product, children }: TypePageProps) {
  return (
    <PageTemplate
      title={`${product.name} - Restaurante XPTO`}
      description={`${product.name} no Restaurante XPTO`}
      keywords={`${product.name}, Restaurante XPTO, Restaurante, XPTO`}
    >
      <FoodItem {...product} />
    </PageTemplate>
  )
}

// This gets called on every request
export async function getServerSideProps({ params }: TypeParams) {
  // Pass data to the page via props
  return {
    props: {
      id: params.id,
      product: {
        id: params.id,
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
