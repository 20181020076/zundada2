import React from "react";
import CardGeneric from "../CardGeneric/CardGeneric";
import "./CarrouselGeneric.scss";

const CarrouselGeneric = ({objetos}) => {
  
  return (
    <div className="carrouselGeneric">
      {objetos.map(objeto=>{
        return <CardGeneric name={objeto.name} image={objeto.image} key={objeto.name} id={objeto.id} type={objeto.type}/>
      })}
      
    </div>
  );
};

export default CarrouselGeneric;
