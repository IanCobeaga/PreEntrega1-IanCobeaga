import React from "react";
import { Link } from "react-router-dom";

const Card = ({id, img, name, description, price, isDetail}) => {

    return (
        <div key={id} className="card h-100">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title spiderPrimaryFont">{name}</h5>
                <p className="card-text">{description}</p>
            </div>
            <div className="card-footer d-flex-card">
                <small className="text-muted">Precio: ${price}</small>
                {isDetail 
                ? <></>
                : <Link className="btn btn-outline-dark" to={`/item/${id}`}> Ver detalle</Link>
                }
               
            </div>
        </div>
    );
};

export default Card;