import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EventDetail from "../../components/EventDetail/EventDetail";
const EventDetailsContainer = () => {
  const [productSelected, setProductSelected] = useState();

  const { eid } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9000/events/${eid}`)
      .then((res) => res.json())
      .then((data) => {
        setProductSelected({
          id: data[0].ID_EVENT,
          name: data[0].NAME_EVENT,
          image: data[0].CARD_IMAGE,
          topic: data[0].TOPIC_EVENT,
          date: data[0].DATE_EVENT,
          discount: data[0].DISCOUNT_EVENT,
          cover: data[0].COVER_EVENT,
          consumible: data[0].CONSUMIBLE_EVENT,
        });
      });
  }, []);

  return (
    <div>
      {productSelected && <EventDetail productSelected={productSelected} />}
    </div>
  );
};

export default EventDetailsContainer;
