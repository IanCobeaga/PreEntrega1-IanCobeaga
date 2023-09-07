import React from 'react';
import CartItem from "../components/CartItem";
import { useCartItemsQuantity } from '../Contexts/CartItemsContext';

const Checkout = () => {
  const {clearCartItems, cartItemsQuantity} = useCartItemsQuantity();

  console.log(cartItemsQuantity)

  return (
    <div className='top-space text-center spiderPrimaryFont'>
      <h1>Finalice su compra</h1>
      <ul>
        {
          cartItemsQuantity.map((item) => (
            (<li
              key={item.id}
              style={{ paddingBottom: "10px" }}>
              <CartItem item={item} />
            </li>)
          ))
        }
      </ul>
    </div>
  );
}

export default Checkout;