import React, {useEffect, useState} from "react";
import {useCartItemsQuantity} from '../Contexts/CartItemsContext';
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const CartBody = () => {

    const {clearCartItems, cartItemsQuantity, totalPrice} = useCartItemsQuantity();
    const [showButtons, setShowButtons] = useState('none');

    useEffect(() => {
        if(cartItemsQuantity !== undefined){
            if(cartItemsQuantity.length >= 1){
                setShowButtons('flex');
                document.getElementById('endShopOrCleanCart').style.cssText += 'flex-direction: column;';
            }else{
                setShowButtons('none');
            }
        }else{
                document.getElementById('dummyDiv').style.display = 'none';
                setShowButtons('none');
        }
        
    }, [cartItemsQuantity]);

    const automaticClick = () => {
        document.getElementById("closeBtn").click();
    }

    return (
        <>
            <div className="offcanvas offcanvas-end text-bg-dark gradient-style" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div className="offcanvas-header">
                    <button type="button" id="closeBtn" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="text-center">
                        <h3 className="spiderPrimaryFont">COMPRA PARCIAL</h3>
                        {(cartItemsQuantity !== undefined)
                        ?(<ul>
                            {
                            cartItemsQuantity.map((item) => (
                                    <li 
                                        key={item.id}
                                        style={{paddingBottom: "10px"}}>
                                        <CartItem id={item.id}/>
                                    </li>
                                ))
                            }
                        </ul>)
                        : <></>  
                        }
                    </div>
                </div>
                <div id="endShopOrCleanCart" style={{display:showButtons}}>
                    <h4 className="spiderPrimaryFont text-center">TOTAL: ${totalPrice}</h4>
                    <Link className="btn btn-outline-light mb-2" to="/checkout" onClick={() => automaticClick()}>Finalizar compra</Link>
                    <button className="btn btn-outline-light" onClick={() => clearCartItems()}>Limpiar carrito</button>
                </div>
            </div>
        </>
    );
};

export default CartBody;