import React, { useEffect, useRef, useState } from 'react';
import Logo from '/Logo.png';
import { AddIcCall, MenuOpen, Search, ShoppingCartOutlined } from '@mui/icons-material';

const Header = () => {
  const ServicesRef = useRef('');
  const [open, setopen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const handleMenuHover = ()=>{
    setopen(true)
  }
  const handleMenuLeave = ()=>{
    setopen(false)
  }
  const handleServiceHover = ()=>{
    setServiceOpen(true)
  }
  const handleServiceLeave = ()=>{
    setServiceOpen(false)
  }

  const [sticky, setsticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(window.scrollY > 10){
        setsticky(true)
      }
      else{
        setsticky(false)
      }
    })
  }, [])
  

  const MenuButton = (
              <details open={open} >
                <summary>Menu</summary>
                <ul className="p-3 -mt-10 text-center w-40 " onMouseLeave={handleMenuLeave} >
                  <li><a>All</a></li>
                  <li><a>Salad</a></li>
                  <li><a>Pizza</a></li>
                </ul>
              </details>
  )

  const ServiceButton = (
            <details open={serviceOpen} >
              <summary>Services</summary>
              <ul className="p-3 text-center w-40 " onMouseLeave={handleServiceLeave} >
                <li><a>Online Order</a></li>
                <li><a>Table Booking</a></li>
                <li><a>Order Tracking</a></li>
              </ul>
            </details>
  )

  const CartButton = (
    <div className="dropdown dropdown-end hidden lg:flex ">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <ShoppingCartOutlined />
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
  )
  

  return (
    <header className='max-w-screen-2xl z-[1000] container mx-auto fixed left-0 top-0 right-0 transition-all duration-100 '>
      <div className={` ${sticky && 'shadow-md '} navbar bg-base-300 xl:px-24 transition-all duration-100 `} >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <MenuOpen />
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Home</a></li>
              <li >
                <a>Menu</a>
                <ul className="p-2">
                  <li><a>All</a></li>
                  <li><a>Salad</a></li>
                  <li><a>Pizza</a></li>
                </ul>
              </li>
              <li>
                <a>Services</a>
                <ul className="p-2">
                  <li><a>Online Order</a></li>
                  <li><a>Table Booking</a></li>
                  <li><a>Order traking</a></li>
                </ul>
              </li>
              <li><a>Offers</a></li>
            </ul>
          </div>
          <a>
            <img src={Logo} alt="logo" className='w-20' />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li onMouseEnter={handleMenuHover}  >
              {MenuButton}
            </li>
            <li onMouseEnter={handleServiceHover} >
              {ServiceButton}
            </li>
            <li><a>Offers</a></li>
          </ul>
        </div>
        <div className="navbar-end">
        <button className="btn btn-ghost btn-circle hidden lg:flex  ">
          <Search />
        </button>
          {CartButton}
          <a href="" className='btn bg-green rounded-full px-5 text-white flex items-center gap-2' >
            <AddIcCall />
            Contact
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header