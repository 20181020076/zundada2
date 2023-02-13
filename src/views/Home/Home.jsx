import React, { useEffect, useState } from "react";
import "./Home.scss";
import CarrouselCard from "../../components/CarrouselCard/CarrouselCard";
import CarrouselEvents from "../../components/CarrouselEvents/CarrouselEvents";
import CarrouselGeneric from "../../components/CarrouselGeneric/CarrouselGeneric";

const Home = () => {
  const [zones,setZones] = useState([]);
  const [geners,setGeners] = useState([]);
  const [events,setEvents] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:9000')
    .then(response => response.json())
    .then(data=>{
      setEvents(data.events.map(item=>{
        return{
          id: item.ID_EVENT,
          name: item.NAME_EVENT,
          image: item.CARD_IMAGE,
          topic: item.TOPIC_EVENT,
          date: item.DATE_EVENT,
          discount: item.DISCOUNT_EVENT,
          cover: item.COVER_EVENT,
          consumible:item.CONSUMIBLE_EVENT

        }
      }))
      setZones(data.zones.map(item=>{
        return{
          name:item.NAME_ZONE,
          image:item.IMAGE_ZONE,
          id: item.ID_ZONE,
          type: 'zone'
        }
      }))
      setGeners(data.genders.map(item=>{
        return{
          name:item.NAME_GENDER,
          image:item.IMAGE_GENDER,
          id: item.ID_GENDER,
          type: 'gender'
        }
      }))
    })
  },[])
  
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
        </div>
    </div>
  );
};

export default Home;
