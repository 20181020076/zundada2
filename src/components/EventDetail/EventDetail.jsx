import React, { useContext, useState } from "react";
import ItemCount from "../../components/ItemCount/ItemCount";
import { cartContext } from "../../context/CartProvider";

import HeroDetails from "../HeroDetails/HeroDetails";

const EventDetail = ({ productSelected }) => {
  const [count, setCount] = useState(1);
  const {addToCart } = useContext(cartContext);

  return (
    <div>

      
      <HeroDetails evento={productSelected}/>
      <div></div>
      <h2>{count}</h2>
      <ItemCount setCount={setCount} />
      <button onClick={() => addToCart(productSelected, count)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default EventDetail;


