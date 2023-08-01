import React from "react";

const ItemListContainer = ({greeting}) => {
    return(
        <div className="top-space text-center">
            <h1>{greeting}</h1>
        </div>
    );
};

export default ItemListContainer;