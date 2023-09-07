import React, {useContext, useState} from "react";

const CartItemsContext = React.createContext();

const CartItemsQuantityProvider = ({children}) => {

    const [itemsQuantity, setItemsQuantity] = useState(0);
    const [cartItemsQuantity, setCartItemsQuantity] = useState([]);

    const addItem = (item) => {
        setCartItemsQuantity((prev) => [...prev, item]);
        setItemsQuantity(itemsQuantity + 1);
    }
    
    const removeItemById = (id) => {
        setCartItemsQuantity((prev) => prev.filter((item) => item.id !== id));
        console.log(cartItemsQuantity);
        setItemsQuantity(itemsQuantity - 1);
    }
  
    const clearCartItems = () => {
        setCartItemsQuantity([]);
        setItemsQuantity(0);
    }

    return (
        <CartItemsContext.Provider 
        value={{cartItemsQuantity, itemsQuantity, setCartItemsQuantity, 
        addItem, clearCartItems, removeItemById}}>
            {children}
        </CartItemsContext.Provider>
    )
};

const useCartItemsQuantity = () => {
    return useContext(CartItemsContext);
}

export {CartItemsQuantityProvider, useCartItemsQuantity};