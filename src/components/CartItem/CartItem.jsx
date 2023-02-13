import React from "react";
import { cartContext } from "../../context/CartProvider";
import CoverCard from "../CoverCard/CoverCard";
import "./CartItem.scss";
const CartItem = ({ product }) => {
  return (
    <div className="cartItem">
      <div className="cartItem__image">
        <img src={`/images/${product.image}`} alt="" />
      </div>
      <div className="cartItem__description">
        <div>
          <div>
            <h2>{product.name}</h2>
          </div>
          <div>
            <CoverCard product={product} />
          </div>
        </div>
        <div>{product.quantity}</div>
      </div>
    </div>
  );
};

export default CartItem;
