import React from "react";

const Card = ({title}) => {
    return (
        <div class="card h-100">
            <img src="https://newsport.vtexassets.com/arquivos/ids/13500130/FW9212-A.jpg?v=637883033205600000" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">Descripcion detallada de {title}</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">Precio: $000</small>
            </div>
        </div>
    );
};

export default Card;