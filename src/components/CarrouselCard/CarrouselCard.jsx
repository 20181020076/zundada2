import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CarrouselCard = ({ name, urlImage, position }) => {
  
  return (
    <Link style={{ textDecoration: "none", color: "white" }}>
      <Card urlImage={urlImage}>
        <h2>{position}</h2>
      </Card>
    </Link>
  );
};

const Card = styled.div`
  width: 100px;
  height: 190px;
  background-image: url("/images/${(props) => props.urlImage}");
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  border-radius: 10px;
`;

export default CarrouselCard;
