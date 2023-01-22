import React from 'react'
import CarrouselEvents from '../../components/CarrouselEvents/CarrouselEvents';

const Favorites = () => {
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
    },
    {
      id:4,
      name:"hola",
      image:"evento2.png",
      topic:"vallenato",
      date:"10 dic 23",
      discount:20,
      cover:50000
    }];
  return (
    <div>
      <CarrouselEvents events={events}/>
    </div>
  )
}

export default Favorites