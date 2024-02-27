import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Banner from './Banner'
import Categories from './Categories'
import SpecialDishes from './SpecialDishes'

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Categories />
      <SpecialDishes />
      <Footer />
    </>
  )
}

export default Home