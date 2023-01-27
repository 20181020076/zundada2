import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./EventCard.scss";

const EventCard = ({ id, name, image, topic, date, discount, cover, ...props }) => {
  const valueWithDiscount = (cover * (100 - discount)) / 100;
  return (
    <Link to={`/events/${id}`} className='container'>
      <div className="eventCard">
        <Card image={image} className="eventCard__image">
          <p>{topic}</p>
          <p>evento</p>
        </Card>
        <div className="eventCard__description">
          <div className="eventCard__description__name">
            <h4>{name}</h4>
          </div>
          <div className="eventCard__description__info">
            <div>{date}</div>
            <div className="eventCard__description__info__discount">
              <div className="eventCard__description__info__discount__porcentage"><strong>{discount}%off</strong></div>
              <div className="eventCard__description__info__discount__total">${cover}</div>
            </div>
          </div>
          <div className="eventCard__description__info">
            <div>by ZUNDADA BAR</div>

            <div className="eventCard__description__info__total"><strong>${valueWithDiscount}</strong></div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Card = styled.div`
  background-image: url("/images/${(props) => props.image}");
  background-position: center;
  background-size: cover;
  display: flex;
  
`;
export default EventCard;
