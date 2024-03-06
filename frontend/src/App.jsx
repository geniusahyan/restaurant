import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/shop/Menu';
import Header from './components/Header';
import Footer from './components/Footer';
import { connect } from 'react-redux';
import Login from './components/Login';
import Cart from './components/Cart'
import Contact from './components/Contact';



const App = ({ islogin }) => {
  const [loading, setloading] = useState(false);

  return (
    <>
      {
        loading  ? loadingSpin :
        !islogin ? (
          <Login />
        ) : (
          <BrowserRouter>
            <Header login={islogin} />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/menu' element={<Menu />} />
              <Route path='/cart' element={<Cart /> } />
              <Route path='/contact' element={<Contact /> } />
            </Routes>
            <Footer />
          </BrowserRouter>
        )}
    </>
  );
};

const mapStateToProps = (state) => ({
  islogin: state.auth.islogin,
});

export default connect(mapStateToProps)(App);
