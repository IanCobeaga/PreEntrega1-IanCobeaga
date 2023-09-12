import React, { useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import CartItem from "../components/CartItem";
import UserForm from '../components/UserForm';
import { useCartItemsQuantity } from '../Contexts/CartItemsContext';

const Checkout = () => {
  const {clearCartItems, cartItemsQuantity, totalPrice} = useCartItemsQuantity();
  const navigate = useNavigate();
  /* useEffect(() => {
    if(totalPrice === 0) navigate("/items");
  }, [totalPrice])
 */
  const endPurchase = () => {
      navigate("/items");
  }
  
  return (
    <div className='top-space text-center spiderPrimaryFont'>
      <h1>Finalice su compra</h1>
      <div className='flexCheckout'>
        <div>
          <ul>
            {
              cartItemsQuantity.map((item) => (
                (<li
                  key={item.id}
                  style={{ paddingBottom: "10px" }}>
                  <CartItem id={item.id} />
                </li>)
              ))
            }
          </ul>
        </div>
        <UserForm />
      </div>
      <div id="endShopOrCleanCart" className="mb-2">
        <h4 className="spiderPrimaryFont">TOTAL: ${totalPrice}</h4>
        <a className="btn btn-outline-light mx-2" onClick={() => endPurchase()}>Finalizar compra</a>
        <button className="btn btn-outline-light" onClick={() => clearCartItems()}>Limpiar carrito</button>
      </div>
    </div>
  );
}

export default Checkout;