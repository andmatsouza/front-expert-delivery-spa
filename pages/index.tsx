import type { NextPage } from 'next';
import { Categories, Highlights, PageTemplate, FoodList } from '../components';

const Home: NextPage = () => {
  return (
    <PageTemplate
      title='Nibble Restaurantes'
      description='Descrição do Nibble Restaurantes'
    >
      <Categories />
      <Highlights />
      <FoodList />
    </PageTemplate>
  )
}

export default Home
