import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/shop/Menu';
import Header from './components/Header';
import Footer from './components/Footer';
import { connect } from 'react-redux';
import Login from './components/Login';

const App = ({ islogin }) => {


  return (
    <>
      {!islogin ? (
        <Login />
      ) : (
        <BrowserRouter>
          <Header login={islogin} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
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
