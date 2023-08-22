import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  const addToCart = (itemId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [itemId]: (prevCart[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[itemId] && updatedCart[itemId] > 0) {
        updatedCart[itemId]--;
        if (updatedCart[itemId] === 0) {
          delete updatedCart[itemId];
        }
      }
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart({});
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
