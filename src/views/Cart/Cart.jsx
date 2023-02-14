import React, { useContext, useState, useEffect } from "react";
import { cartContext } from "../../context/CartProvider";
import CartItem from "../../components/CartItem/CartItem";
import BarraTotal from "../../components/BarraTotal/BarraTotal";
import "./Cart.scss";
const Cart = () => {
  const { cart } = useContext(cartContext);
  const [events, setEvents] = useState([])

  useEffect(()=>{
    fetch('http://localhost:9000/cart')
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
    })
  },[])
  return (
    <div className="cart">
      <div className="cart__total">
        <BarraTotal />
      </div>
      <div className="cart__list">
        {cart.map((idProduct) => {
          return <CartItem key={idProduct} product={idProduct} />;
        })}
      </div>
      <h1>carrito: {cart.length}</h1>
    </div>
  );
};

export default Cart;
