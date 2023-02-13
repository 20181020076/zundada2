import React,{useContext,useState,useEffect} from 'react'
import { cartContext } from '../../context/CartProvider';
import './BarraTotal.scss'
const BarraTotal = () => {
  const { cart,clear } = useContext(cartContext);
  const [total, setTotal] = useState();
  const getTotalPrice = () => {
    setTotal(
      cart.reduce((acc, product) => acc + product.cover * product.quantity*(100-product.discount)/100, 0)
    );
  };
  useEffect(()=>{
    getTotalPrice()
  },[cart])
  return (
    <div className='barraTotal'>
      <div className='barraTotal__total'>
        <div>Subtotal</div>
        <div><strong>${total}</strong></div>
      </div>
      <div className='barraTotal__button'>
        <button>
          Ir a pagar
        </button>
      </div>
    </div>
  )
}

export default BarraTotal