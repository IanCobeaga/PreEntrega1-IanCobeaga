import React from 'react';
import { Link } from "react-router-dom";
import Addbutton from "./AddButton";
import helperString from '../helpers/helperString';


const Card = ({productData, isDetail}) => {

    const {primeraLetraMayuscula} = helperString;

    return (
            <div className="card h-100 spiderPrimaryFont">
                <img src={productData.imgUrl} className="card-img-top" alt={productData.name}  />
                <div className="card-body">
                    <h5 className="card-title text-light">{primeraLetraMayuscula(productData.name)}</h5>
                    <p className="card-text text-light">{productData.description}</p>
                </div>
                <div className="card-footer d-flex-card">
                    <small className="text-light">Precio: ${productData.price}</small>
                    { isDetail 
                    ? <Addbutton productData={productData}/>
                    : <Link className="btn btn-outline-light" to={`/item/${productData.id}`}> Ver detalle</Link>
                    }
                </div>
            </div>
    );
};

export default Card;