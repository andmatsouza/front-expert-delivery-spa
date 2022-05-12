import type { NextPage } from 'next'
import Head from 'next/head'
import { Categories, Highlights, Navbar, Sidebar, FoodList } from '../components';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nibble Restaurantes</title>
        <meta name="description" content="Descrição do Nibble Restaurantes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='container m-auto flex'>
        <Sidebar />
        <div className='grow p-8'>
          <Navbar />
          <Categories />
          <Highlights />
          <FoodList />
        </div>
      </div>
    </>
  )
}

export default Home
