import type { NextPage } from 'next'
import Head from 'next/head'
import { Highlights, Navbar, Sidebar, FoodList } from '../components';

const Explorer: NextPage = () => {
  return (
    <>
      <Head>
        <title>Explorar Restaurantes</title>
        <meta name="description" content="Descrição da página explorar Restaurantes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='container m-auto flex'>
        <Sidebar />
        <div className='grow p-8'>
          <Navbar />         
          <Highlights title="Restaurantes próximos" />
          <FoodList />
        </div>
      </div>
    </>
  )
}

export default Explorer
