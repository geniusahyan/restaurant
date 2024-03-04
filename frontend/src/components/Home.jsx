import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Banner from './Banner'
import Categories from './Categories'
import SpecialDishes from './SpecialDishes'
import Testimonials from './Testimonials'
import Services from './Services'

const Home = () => {
  return (
    <div className='dark:text-white text-gray-600 ' >
      <Header />
      <Banner />
      <Categories />
      <SpecialDishes />
      <Testimonials />
      <Services />
      <Footer />
    </div>
  )
}

export default Home