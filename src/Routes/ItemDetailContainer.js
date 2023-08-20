import React from "react";

const ItemDetailContainer = ({img, name, description, price}) => {
    return (
        <div className="card h-100">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
            </div>
            <div className="card-footer d-flex-card">
                <small className="text-muted">Precio: ${price}</small>
                <button className="btn btn-outline-dark"> Ver detalle</button>
            </div>
        </div>
    );
};

export default ItemDetailContainer;