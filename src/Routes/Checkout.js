import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from "../components/CartItem";
import UserForm from '../components/UserForm';
import LoadingComponent from '../components/LoadingComponent';
import { useCartItemsQuantity } from '../Contexts/CartItemsContext';
import { getFirestore, collection, addDoc, Timestamp } from 'firebase/firestore';
const Checkout = () => {
  const { clearCartItems, cartItemsQuantity, totalPrice } = useCartItemsQuantity();
  const [purchase, setPurchase] = useState({});
  const [buyer, setBuyer] = useState({});
  const [purchaseEnded, setPurchaseEnded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    buildPurchase();
  }, [])

  const esObjetoBuyerVacio = (Buyer) => {
    return Object.keys(Buyer).length === 0;
  }

  const buildBuyer = (nameForm, phoneForm, emailForm) => {
    setBuyer({ name: nameForm, phone: phoneForm, email: emailForm });
  }

  const buildItems = () => {
    return cartItemsQuantity.map((item) => {
      return {
        id: item.id,
        name: item.name,
        price: item.pricePerQuantity,
        quantity: item.quantity
      }
    });
  }

  const buildPurchase = () => {
    setPurchase({
      buyer: buyer,
      items: buildItems(),
      date: Timestamp.now(),
      total: totalPrice
    });
  }

  const endPurchase = async () => {
    const db = getFirestore();
    const purchasesCollection = collection(db, 'purchases');
    await addDoc(purchasesCollection, purchase);
    setPurchaseEnded(true);
    clearCartItems();
    setTimeout(() => {
      navigate("/items");
    }, 3000);
  }

  return (
    <>
      {(!purchaseEnded)
        ? (<div className='top-space text-center spiderPrimaryFont'>
          <h1>Finalice su compra</h1>
          <>
            {(!esObjetoBuyerVacio(buyer))
              ? (<div className='flexCheckout mb-2'>
                <h3>Comprador: {buyer.name}</h3>
                <div>
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
                <div id="endShopOrCleanCart" className="mb-2">
                  <h4 className="spiderPrimaryFont">TOTAL: ${totalPrice}</h4>
                  <a className="btn btn-outline-light mx-2" onClick={() => endPurchase()}>Finalizar compra</a>
                  <button className="btn btn-outline-light" onClick={() => clearCartItems()}>Limpiar carrito</button>
                </div>
              </div>)
              : <UserForm buildBuyer={buildBuyer} />}
          </>
        </div>)
        : (<div className='top-space text-center spiderPrimaryFont mb-2'>
          <h1>Gracias {buyer}!</h1>
          <h3>En breve se redirigirá hacia el catalogo. </h3>
          <LoadingComponent end={true} />
        </div>)}
    </>);
}

export default Checkout;