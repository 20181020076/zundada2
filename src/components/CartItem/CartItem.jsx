import React from "react";
import { cartContext } from "../../context/CartProvider";
import CoverCard from "../CoverCard/CoverCard";
import "./CartItem.scss";
const CartItem = ({ idProduct }) => {
  return (
    <div className="cartItem">
      <div className="cartItem__image">
        <img src={`/images/`} alt="" />
      </div>
      <div className="cartItem__description">
        <div>
          <div>
            <h2>{}</h2>
          </div>
          <div>
            <CoverCard product={idProduct} />
          </div>
        </div>
        <div>{idProduct}</div>
      </div>
    </div>
  );
};

export default CartItem;
