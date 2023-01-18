import React from "react";
// import { Link } from "react-router-dom";

const CarrouselCard = ({name,urlImage, position}) => {
  return (
    <div className="home__recommend__carrousel__item">
      
      <h2>{position}</h2>
      {/* <Link className="home__recommend__carrousel__item__link"><img src={`./images/${urlImage}`} alt="" /></Link> */}
    </div>
  );
};

export default CarrouselCard;
