import React, {useContext, useEffect, useState} from "react";

const CartItemsContext = React.createContext();

const CartItemsQuantityProvider = ({children}) => {

    const [itemsQuantity, setItemsQuantity] = useState(0);
    const [cartItemsQuantity, setCartItemsQuantity] = useState([]);

    const findItemById = (id) => {
        let itemToReturn = undefined;
        cartItemsQuantity.forEach((item) => {
            if(item.id === id) itemToReturn = item;
        })
        return itemToReturn;
    }

    const addItem = (item) => {
        setCartItemsQuantity((prev) => [...prev, item]);
        setItemsQuantity(itemsQuantity + 1);
    }

    const removeItemById = (id) => {
        setCartItemsQuantity((prev) => prev.filter((item) => item.id !== id));
        setItemsQuantity(itemsQuantity - 1);
    }
  
    const clearCartItems = () => {
        setCartItemsQuantity([]);
        setItemsQuantity(0);
    }

    const updatePrice = (id, quan) => {
        setCartItemsQuantity((cartItemsQuantity.map((item) => {
            if(item.id === id){
                return {
                    ...item,
                    quantity: quan, 
                    pricePerQuantity: item.price * quan  
                }
            } else{
                return item;
            }    
        })));
    }

    const sumTotalPrice = () => {
        return cartItemsQuantity.reduce((acc, item) => acc + item.pricePerQuantity, 0);
    }

    return (
        <CartItemsContext.Provider 
        value=
        {{cartItemsQuantity, itemsQuantity, findItemById,
             sumTotalPrice, setCartItemsQuantity, updatePrice,
        addItem, clearCartItems, removeItemById}}>
            {children}
        </CartItemsContext.Provider>
    )
};

const useCartItemsQuantity = () => {
    return useContext(CartItemsContext);
}

export {CartItemsQuantityProvider, useCartItemsQuantity};