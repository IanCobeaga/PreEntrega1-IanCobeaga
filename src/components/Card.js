import React from "react";

const Card = ({title}) => {
    return (
        <div className="card h-100">
            <img src="https://newsport.vtexassets.com/arquivos/ids/13500130/FW9212-A.jpg?v=637883033205600000" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Descripcion detallada de {title}</p>
            </div>
            <div className="card-footer">
                <small className="text-muted">Precio: $000</small>
            </div>
        </div>
    );
};

export default Card;