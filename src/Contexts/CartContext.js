import React, {useContext, useState} from 'react';

const CartContext = React.createContext();

const CartQuantityProvider = ({children}) => {
    const [itemsQuantity, setItemsQuantity] = useState(0);

    const addItem = () => {
        setItemsQuantity(itemsQuantity + 1);
    }
    
    const removeItem = () => {
        setItemsQuantity(itemsQuantity - 1);
    }
  
    const clearChart = () => {
        setItemsQuantity(0);
    }

    return (
        <CartContext.Provider 
        value={{itemsQuantity, setItemsQuantity, 
        addItem, clearChart, removeItem}}>
            {children}
        </CartContext.Provider>
    )
};

const useCartQuantity = () => {
    return useContext(CartContext);
}

export {CartQuantityProvider, useCartQuantity};