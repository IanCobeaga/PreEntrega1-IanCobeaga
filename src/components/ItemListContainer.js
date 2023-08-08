import React from "react";
import Card from "./Card";

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="top-space row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
            </div>
            <div className="col">
                <Card title={greeting}/>
            </div>
            <div className="col">
            </div>
        </div>
    );
};

export default ItemListContainer;