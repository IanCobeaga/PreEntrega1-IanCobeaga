import React, {useContext, useEffect, useState} from "react";

const CartItemsContext = React.createContext();

const CartItemsQuantityProvider = ({children}) => {

    const [itemsQuantity, setItemsQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [cartItemsQuantity, setCartItemsQuantity] = useState([]);
    const [cartItemsQuantityAux, setCartItemsQuantityAux] = useState([]);

    useEffect(() => {
        sumTotalPrice();
        setCartItemsQuantity(cartItemsQuantityAux);
    });

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
        setCartItemsQuantityAux((prev) => prev.filter((item) => item.id !== id));
        setItemsQuantity(itemsQuantity - 1);
    }
  
    const clearCartItems = () => {
        setCartItemsQuantity([]);
        setItemsQuantity(0);
        setTotalPrice(0);
    }

    const updatePrice = (id, quan) => {
        let cartUpdated = (cartItemsQuantity.map((item) => {
            if(findItemById(id)){
                return {
                    ...item,
                    quantity: quan, 
                    pricePerQuantity: item.price * quan  
                } 
            }    
        }));
        setCartItemsQuantityAux(cartUpdated)
        console.log(cartUpdated)
    }

    const sumTotalPrice = () => {
        let acum = 0
        cartItemsQuantity.forEach((item) => {
            acum = acum + item.pricePerQuantity
        });
        setTotalPrice(acum);
    }

    return (
        <CartItemsContext.Provider 
        value=
        {{cartItemsQuantity, itemsQuantity, totalPrice, 
        findItemById, sumTotalPrice, setCartItemsQuantity, updatePrice,
        addItem, clearCartItems, removeItemById}}>
            {children}
        </CartItemsContext.Provider>
    )
};

const useCartItemsQuantity = () => {
    return useContext(CartItemsContext);
}

export {CartItemsQuantityProvider, useCartItemsQuantity};