import React from "react";
import EventCard from "../EventCard/EventCard";
import "./CarrouselEvents.scss";

const CarrouselEvents = ({ events }) => {
  return (
    <div className="carrouselEvents">
      
        {events.map((event) => {
          return (
            <EventCard
              key={event.id}
              id={event.id}
              name={event.name}
              image={event.image}
              topic={event.topic}
              date={event.date}
              discount={event.discount}
              cover={event.cover}
            />
          );
        })}

    </div>
  );
};

export default CarrouselEvents;
