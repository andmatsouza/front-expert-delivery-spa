import Head from 'next/head'
import { Highlights, Navbar, Sidebar } from '../../components';
import { TypePageProps, TypeParams} from './types';

function Categories ({ id, children }: TypePageProps) {
  return (
    <>
      <Head>
        <title>{id} - Categoria de Restaurante</title>
        <meta name="description" content="Lista de restaurantes da categoria" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='container m-auto flex'>
        <Sidebar />
        <div className='grow p-8'>
          <Navbar />         
          <Highlights title={id}/>          
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
    },
  };
}

export default Categories
