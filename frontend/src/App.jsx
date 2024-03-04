import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/shop/Menu';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Login />
      {/* <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu /> } />
        </Routes>
      <Footer /> */}
      </BrowserRouter>
    </>
  )
}

export default App