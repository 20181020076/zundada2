import React, { useContext } from "react";
import { cartContext } from "../../context/CartProvider";
import CartItem from "../../components/CartItem/CartItem";
import BarraTotal from "../../components/BarraTotal/BarraTotal";
import "./Cart.scss";
const Cart = () => {
  const { cart } = useContext(cartContext);

  // useEffect(()=>{

  // })
  return (
    <div className="cart">
      <div className="cart__total">
        <BarraTotal />
      </div>
      <div className="cart__list">
        {cart.map((product) => {
          return <CartItem key={product.name} product={product} />;
        })}
      </div>
      <h1>carrito: {cart.length}</h1>
    </div>
  );
};

export default Cart;
