import React from 'react'
import './Navbar.scss';
import { Link, useLocation } from 'react-router-dom';
const Navbar = () => {
  const location = useLocation();
  return (
    <>
      {(location.pathname !== '/login' && location.pathname !=='/register') && (
        <div className='navbar'>
        <div className='navbar__links'>
        <Link to={'/profile'}><img src="/images/profile-white.png" alt=""/></Link>
          <Link to={'/profile/tickets'}><img src="/images/ticket-white.png" alt="" /></Link>
          <Link to={'/'}><h1>ZÜNDADA</h1></Link>
          <Link to={'/favorites'}><img src="/images/like-white.png" alt="" /></Link>
          <Link to={'/cart'}><img src="/images/cart.png" alt="" /></Link>
        </div>
        <div className='navbar__search'>
          <form action="">
            <input type="text"  placeholder='Buscar fiestas'/>
            <button><img src="/images/lupa.svg" alt="" /></button>
          </form>
          
        </div>
          
          
          
          
          
      </div>
      )}
    </>
    
    
  )
}

export default Navbar