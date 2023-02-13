import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./CardGeneric.scss";

const CardGeneric = ({ name, image,id, type }) => {
  return (
    <Link to={`/${type==='zone'?'zones':'genders'}/${id}`} style={{ textDecoration: "none", color: "white" }}>
      <Card className={"cardGeneric"} image={image}>
        <h3>{name}</h3>
      </Card>
    </Link>
  );
};
const Card = styled.div`
  background-image: url("/images/${(props) => props.image}");
  background-position: center;
  background-size: cover;
`;
export default CardGeneric;
