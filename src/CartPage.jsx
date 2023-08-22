import React from 'react';
import { useCartContext } from './CartContext';
import items from './data';
import './style.css'


const CartPage = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useCartContext();

  const calculateTotalAmount = () => {
    let total = 0;
    for (const itemId in cart) {
      const item = items.find((item) => item.id === parseInt(itemId));
      if (item) {
        total += item.price * cart[itemId];
      }
    }
    return total;
  };

  return (
    <div>
        
        <div className='container'>
            <div id='box'>
        {items.map((item) => (
          <div key={item.id}>
            <h2>{item.name}  </h2>
            <h3>Price :${item.price.toFixed(2)}</h3>
            <h6>{item.description}</h6>
            <img src={item.img} style={{width:"300px", height:"200px"}}></img><br></br>
            <button type="submit"onClick={() => addToCart(item.id)}>Add to Cart</button>
            {cart[item.id] && (
              <div>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                <span>Quantity: {cart[item.id]}</span>
              </div>
            )}
          </div>
        ))}
      </div>
      <div id='data'>
        <p><b>Total Quantity:</b> {Object.values(cart).reduce((acc, qty) => acc + qty, 0)}</p>
        <p><b>Total Amount: </b>${calculateTotalAmount().toFixed(2)}</p>
        <p>shipping:  FREE</p>
        <button onClick={clearCart}>Clear Cart</button>
      </div>
    </div></div>
  );
};

export default CartPage;
