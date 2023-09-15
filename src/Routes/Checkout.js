import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from "../components/CartItem";
import UserForm from '../components/UserForm';
import LoadingComponent from '../components/LoadingComponent';
import { useCartItemsQuantity } from '../Contexts/CartItemsContext';
import { getFirestore, collection, addDoc, Timestamp } from 'firebase/firestore';
const Checkout = () => {
  const { clearCartItems, cartItemsQuantity, sumTotalPrice } = useCartItemsQuantity();
  const [purchase, setPurchase] = useState({});
  const [buyer, setBuyer] = useState({});
  const [total, setTotal] = useState(0);
  const [purchaseEnded, setPurchaseEnded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTotal(sumTotalPrice());
  }, [sumTotalPrice]);

  useEffect(() => {
    buildPurchase();
  }, [buyer, cartItemsQuantity, total]);

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
        pricePerUnity: item.price,
        quantity: item.quantity,
        finalPrice: item.pricePerQuantity,
      }
    });
  }

  const buildPurchase = () => {
    setPurchase({
      buyer: buyer,
      items: buildItems(),
      date: Timestamp.now(),
      total: total
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

  const cancelarCompra = () => {
    alert("Compra cancelada");
    setTimeout(() => {
      clearCartItems();
      navigate("/items");
    }, 2000);
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
                  <h4 className="spiderPrimaryFont">TOTAL: ${total}</h4>
                  <a className="btn btn-outline-light mx-2" onClick={() => endPurchase()}>Finalizar compra</a>
                  <button className="btn btn-outline-light" onClick={() => cancelarCompra()}>Cancelar compra</button>
                </div>
              </div>)
              : <UserForm buildBuyer={buildBuyer} />}
          </>
        </div>)
        : (<div className='top-space text-center spiderPrimaryFont mb-2'>
          <h1>Gracias {buyer.name}!</h1>
          <h3>En breve se redirigirá hacia el catalogo. </h3>
          <LoadingComponent end={true} />
        </div>)}
    </>);
}

export default Checkout;