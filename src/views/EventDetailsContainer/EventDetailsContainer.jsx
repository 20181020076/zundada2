import React, {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EventDetail from "../../components/EventDetail/EventDetail";
const EventDetailsContainer = () => {
  const [productSelected, setProductSelected] = useState();
  
  const { id } = useParams();
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
  const getProduct = () => {
    const found = events.find( event =>event.id == id);
    if(found){
      setProductSelected(found);
    }
    
    
  };
  useEffect(() => {
    getProduct();
  }, [id]);
  return <div>{productSelected && <EventDetail productSelected={productSelected}/>}</div>;
};

export default EventDetailsContainer;
