import React, { useEffect, useState } from "react";
import { useCartItemsQuantity } from '../Contexts/CartItemsContext';

const CartItem = ({ item }) => {

    const { removeItemById, updatePrice, findItemById } = useCartItemsQuantity();
    const [itemQuantity, setItemQuantity] = useState(1);
    const [showDecrement, setShowDecrement] = useState(false);

    useEffect(() => {
        setItemQuantity(findItemById(item.id).quantity);
    }, [])

    useEffect(() => {
        let decrementBtn = document.getElementById("decrementBtn");
        if(itemQuantity > 1){
            decrementBtn.classList.add("btn-outline-light");
            setShowDecrement(true);
        }else{
            decrementBtn.classList.remove("btn-outline-light");
            setShowDecrement(false);
        }
        updatePrice(item.id, itemQuantity);
    }, [itemQuantity])

    const incrementItem = () => {
        setItemQuantity(itemQuantity + 1);
    }

    const decrementItem = () => {
        if (itemQuantity > 1) {
            setItemQuantity(itemQuantity - 1);
        }
    }

    return (
        <div key={item.id} className="cartItem">
            <img src={item.imgUrl} alt="foto-producto"
                height={30} width={30} className="imgStyle"/>
            <h6  className="cartItemText">{item.name}</h6>
            <button id="decrementBtn" style={{borderColor:(showDecrement) ? "white": "transparent"}} 
            className="btn btn-sm btn-outline-light mx-2" onClick={() => decrementItem()}>
                <span style={{color:(showDecrement) ? "": "transparent"}}>-</span>
            </button>
            <h6>{item.quantity}</h6>
            <button className="btn btn-sm btn-outline-light mx-2" onClick={() => incrementItem()}>+</button>
            <h6>${item.pricePerQuantity}</h6>
            <button className="btn btn-sm btn-outline-light mx-2" onClick={() => removeItemById(item.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                </svg>
            </button>
        </div>
    );
    };

export default CartItem;