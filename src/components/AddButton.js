import React, {useState, useEffect} from "react";
import { useCartItemsQuantity } from "../Contexts/CartItemsContext";

const Addbutton = ({productData}) => {

    const [added, setAdded] = useState(false)
    const { addItem, findItemById } = useCartItemsQuantity();

    useEffect(() => {
        let itemToFind = findItemById(productData.id)
        if(itemToFind != undefined){
            setAdded(true);
        }else{
            setAdded(false);
        }
    });
    
    return ((!added)
        ? <button className="btn btn-outline-light" onClick={() => 
            addItem({
                ...productData, 
                quantity: 1,
                pricePerQuantity: productData.price
            }
        )}>Agregar carrito</button>
        : <></>
        )
}

export default Addbutton;