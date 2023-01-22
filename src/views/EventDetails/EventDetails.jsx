import React,{ useContext, useState} from "react";
import { cartContext } from "../../context/CartProvider";
import ItemCount from "../../components/ItemCount/ItemCount";
import { useParams } from "react-router-dom";

const EventDetails = () => {
  const [count, setCount] = useState(1);
  const {id} = useParams();
  const { cart, addToCart } = useContext(cartContext);
  return (
    <div>
      <h1>{id}</h1>
      <div>
        <img src="" alt="" />
      </div>
      <div></div>
      <h2>{count}</h2>
      <ItemCount setCount={setCount} />
      <button onClick={() => addToCart({nombre:"hola",cantidad:5}, count)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default EventDetails;
