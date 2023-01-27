import React, { useContext,useState,useEffect} from 'react';
import { cartContext } from '../../context/CartProvider';

const Cart = () => {
  const { cart } = useContext(cartContext);
  const [total, setTotal] = useState(0);
  // useEffect(()=>{

  // })
  return (
    <div>
      <h1>carrito: {cart.length}</h1>
      {cart.map((product) =>{
        return (
        <div key={product.name}>
          <div>{product.name}</div>
          <div>{product.quantity}</div>
        </div>)
      })}
    </div>
  )
}

export default Cart