import { createContext, useState } from "react";

export const cartContext = createContext([]);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };
  const addToCart = (idProduct, quantity) => {
    if (isInCart(idProduct)) {
      alert("El producto ya se encuentra en el carrito");
    } else{
      setCart([...cart, { ...idProduct, quantity }]);
    }
  };

  const clear = () => {
    setCart([]);
  };
  return (
    <cartContext.Provider value={{ cart, addToCart,clear }}>
      {children}
    </cartContext.Provider>
  );
};


export default CartProvider;