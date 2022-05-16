import type { NextPage } from 'next'
import { Highlights, PageTemplate, FoodList } from '../components';

const Explorer: NextPage = () => {
  return (
    <PageTemplate
      title='Explorar Restaurantes'
      description='Descrição da página explorar Restaurantes'
    >
      <Highlights title="Restaurantes próximos" />
      <FoodList />
    </PageTemplate>
  )
}

export default Explorer
