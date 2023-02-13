import React, { useContext, useState } from "react";
import ItemCount from "../../components/ItemCount/ItemCount";
import { cartContext } from "../../context/CartProvider";
import CoverCard from "../CoverCard/CoverCard";
import HeroDetails from "../HeroDetails/HeroDetails";
import "./EventDetail.scss";
const EventDetail = ({ productSelected }) => {
  const [count, setCount] = useState(1);
  const { addToCart } = useContext(cartContext);

  return (
    <div className="eventDetails">
      <HeroDetails evento={productSelected} />
      <div className="eventDetails__date">
        <div className="eventDetails__date__day">
          <div className="eventDetails__date__day__image">
            <img src="/images/date.png" alt="" />
          </div>
          <div>{productSelected.date}</div>
        </div>
        <div className="eventDetails__date__hour">21:30 - 3:00</div>
      </div>
      <div className="eventDetails__cover">
        <CoverCard product={productSelected} newStyles={'cover'}/>
        <CoverCard product={productSelected} newStyles={'cover'}/>
      </div>
      <div className="eventDetails__button">
        <button onClick={() => addToCart(productSelected, count)}>
        <img src="/images/ticket-black.png" alt="" />
        <div className="eventDetails__button__description">Agregar al carrito</div>
      </button>
      </div>

      <h2>{count}</h2>
      <ItemCount setCount={setCount} />
      
    </div>
  );
};

export default EventDetail;
