import React, { useState } from 'react'
import Hero from '../../components/hero'
import Products from '../../components/products'
import Running from '../../components/running'
import About from '../../components/about'
import Latest from '../../components/latest'
import Featured from '../../components/featured'
import Search from '../../components/search'
import { useGetAllProductsQuery } from '../../context/productsSlice'

const Home = () => {
  const [offset, setOffset] = useState(1)
 
  const { data, isLoading } = useGetAllProductsQuery({ limit: offset * 8 })

  return (
    <main>
      <Hero />
      <Products data={data} isLoading={isLoading} offset={offset} setOffset={setOffset}/>
      <Running />
      <About />
      <Latest />
      <Featured />
      <Search />
    </main>
  )
}

export default Home