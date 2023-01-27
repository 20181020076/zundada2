import React from "react";
import "./Home.scss";
import CarrouselCard from "../../components/CarrouselCard/CarrouselCard";
import CarrouselEvents from "../../components/CarrouselEvents/CarrouselEvents";
import CarrouselGeneric from "../../components/CarrouselGeneric/CarrouselGeneric";

const Home = () => {
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
      name: "terra bomba",
      image: "backgroundParty2.jpg",
    },
  ];
  const geners = [
    {
      name: "Reggaton",
      image: "backgroundParty3.jpg",
    },
    {
      name: "Electronica",
      image: "backgroundParty.jpg",
    },
    {
      name: "Bachata",
      image: "backgroundParty5.jpg",
    },
  ];
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
    }
  ];
  return (
    <div className="home">
      <div className="home__recommend">
        <div className="home__recommend__title">
          <h1>Recomendados para ti</h1>
        </div>
        <div className="home__recommend__carrousel">
          <CarrouselCard urlImage={"backgroundParty.jpg"} position={1} />
          <CarrouselCard urlImage={"backgroundParty4.jpg"} position={2} />
          <CarrouselCard urlImage={"backgroundParty3.jpg"} position={3} />
        </div>
      </div>
      <div className="home__nextEvents">
        <h1>Próximos eventos</h1>
        <CarrouselEvents events={events}/>
      </div>
      <div className="home__zones">
        <h1>Zonas</h1>
        <CarrouselGeneric objetos={zones} />
      </div>
      <div className="home__geners">
        <h1>Géneros</h1>
        <CarrouselGeneric objetos={geners} />
      </div>
      <div className="home__nearly">
        <h1>Cerca de Ti</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d5623.739194060705!2d-74.05477900487648!3d4.667991384449518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1szona%20t!5e0!3m2!1ses-419!2sco!4v1674782029867!5m2!1ses-419!2sco" width="100%" height="300"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>      </div>
    </div>
  );
};

export default Home;
