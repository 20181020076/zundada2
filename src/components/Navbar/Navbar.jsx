import React from 'react'
import './Navbar.scss';
const Navbar = () => {
  return (
    <div className='navbar'>
        <img src="/images/profile-white.png" alt=""/>
        <img src="/images/ticket-white.png" alt="" />
        <h1>ZÜNDADA</h1>
        <img src="/images/like-white.png" alt=""  className='menu'/>
        <img src="/images/cart.png" alt="" className='cart'/>
    </div>
  )
}

export default Navbar