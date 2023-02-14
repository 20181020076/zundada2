import React from 'react'
import { useLocation } from 'react-router-dom'
import './Footer.scss'
const Footer = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== '/login' &&(
        <div className='footer'>
        <div className='footer__menu'>
          <div className='footer__menu__col'>
            <h2>Zündada</h2>
            <p>Cookies Policy</p>
            <p>Cookies Managment</p>
            <p>Contacto</p>
          </div>
          <div className='footer__menu__col'>
            <h2>Más</h2>
            <p>Aviso Legal</p>
            <p>Política de Privacidad</p>
            <p>Términos y Condiciones</p>
            <p>Preguntas Frecuentes</p>
          </div>
        </div>
        <div className='footer__social'>
          <h2>Síguenos</h2>
          <ul>
            <li><img src="/images/tik-tok.png" alt=""/></li>
            <li><img src="/images/facebook.png" alt=""/></li>
            <li><img src="/images/youtube.png" alt=""/></li>
            <li><img src="/images/instagram.png" alt=""/></li>
  
          </ul>
        </div>
        <div className='footer__copyright'>
          <p>©  Zündada 2022 </p>
          <p>zundadaco@gmail.com</p>
        </div>
        
      </div>
      )}
    </>
    
  )
}

export default Footer