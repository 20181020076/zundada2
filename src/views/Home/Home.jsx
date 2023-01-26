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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolorum suscipit aliquam quo deserunt, fuga natus eum non dolorem consectetur neque ducimus, voluptates sit, perspiciatis minus aspernatur ipsa quia corporis.</p>
      </div>
    </div>
  );
};

export default Home;
