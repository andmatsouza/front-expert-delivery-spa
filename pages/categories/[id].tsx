import { Highlights, PageTemplate } from '../../components';
import { TypePageProps, TypeParams } from './types';

function Categories({ id, children }: TypePageProps) {
  return (
    <PageTemplate
      title={`${id} - Categoria de Restaurante`}
      description='Lista de restaurantes da categoria'
    >
      <Highlights title={id} />
    </PageTemplate>
  )
}

// This gets called on every request
export async function getServerSideProps({ params }: TypeParams) {
  // Pass data to the page via props
  return {
    props: {
      id: params.id,
    },
  };
}

export default Categories
