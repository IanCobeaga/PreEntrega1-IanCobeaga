import React from "react";
import {useCartQuantity} from '../Contexts/CartContext'
import { Link } from "react-router-dom";


const Card = ({productData, isDetail}) => {

    const {addItem} = useCartQuantity();

    return (
        <div key={productData.id} className="card h-100">
            <img src={productData.imgUrl} className="card-img-top" alt={productData.name}  />
            <div className="card-body">
                <h5 className="card-title spiderPrimaryFont">{productData.name}</h5>
                <p className="card-text">{productData.description}</p>
            </div>
            <div className="card-footer d-flex-card">
                <small className="text-muted">Precio: ${productData.price}</small>
                { isDetail 
                ? <button className="btn btn-outline-dark" onClick={() => addItem()}>Agregar carrito</button>
                : <Link className="btn btn-outline-dark" to={`/item/${productData.id}`}> Ver detalle</Link>
                }
            </div>
        </div>
    );
};

export default Card;