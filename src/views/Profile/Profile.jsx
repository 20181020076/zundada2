import React from 'react'
import './Profile.scss'
import { Link } from 'react-router-dom'
import CarrouselEvents from '../../components/CarrouselEvents/CarrouselEvents'
const Profile = ({id,name,image,years,alias,description}) => {

  const events = [
    {
      id:1,
      name:"Fin de año",
      image:"evento.jpg",
      topic:"reggeton",
      date:"9 dic 23",
      discount:25,
      cover:30000
    },
    {
      id:2,
      name:"Diomedazo",
      image:"evento2.png",
      topic:"vallenato",
      date:"10 dic 23",
      discount:20,
      cover:50000
    },
    {
      id:3,
      name:"Regreso a clases",
      image:"evento2.png",
      topic:"vallenato",
      date:"10 dic 23",
      discount:20,
      cover:50000
    }
  ];
  const zones = [
    {
      name: "Zona T",
      image: "backgroundDj.jpg",
    },
    {
      name: "modelia",
      image: "backgroundParty5.jpg",
    },
    {
      name: "terrabomba",
      image: "backgroundParty5.jpg",
    },
  ];
  return (
    <div className='profile'>
      <div className="profile__title">
        <h1>Mi Perfil</h1>
      </div>
      <div className="profile__container">
        <div className="profile__container__image">
          <img src="/images/profile3.jpg" alt=""  className="profile__container__image__img"/>
          <img src="" alt="" className=''/>
        </div>
        <div className="profile__container__details">
          <h3>SJF839JFX</h3>
          <h3>Alias "La perra"</h3>
          <p>Laura Taiana Garcia Guzman</p>
          <h3>"Yo no tengo limites, ninguno todavia"</h3>
        </div>
      </div>
      <div className="profile__activeTickets">
        <Link to={'/profile/tickets'}><h1>Mis Tickets Activos</h1></Link>
        <CarrouselEvents events={events}/>
      </div>
      <div className="profile__disableTickets">
        <Link><h1>Mis Tickets Vencidos</h1></Link>
        <CarrouselEvents events={events}/>
      </div>
      <div className="profile__collections">
        <Link><h1>Mi Colección</h1></Link>
      </div>
    </div>
  )
}

export default Profile