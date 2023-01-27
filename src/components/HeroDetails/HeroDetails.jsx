import React from "react";
import "./HeroDetails.scss";
import styled from "styled-components";

const HeroDetails = ({ evento }) => {
  return (
    <div className="hero">
      <Event className={"hero__container"} image={evento.image}>
        <h1>{evento.name}</h1>
        {evento.image}
      </Event>
    </div>
  );
};

export default HeroDetails;

const Event = styled.div`
  background-image: url("/images/${(props) => props.image}");
  background-position: center;
  background-size: cover;
`;
