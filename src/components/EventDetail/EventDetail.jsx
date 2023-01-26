import React, { useContext, useState } from "react";
import ItemCount from "../../components/ItemCount/ItemCount";
import { cartContext } from "../../context/CartProvider";
import styled from "styled-components";

const EventDetail = ({ productSelected }) => {
  const [count, setCount] = useState(1);
  const { cart, addToCart } = useContext(cartContext);

  return (
    <Event>
      <h1>{productSelected.name}</h1>
      <div>
        {/* <img src={`/images/${productSelected.image}`} alt="" /> */}
      </div>
      <div></div>
      <h2>{count}</h2>
      <ItemCount setCount={setCount} />
      <button onClick={() => addToCart(productSelected, count)}>
        Agregar al carrito
      </button>
    </Event>
  );
};

export default EventDetail;

const Event = styled.div`
  background-image: url("./images/${(props) => props.image}");
  background-position: center;
  background-size: cover;
`;
